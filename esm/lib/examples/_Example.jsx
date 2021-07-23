import React from 'react';
export const Example = ({ name, children }) => {
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
