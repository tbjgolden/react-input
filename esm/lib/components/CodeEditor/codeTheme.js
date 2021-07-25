import { EditorView } from '@codemirror/view';
import { HighlightStyle, tags as t } from '@codemirror/highlight';
import { useTheme } from '../../theme';
import { useMemo } from 'react';
export const useCodeTheme = (borderColor) => {
  const { shades, isDarkMode, monospaceFont } = useTheme();
  const l = (n) => (isDarkMode ? n : 100 - n);
  const theme = {
    defaultText: shades[isDarkMode ? 80 : 70],
    highlightText: shades[90],
    popupBackground: shades[0],
    highlightBackground: shades[isDarkMode ? 15 : 12],
    background: shades[isDarkMode ? 10 : 8],
    selectionBg: `hsl(220,48%,${l(25)}%)`,
    selectionMatchBg: `hsl(220,24%,${l(20)}%)`,
    cursor: `hsl(0,0%,${l(100)}%)`,
    //
    searchMatchBg: `hsl(60,100%,${l(10)}%)`,
    searchMatchSelected: `hsl(60,100%,${l(15)}%)`,
    //
    chalky: `hsl(39,67%,${l(69)}%)`,
    coral: `hsl(355,65%,${l(65)}%)`,
    cyan: `hsl(186,47%,${l(54)}%)`,
    invalid: `hsl(0,0%,${l(100)}%)`,
    stone: `hsl(218,12%,${l(54)}%)`,
    malibu: `hsl(207,81%,${l(65)}%)`,
    sage: `hsl(94,38%,${l(62)}%)`,
    whiskey: `hsl(29,53%,${l(61)}%)`,
    violet: `hsl(286,59%,${l(66)}%)`,
    //
    bracketText: shades[100],
    bracketBg: shades[20],
    tooltipBorder: `hsl(222,12%,${l(10)}%)`,
    foldPlaceholderText: `hsl(0,0%,${l(86)})`,
  };
  return useMemo(
    () => [
      EditorView.theme(
        {
          '&': {
            color: theme.defaultText,
            backgroundColor: theme.background,
            fontFamily: monospaceFont,
          },
          '&:focus': {
            outline: 'unset',
          },
          '.cm-scroller': {
            fontFamily: monospaceFont,
          },
          '.cm-content': {
            caretColor: theme.cursor,
          },
          '&.cm-focused': { outline: 0 },
          '&.cm-focused .cm-cursor': { borderLeftColor: theme.cursor },
          '&.cm-focused .cm-selectionBackground, .cm-selectionBackground, ::selection':
            { backgroundColor: theme.selectionBg },
          '.cm-panels': {
            backgroundColor: theme.popupBackground,
            color: theme.defaultText,
            border: 0,
          },
          '.cm-searchMatch': {
            backgroundColor: theme.searchMatchBg,
          },
          '.cm-searchMatch.cm-searchMatch-selected': {
            backgroundColor: theme.searchMatchSelected,
          },
          '.cm-activeLine': {
            backgroundColor: theme.highlightBackground,
            color: theme.highlightText,
          },
          '.cm-selectionMatch': { backgroundColor: theme.selectionMatchBg },
          '.cm-matchingBracket, .cm-nonmatchingBracket': {
            backgroundColor: theme.bracketBg,
            color: theme.bracketText,
          },
          '.cm-gutters': {
            backgroundColor: theme.background,
            color: theme.defaultText,
            borderTop: 0,
            borderLeft: 0,
            borderBottom: 0,
            borderRight: `2px solid ${borderColor}`,
            userSelect: 'none',
          },
          '.cm-gutterElement': {
            padding: '0 4px',
          },
          '.cm-foldMarker': {
            display: 'inline-block',
            transform: 'scale(0.8)',
          },
          '.cm-activeLineGutter': {
            backgroundColor: theme.highlightBackground,
            color: theme.highlightText,
          },
          '.cm-foldPlaceholder': {
            backgroundColor: 'transparent',
            border: 'none',
            color: theme.foldPlaceholderText,
          },
          '.cm-tooltip': {
            border: `1px solid ${theme.tooltipBorder}`,
            backgroundColor: theme.popupBackground,
          },
          '.cm-tooltip-autocomplete': {
            '& > ul > li[aria-selected]': {
              backgroundColor: theme.highlightBackground,
              color: theme.defaultText,
            },
          },
          '.cm-line': {
            padding: '0 .4em',
          },
        },
        { dark: isDarkMode },
      ),
      HighlightStyle.define([
        { tag: t.keyword, color: theme.violet },
        {
          tag: [t.name, t.deleted, t.character, t.propertyName, t.macroName],
          color: theme.coral,
        },
        { tag: [t.function(t.variableName), t.labelName], color: theme.malibu },
        {
          tag: [t.color, t.constant(t.name), t.standard(t.name)],
          color: theme.whiskey,
        },
        { tag: [t.definition(t.name), t.separator], color: theme.defaultText },
        {
          tag: [
            t.typeName,
            t.className,
            t.number,
            t.changed,
            t.annotation,
            t.modifier,
            t.self,
            t.namespace,
          ],
          color: theme.chalky,
        },
        {
          tag: [
            t.operator,
            t.operatorKeyword,
            t.url,
            t.escape,
            t.regexp,
            t.link,
            t.special(t.string),
          ],
          color: theme.cyan,
        },
        { tag: [t.meta, t.comment], color: theme.stone },
        { tag: t.strong, fontWeight: 'bold' },
        { tag: t.emphasis, fontStyle: 'italic' },
        { tag: t.strikethrough, textDecoration: 'line-through' },
        { tag: t.link, color: theme.stone, textDecoration: 'underline' },
        { tag: t.heading, fontWeight: 'bold', color: theme.coral },
        {
          tag: [t.atom, t.bool, t.special(t.variableName)],
          color: theme.whiskey,
        },
        {
          tag: [t.processingInstruction, t.string, t.inserted],
          color: theme.sage,
        },
        { tag: t.invalid, color: theme.defaultText },
      ]),
    ],
    [shades, isDarkMode, borderColor],
  );
};
