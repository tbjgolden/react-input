import React from 'react';

export const Example: React.FC<{
  name: string;
  children: React.ReactNode;
}> = ({ name, children }) => {
  return (
    <div
      style={{
        margin: '16px 0',
      }}
    >
      <p
        style={{
          marginBottom: 8,
        }}
      >
        {name}
      </p>
      <div>{children}</div>
    </div>
  );
};
