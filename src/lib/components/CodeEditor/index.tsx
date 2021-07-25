import { indentUnit } from '@codemirror/language';
import { EditorSelection } from '@codemirror/state';
import React, { useEffect, useRef, useState } from 'react';
import { useTheme } from '../../theme';
import { validate } from '../../validation';
import { useCodeTheme } from './codeTheme';

import {
  EditorView,
  EditorState,
  Compartment,
  extensions,
  Language,
  getLanguage,
} from './extensions';

const tabRegex = /\t/g;

export const CodeEditor = ({
  value,
  onChange,
  // optional
  lang = null,
  tabSize = 2,
  validator = null,
  status,
  // text input props
  name,
  disabled = false,
}: {
  value: string;
  onChange: (str: string, isValid: boolean) => void;
  // optional
  lang?: Language | null;
  tabSize?: number;
  validator?: RegExp | ((str: string) => boolean) | null;
  status?: React.ReactNode;
  // input props
  name?: string;
  disabled?: boolean;
}) => {
  const tab = new Array(tabSize).fill(' ').join('');

  const { shades, semantic } = useTheme();

  const themeCompartmentRef = useRef<Compartment | null>(null);
  const langCompartmentRef = useRef<Compartment | null>(null);
  const tabSizeCompartmentRef = useRef<Compartment | null>(null);
  const disabledCompartmentRef = useRef<Compartment | null>(null);

  const parentElRef = useRef<HTMLDivElement | null>(null);
  const editorViewRef = useRef<EditorView | null>(null);

  const [hasBeenEdited, setHasBeenEdited] = useState(false);

  const isValid = validate(value, validator);

  useEffect(() => {
    const parentEl = parentElRef.current;
    const editorView = editorViewRef.current;

    if (parentEl !== null && editorView === null) {
      const themeCompartment = new Compartment();
      themeCompartmentRef.current = themeCompartment;
      const langCompartment = new Compartment();
      langCompartmentRef.current = langCompartment;
      const tabSizeCompartment = new Compartment();
      tabSizeCompartmentRef.current = tabSizeCompartment;
      const disabledCompartment = new Compartment();
      disabledCompartmentRef.current = disabledCompartment;

      EditorState.tabSize.of(tabSize);
      editorViewRef.current = new EditorView({
        state: EditorState.create({
          doc: value,
          extensions: [
            extensions,
            themeCompartment.of(codeTheme),
            langCompartment.of(lang === null ? [] : getLanguage(lang)),
            tabSizeCompartment.of(EditorState.tabSize.of(tabSize)),
            disabledCompartment.of(EditorView.editable.of(!disabled)),
            EditorState.transactionExtender.of(({ newDoc }) => {
              const latestValue = (newDoc.toString() ?? '').replace(
                tabRegex,
                tab,
              );
              onChange(latestValue, validate(latestValue, validator));
              setHasBeenEdited(true);
              return null;
            }),
          ],
        }),
        parent: parentEl,
      });
    }

    return () => {
      editorViewRef.current?.destroy();
      editorViewRef.current = null;
    };
  }, [parentElRef]);

  useEffect(() => {
    const editorView = editorViewRef.current;
    const langCompartment = langCompartmentRef.current;

    if (editorView !== null && langCompartment !== null) {
      editorView.dispatch({
        effects: langCompartment.reconfigure(
          lang === null ? [] : getLanguage(lang),
        ),
      });
    }
  }, [lang]);

  useEffect(() => {
    const editorView = editorViewRef.current;
    const disabledCompartment = disabledCompartmentRef.current;

    if (editorView !== null && disabledCompartment !== null) {
      editorView.dispatch({
        effects: disabledCompartment.reconfigure([
          EditorView.editable.of(!disabled),
        ]),
      });
    }
  }, [disabled]);

  useEffect(() => {
    const editorView = editorViewRef.current;
    const tabSizeCompartment = tabSizeCompartmentRef.current;

    if (editorView !== null && tabSizeCompartment !== null) {
      editorView.dispatch({
        effects: tabSizeCompartment.reconfigure([
          EditorState.tabSize.of(tabSize),
          indentUnit.of(tab),
        ]),
      });
    }
  }, [tabSize]);

  useEffect(() => {
    const editorView = editorViewRef.current;
    if (editorView !== null) {
      const prevValue = editorView.state.doc.toString();
      const prevRanges = editorView.state.selection.ranges;
      if (value !== prevValue) {
        // calculate offset selection
        const indices = prevRanges
          .filter(({ from, to }) => from === to)
          .map(({ from }) => from);
        const newIndices: number[] = [];
        let delta = 0;
        let indexPtr = 0;
        for (
          let i = 0;
          i < prevValue.length && indexPtr < indices.length;
          i++
        ) {
          if (i === indices[indexPtr]) {
            newIndices.push(i + delta);
            indexPtr += 1;
          }
          if (prevValue.charCodeAt(i) === 9) {
            delta += tabSize - 1;
          }
        }
        editorView.dispatch(
          editorView.state.update({
            changes: {
              from: 0,
              to: prevValue.length,
              insert: value,
            },
            ...(newIndices.length === 0
              ? {}
              : {
                  selection: EditorSelection.create(
                    newIndices.map((index) => EditorSelection.cursor(index)),
                  ),
                }),
          }),
        );
      }
    }
  }, [value]);

  let borderColor = shades[50];
  let statusColor = shades[70];
  if (hasBeenEdited && validator !== null) {
    borderColor = isValid ? semantic.success : semantic.danger;
    statusColor = isValid ? semantic.success : semantic.danger;
  }

  const codeTheme = useCodeTheme(borderColor);

  useEffect(() => {
    const editorView = editorViewRef.current;
    const themeCompartment = themeCompartmentRef.current;

    if (editorView !== null && themeCompartment !== null) {
      editorView.dispatch({
        effects: themeCompartment.reconfigure(codeTheme),
      });
    }
  }, [codeTheme]);

  return (
    <div>
      <div key="editor" ref={parentElRef} />
      {name === undefined ? null : (
        <input type="hidden" name={name} value={value} />
      )}
      {hasBeenEdited && status ? (
        <div
          style={{
            fontSize: '75%',
            color: statusColor,
            padding: '.6em 1.4em 0',
          }}
        >
          {status}
        </div>
      ) : null}
    </div>
  );
};
