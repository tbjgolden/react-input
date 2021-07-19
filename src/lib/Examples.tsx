import React, { useState } from 'react';
import { Input } from './components/Input';

export const Examples: React.FC = () => {
  const [input1, setInput1] = useState('');
  const [input2, setInput2] = useState('');

  return (
    <div>
      <Example name="Normal text input">
        <Input
          label="Fruit"
          value={input1}
          onChange={(input) => setInput1(input)}
        />
      </Example>

      <Example name="Text input with placeholder">
        <Input
          label="Fruit"
          value={input2}
          onChange={(input) => setInput2(input)}
          placeholder="Orange"
        />
      </Example>
    </div>
  );
};

const Example: React.FC<{
  name: string;
  children: React.ReactNode;
}> = ({
  name,
  children,
}) => {
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
