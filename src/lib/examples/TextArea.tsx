import React, { useRef, useState } from 'react';
import { TextArea } from '../components/TextArea';
import { Example } from './_Example';

export const XTextArea: React.FC = () => {
  const [textArea1, setTextArea1] = useState('');
  const [textArea2, setTextArea2] = useState('');
  const [textArea3, setTextArea3] = useState('');
  const [textArea4, setTextArea4] = useState('');
  const [textArea5, setTextArea5] = useState('');
  const textArea6Ref = useRef<HTMLTextAreaElement | null>(null);
  const [textArea6, setTextArea6] = useState('');

  return (
    <div>
      <Example name="Normal text area">
        <TextArea label="Fruit" value={textArea1} onChange={setTextArea1} />
      </Example>

      <Example name="Text area with placeholder">
        <TextArea
          label="Fruit"
          value={textArea2}
          onChange={setTextArea2}
          placeholder="Orange"
        />
      </Example>

      <Example name="Monospace text area">
        <TextArea
          label="Cyberfruit"
          value={textArea3}
          onChange={setTextArea3}
          monospace
        />
      </Example>

      <Example name="Text area with no validation">
        <TextArea
          label="Cyberfruit"
          value={textArea4}
          onChange={setTextArea4}
          validator={null}
        />
      </Example>

      <Example name="Text area with no resize (only uses automatic)">
        <TextArea
          label="Cyberfruit"
          value={textArea5}
          onChange={setTextArea5}
          validator={null}
          resize={false}
        />
      </Example>

      <Example name="Text area with custom enhancers">
        <TextArea
          label="Search"
          value={textArea6}
          onChange={setTextArea6}
          validator={null}
          ref={textArea6Ref}
          rows={1}
          startEnhancer={
            <div
              style={{
                flex: '0 0 3em',
                display: 'flex',
                alignItems: 'flex-start',
                justifyContent: 'center',
                padding: '1.3em 0',
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="1em"
                height="1em"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx={11} cy={11} r={8} />
                <path d="M21 21l-4.35-4.35" />
              </svg>
            </div>
          }
          endEnhancer={
            textArea6 === '' ? null : (
              <div
                style={{
                  flex: '0 0 3em',
                  display: 'flex',
                  alignItems: 'flex-start',
                  justifyContent: 'center',
                  padding: '1.3em 0',
                }}
              >
                <button
                  onClick={() => {
                    setTextArea6('');
                    const el = textArea6Ref.current;
                    if (el !== null) {
                      el.focus();
                    }
                  }}
                  style={{
                    background: 'none',
                    border: 'none',
                    padding: 'none',
                    margin: 'none',
                    font: 'inherit',
                    color: 'inherit',
                    lineHeight: 1,
                  }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="1em"
                    height="1em"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <circle cx={12} cy={12} r={10} />
                    <line x1={15} y1={9} x2={9} y2={15} />
                    <line x1={9} y1={9} x2={15} y2={15} />
                  </svg>
                </button>
              </div>
            )
          }
        />
      </Example>
    </div>
  );
};
