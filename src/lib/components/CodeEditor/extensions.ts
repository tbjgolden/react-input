import {
  keymap,
  highlightSpecialChars,
  drawSelection,
  highlightActiveLine,
} from '@codemirror/view';
import { Extension, EditorState } from '@codemirror/state';
import { history, historyKeymap } from '@codemirror/history';
import { foldGutter, foldKeymap } from './fold';
import { indentOnInput } from '@codemirror/language';
import { lineNumbers, highlightActiveLineGutter } from '@codemirror/gutter';
import {
  defaultKeymap,
  indentSelection,
  insertTab,
} from '@codemirror/commands';
import { bracketMatching } from '@codemirror/matchbrackets';
import { closeBrackets, closeBracketsKeymap } from '@codemirror/closebrackets';
import { searchKeymap, highlightSelectionMatches } from '@codemirror/search';
import { autocompletion, completionKeymap } from '@codemirror/autocomplete';
import { commentKeymap } from '@codemirror/comment';
import { rectangularSelection } from '@codemirror/rectangular-selection';
import { defaultHighlightStyle } from '@codemirror/highlight';
import { lintKeymap } from '@codemirror/lint';
import { defaultTabBinding } from '@codemirror/commands';
import { selectNextOccurrence } from '@codemirror/search';

import type { LanguageSupport } from '@codemirror/language';
import { html } from '@codemirror/lang-html';
import { css } from '@codemirror/lang-css';
import { javascript } from '@codemirror/lang-javascript';
import { json } from '@codemirror/lang-json';
import { xml } from '@codemirror/lang-xml';
import { sql } from '@codemirror/lang-sql';
import { python } from '@codemirror/lang-python';
import { cpp } from '@codemirror/lang-cpp';
import { rust } from '@codemirror/lang-rust';
import { java } from '@codemirror/lang-java';

export type Language =
  | 'html'
  | 'css'
  | 'json'
  | 'python'
  | 'cpp'
  | 'rust'
  | 'java'
  | 'xml'
  | 'sql'
  | 'javascript'
  | ['xml', ...Parameters<typeof xml>]
  | ['sql', ...Parameters<typeof sql>]
  | ['javascript', ...Parameters<typeof javascript>];

export const getLanguage = (lang: Language): LanguageSupport => {
  // zero-config
  if (lang === 'html') return html();
  else if (lang === 'css') return css();
  else if (lang === 'json') return json();
  else if (lang === 'cpp') return cpp();
  else if (lang === 'rust') return rust();
  else if (lang === 'java') return java();
  else if (lang === 'python') return python();
  // default config
  else if (lang === 'xml') return xml();
  else if (lang === 'sql') return sql();
  else if (lang === 'javascript')
    return javascript({
      jsx: true,
      typescript: true,
    });
  // with config
  else if (lang[0] === 'xml') return xml(lang[1]);
  else if (lang[0] === 'sql') return sql(lang[1]);
  else return javascript(lang[1]);
};

// Extended from https://github.com/codemirror/basic-setup
const safeSelectNextOccurrence: typeof selectNextOccurrence = (...args) => {
  selectNextOccurrence(...args);
  return true;
};

export const extensions: Extension = [
  lineNumbers(),
  highlightActiveLineGutter(),
  highlightSpecialChars(),
  history(),
  foldGutter({
    openText: '\u25BC\uFE0E',
    closedText: '\u25B6\uFE0E',
  }),
  drawSelection(),
  EditorState.allowMultipleSelections.of(true),
  indentOnInput(),
  defaultHighlightStyle.fallback,
  bracketMatching(),
  closeBrackets(),
  autocompletion(),
  rectangularSelection(),
  highlightActiveLine(),
  highlightSelectionMatches(),
  keymap.of([
    ...closeBracketsKeymap,
    ...defaultKeymap,
    ...searchKeymap,
    ...historyKeymap,
    ...foldKeymap,
    ...commentKeymap,
    ...completionKeymap,
    ...lintKeymap,
    // override default behavior
    defaultTabBinding,
    // prevent Mod-d from escaping the textarea
    { key: 'Mod-d', run: safeSelectNextOccurrence },
    // ..
    { key: 'Tab', run: insertTab, shift: indentSelection },
  ]),
];

export { EditorView } from '@codemirror/view';
export { EditorState, Compartment } from '@codemirror/state';
