import React, { useState } from 'react';
import { TextInput } from '../components/TextInput';
import { CodeEditor } from '../components/CodeEditor';
import { Example } from './_Example';
import type { Language } from '../components/CodeEditor/extensions';

export const XCodeEditor: React.FC = () => {
  const [codeEditor1, setCodeEditor1] = useState('');
  const [codeEditor2, setCodeEditor2] = useState('');
  const [codeEditor2Lang, setCodeEditor2Lang] = useState('html');
  const [codeEditor2TabSize, setCodeEditor2TabSize] = useState(2);
  const [codeEditor3, setCodeEditor3] = useState('');
  const [codeEditor4, setCodeEditor4] = useState(
    '// expects valid json, so remove this comment!\n{\n  "x": 3\n}',
  );
  const [codeEditor5, setCodeEditor5] = useState(
    '<!doctype html>\n<html>\n  <head><title>Hi</title></head>\n  <body><h1>Hi</h1></body>\n</html>',
  );

  return (
    <div>
      <p>
        With these editors, press Esc, then Tab to change the focused element.
      </p>
      <p>
        You should make this obvious to your users. Overriding Tab logic is
        against accessibility guidelines, but essential for a powerful code
        editor!
      </p>
      <hr />
      <Example name="JavaScript code editor">
        <CodeEditor
          lang="javascript"
          value={codeEditor1}
          onChange={setCodeEditor1}
        />
      </Example>
      <Example name="Code editor with settings">
        <label>
          Language:{' '}
          <select
            onChange={(event) => {
              setCodeEditor2Lang(event.target.value);
            }}
            value={codeEditor2Lang}
          >
            {[
              'html',
              'css',
              'json',
              'python',
              'cpp',
              'rust',
              'java',
              'xml',
              'sql',
              'javascript',
            ].map((language) => (
              <option key={language} value={language}>
                {language}
              </option>
            ))}
          </select>
        </label>{' '}
        <label>
          Tab size:{' '}
          <select
            onChange={(event) => {
              setCodeEditor2TabSize(parseInt(event.target.value));
            }}
            value={codeEditor2TabSize}
          >
            {['0', '1', '2', '4', '8'].map((language) => (
              <option key={language} value={language}>
                {language}
              </option>
            ))}
          </select>
        </label>
        <CodeEditor
          lang={codeEditor2Lang as Language}
          tabSize={codeEditor2TabSize}
          value={codeEditor2}
          onChange={setCodeEditor2}
        />
      </Example>
      <Example name="Text area with no line numbers or highlighting">
        <CodeEditor value={codeEditor3} onChange={setCodeEditor3} />
      </Example>
      <Example name="Text area with custom validation">
        <CodeEditor
          lang="json"
          value={codeEditor4}
          onChange={setCodeEditor4}
          validator={(value) => {
            let isValid = false;
            try {
              JSON.parse(value);
              isValid = true;
            } catch (e) {}
            return isValid;
          }}
        />
      </Example>
      <Example name="Disabled text area">
        <CodeEditor
          lang="html"
          disabled
          value={codeEditor5}
          onChange={setCodeEditor5}
        />
      </Example>
    </div>
  );
};
