import React, { useRef, useState } from 'react';
import { TextInput } from '../components/TextInput';

export const XTextInput: React.FC = () => {
  const [textInput1, setTextInput1] = useState('');
  const [textInput2, setTextInput2] = useState('');
  const [textInput3, setTextInput3] = useState('');
  const [textInput4, setTextInput4] = useState('');
  const textInput5Ref = useRef<HTMLInputElement | null>(null);
  const [textInput5, setTextInput5] = useState('');

  return (
    <div>
      <Example name="Normal text input">
        <TextInput label="Fruit" value={textInput1} onChange={setTextInput1} />
      </Example>

      <Example name="Text input with placeholder">
        <TextInput
          label="Fruit"
          value={textInput2}
          onChange={setTextInput2}
          placeholder="Orange"
        />
      </Example>

      <Example name="Monospace text input">
        <TextInput
          label="Cyberfruit"
          value={textInput3}
          onChange={setTextInput3}
          monospace
        />
      </Example>

      <Example name="Text input with no validation">
        <TextInput
          label="Cyberfruit"
          value={textInput4}
          onChange={setTextInput4}
          validator={null}
        />
      </Example>

      <Example name="Text input with custom enhancers">
        <TextInput
          label="Search"
          value={textInput5}
          onChange={setTextInput5}
          validator={null}
          ref={textInput5Ref}
          startEnhancer={
            <div
              style={{
                flex: '0 0 3em',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
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
            textInput5 === '' ? null : (
              <div
                style={{
                  flex: '0 0 3em',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <button
                  onClick={() => {
                    setTextInput5('');
                    const el = textInput5Ref.current;
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

const Example: React.FC<{
  name: string;
  children: React.ReactNode;
}> = ({ name, children }) => {
  return (
    <div
      style={{
        margin: '16px 0',
      }}
    >
      <div
        style={{
          marginBottom: 8,
        }}
      >
        {name}
      </div>
      <div>{children}</div>
    </div>
  );
};
