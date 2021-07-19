import React, { useRef, useState } from 'react';
import { useFocus } from '@react-aria/interactions';
import { useTheme } from '../theme';
import { validate } from '../validation';

const defaultValidator = (value: string): boolean => value.trim().length > 0;

export const Input: React.FC<{
  label: string;
  value: string;
  onChange: (str: string, isValid: boolean) => void;
  validator?: RegExp | ((str: string) => boolean);
  status?: React.ReactNode;
}> = ({ label, value, onChange, validator = defaultValidator, status }) => {
  const { shades, semantic } = useTheme();
  const debounceRef = useRef<ReturnType<typeof setTimeout>>();
  const [hasBeenEdited, setHasBeenEdited] = useState(false);
  const [isFocused, setIsFocused] = useState(false);
  const { focusProps } = useFocus({
    onFocusChange: (isFocused) => {
      setIsFocused(isFocused);
      if (!isFocused && !hasBeenEdited) {
        setHasBeenEdited(true);
      }
    },
  });

  const isValid = validate(value, validator);

  let placeholderColor = shades[70];
  let borderColor = shades[isFocused ? 70 : 50];
  if (hasBeenEdited) {
    placeholderColor = isValid ? semantic.success : semantic.danger;
    borderColor = isValid ? semantic.success : semantic.danger;

    if (!isValid && status === undefined) {
      status = validator === defaultValidator
        ? `${label} is required`
        : `${label} is invalid`;
    }
  }

  return (
    <div
      style={{
        display: 'inline-block',
      }}
    >
      <label
        style={{
          display: 'inline-block',
          position: 'relative',
        }}
      >
        <div
          style={{
            fontSize: value === '' ? 'inherit' : '75%',
            color: placeholderColor,
            opacity: isFocused && value === '' ? 0.5 : 1,
            padding: value === '' ? '1.2em 1.05em' : '.8em 1.33em 0',
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            pointerEvents: 'none',
          }}
        >
          {label}
        </div>
        <input
          {...focusProps}
          value={value}
          onChange={(event) => {
            onChange(
              event.target.value,
              validate(event.target.value, validator),
            );
            clearTimeout(debounceRef.current);
            if (!hasBeenEdited) {
              debounceRef.current = setTimeout(() => {
                if (!hasBeenEdited) {
                  setHasBeenEdited(true);
                }
              });
            }
          }}
          style={{
            color: placeholderColor,
            borderBottom: `2px solid ${borderColor}`,
            backgroundColor: shades[isFocused ? 10 : 8],
            padding: value === '' ? `1.2em 1em` : `1.7em 1em .7em`,
            fontSize: 'inherit',
            outline: 0,
            borderTop: 0,
            borderLeft: 0,
            borderRight: 0,
          }}
        />
      </label>
      {hasBeenEdited && status ? (
        <div
          style={{
            fontSize: '75%',
            color: placeholderColor,
            padding: '.8em 1.5em 0',
          }}
        >
          {status}
        </div>
      ) : null}
    </div>
  );
};
