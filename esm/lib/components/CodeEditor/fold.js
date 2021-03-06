import {
  combineConfig,
  StateEffect,
  Facet,
  StateField,
} from '@codemirror/state';
import {
  EditorView,
  Decoration,
  WidgetType,
  ViewPlugin,
} from '@codemirror/view';
import { foldable, language } from '@codemirror/language';
import { gutter, GutterMarker } from '@codemirror/gutter';
import { RangeSet, RangeSetBuilder } from '@codemirror/rangeset';
function mapRange(range, mapping) {
  let from = mapping.mapPos(range.from, 1),
    to = mapping.mapPos(range.to, -1);
  return from >= to ? undefined : { from, to };
}
/// State effect that can be attached to a transaction to fold the
/// given range. (You probably only need this in exceptional
/// circumstancesâ€”usually you'll just want to let
/// [`foldCode`](#fold.foldCode) and the [fold
/// gutter](#fold.foldGutter) create the transactions.)
export const foldEffect = StateEffect.define({ map: mapRange });
/// State effect that unfolds the given range (if it was folded).
export const unfoldEffect = StateEffect.define({ map: mapRange });
function selectedLines(view) {
  let lines = [];
  for (let { head } of view.state.selection.ranges) {
    if (lines.some((l) => l.from <= head && l.to >= head)) continue;
    lines.push(view.visualLineAt(head));
  }
  return lines;
}
const foldState = StateField.define({
  create() {
    return Decoration.none;
  },
  update(folded, tr) {
    folded = folded.map(tr.changes);
    for (let e of tr.effects) {
      if (e.is(foldEffect) && !foldExists(folded, e.value.from, e.value.to))
        folded = folded.update({
          add: [foldWidget.range(e.value.from, e.value.to)],
        });
      else if (e.is(unfoldEffect))
        folded = folded.update({
          filter: (from, to) => e.value.from != from || e.value.to != to,
          filterFrom: e.value.from,
          filterTo: e.value.to,
        });
    }
    // Clear folded ranges that cover the selection head
    if (tr.selection) {
      let onSelection = false,
        { head } = tr.selection.main;
      folded.between(head, head, (a, b) => {
        if (a < head && b > head) onSelection = true;
      });
      if (onSelection)
        folded = folded.update({
          filterFrom: head,
          filterTo: head,
          filter: (a, b) => b <= head || a >= head,
        });
    }
    return folded;
  },
  provide: (f) => EditorView.decorations.compute([f], (s) => s.field(f)),
});
/// Get a [range set](#rangeset.RangeSet) containing the folded ranges
/// in the given state.
export function foldedRanges(state) {
  return state.field(foldState, false) || RangeSet.empty;
}
function foldInside(state, from, to) {
  let found = null;
  state.field(foldState, false)?.between(from, to, (from, to) => {
    if (!found || found.from > from) found = { from, to };
  });
  return found;
}
function foldExists(folded, from, to) {
  let found = false;
  folded.between(from, from, (a, b) => {
    if (a == from && b == to) found = true;
  });
  return found;
}
function maybeEnable(state, other) {
  return state.field(foldState, false)
    ? other
    : other.concat(StateEffect.appendConfig.of(codeFolding()));
}
/// Fold the lines that are selected, if possible.
export const foldCode = (view) => {
  for (let line of selectedLines(view)) {
    let range = foldable(view.state, line.from, line.to);
    if (range) {
      view.dispatch({
        effects: maybeEnable(view.state, [
          foldEffect.of(range),
          announceFold(view, range),
        ]),
      });
      return true;
    }
  }
  return false;
};
/// Unfold folded ranges on selected lines.
export const unfoldCode = (view) => {
  if (!view.state.field(foldState, false)) return false;
  let effects = [];
  for (let line of selectedLines(view)) {
    let folded = foldInside(view.state, line.from, line.to);
    if (folded)
      effects.push(unfoldEffect.of(folded), announceFold(view, folded, false));
  }
  if (effects.length) view.dispatch({ effects });
  return effects.length > 0;
};
function announceFold(view, range, fold = true) {
  let lineFrom = view.state.doc.lineAt(range.from).number,
    lineTo = view.state.doc.lineAt(range.to).number;
  return EditorView.announce.of(
    `${view.state.phrase(
      fold ? 'Folded lines' : 'Unfolded lines',
    )} ${lineFrom} ${view.state.phrase('to')} ${lineTo}.`,
  );
}
/// Fold all top-level foldable ranges.
export const foldAll = (view) => {
  let { state } = view,
    effects = [];
  for (let pos = 0; pos < state.doc.length; ) {
    let line = view.visualLineAt(pos),
      range = foldable(state, line.from, line.to);
    if (range) effects.push(foldEffect.of(range));
    pos = (range ? view.visualLineAt(range.to) : line).to + 1;
  }
  if (effects.length)
    view.dispatch({ effects: maybeEnable(view.state, effects) });
  return !!effects.length;
};
/// Unfold all folded code.
export const unfoldAll = (view) => {
  let field = view.state.field(foldState, false);
  if (!field || !field.size) return false;
  let effects = [];
  field.between(0, view.state.doc.length, (from, to) => {
    effects.push(unfoldEffect.of({ from, to }));
  });
  view.dispatch({ effects });
  return true;
};
/// Default fold-related key bindings.
///
///  - Ctrl-Shift-[ (Cmd-Alt-[ on macOS): [`foldCode`](#fold.foldCode).
///  - Ctrl-Shift-] (Cmd-Alt-] on macOS): [`unfoldCode`](#fold.unfoldCode).
///  - Ctrl-Alt-[: [`foldAll`](#fold.foldAll).
///  - Ctrl-Alt-]: [`unfoldAll`](#fold.unfoldAll).
export const foldKeymap = [
  { key: 'Ctrl-Shift-[', mac: 'Cmd-Alt-[', run: foldCode },
  { key: 'Ctrl-Shift-]', mac: 'Cmd-Alt-]', run: unfoldCode },
  { key: 'Ctrl-Alt-[', run: foldAll },
  { key: 'Ctrl-Alt-]', run: unfoldAll },
];
const defaultConfig = {
  placeholderDOM: null,
  placeholderText: 'â€¦',
};
const foldConfig = Facet.define({
  combine(values) {
    return combineConfig(values, defaultConfig);
  },
});
/// Create an extension that configures code folding.
export function codeFolding(config) {
  let result = [foldState, baseTheme];
  if (config) result.push(foldConfig.of(config));
  return result;
}
const foldWidget = Decoration.replace({
  widget: new (class extends WidgetType {
    ignoreEvents() {
      return false;
    }
    toDOM(view) {
      let { state } = view,
        conf = state.facet(foldConfig);
      if (conf.placeholderDOM) return conf.placeholderDOM();
      let element = document.createElement('span');
      element.textContent = conf.placeholderText;
      element.setAttribute('aria-label', state.phrase('folded code'));
      element.title = state.phrase('unfold');
      element.className = 'cm-foldPlaceholder';
      element.onclick = (event) => {
        let line = view.visualLineAt(view.posAtDOM(event.target));
        let folded = foldInside(view.state, line.from, line.to);
        if (folded) view.dispatch({ effects: unfoldEffect.of(folded) });
        event.preventDefault();
      };
      return element;
    }
  })(),
});
const foldGutterDefaults = {
  openText: 'âŚ„',
  closedText: 'â€ş',
  markerDOM: null,
};
class FoldMarker extends GutterMarker {
  config;
  open;
  constructor(config, open) {
    super();
    this.config = config;
    this.open = open;
  }
  eq(other) {
    return this.config == other.config && this.open == other.open;
  }
  toDOM(view) {
    if (this.config.markerDOM) return this.config.markerDOM(this.open);
    let span = document.createElement('span');
    span.textContent = this.open
      ? this.config.openText
      : this.config.closedText;
    span.title = view.state.phrase(this.open ? 'Fold line' : 'Unfold line');
    span.className = 'cm-foldMarker';
    return span;
  }
}
/// Create an extension that registers a fold gutter, which shows a
/// fold status indicator before foldable lines (which can be clicked
/// to fold or unfold the line).
export function foldGutter(config = {}) {
  let fullConfig = { ...foldGutterDefaults, ...config };
  let canFold = new FoldMarker(fullConfig, true),
    canUnfold = new FoldMarker(fullConfig, false);
  let markers = ViewPlugin.fromClass(
    class {
      markers;
      from;
      constructor(view) {
        this.from = view.viewport.from;
        this.markers = this.buildMarkers(view);
      }
      update(update) {
        if (
          update.docChanged ||
          update.viewportChanged ||
          update.startState.facet(language) != update.state.facet(language) ||
          update.startState.field(foldState, false) !=
            update.state.field(foldState, false)
        )
          this.markers = this.buildMarkers(update.view);
      }
      buildMarkers(view) {
        let builder = new RangeSetBuilder();
        view.viewportLines((line) => {
          let mark = foldInside(view.state, line.from, line.to)
            ? canUnfold
            : foldable(view.state, line.from, line.to)
            ? canFold
            : null;
          if (mark) builder.add(line.from, line.from, mark);
        });
        return builder.finish();
      }
    },
  );
  return [
    markers,
    gutter({
      class: 'cm-foldGutter',
      markers(view) {
        return view.plugin(markers)?.markers || RangeSet.empty;
      },
      initialSpacer() {
        return new FoldMarker(fullConfig, false);
      },
      domEventHandlers: {
        click: (view, line) => {
          let folded = foldInside(view.state, line.from, line.to);
          if (folded) {
            view.dispatch({ effects: unfoldEffect.of(folded) });
            return true;
          }
          let range = foldable(view.state, line.from, line.to);
          if (range) {
            view.dispatch({ effects: foldEffect.of(range) });
            return true;
          }
          return false;
        },
      },
    }),
    codeFolding(),
  ];
}
const baseTheme = EditorView.baseTheme({
  '.cm-foldPlaceholder': {
    backgroundColor: '#eee',
    border: '1px solid #ddd',
    color: '#888',
    borderRadius: '.2em',
    margin: '0 1px',
    padding: '0 1px',
    cursor: 'pointer',
  },
  '.cm-foldGutter .cm-gutterElement': {
    padding: '0 .4em 0 .2em',
    cursor: 'pointer',
  },
});
