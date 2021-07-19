import React, { useRef, useState } from 'react';
import { useFocus } from '@react-aria/interactions';
import { useTheme } from '../theme';
import { validate } from '../validation';

const defaultValidator = (value: string): boolean => value.trim().length > 0;

export const Input: React.FC<{
  label: string;
  value: string;
  onChange: (str: string, isValid: boolean) => void;
  // optional
  validator?: RegExp | ((str: string) => boolean);
  status?: React.ReactNode;
  startEnhancer?: React.ReactNode;
  endEnhancer?: React.ReactNode;
  // input props
  name?: HTMLInputElement['name'];
  disabled?: HTMLInputElement['disabled'];
  autoComplete?: HTMLInputElement['autocomplete'];
  placeholder?: HTMLInputElement['placeholder'];
}> = ({
  label,
  value,
  onChange,
  validator = defaultValidator,
  status,
  startEnhancer,
  endEnhancer,

  name = label,
  disabled = false,
  autoComplete = 'on',
  placeholder,
}) => {
  const { isDarkMode, shades, semantic } = useTheme();
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

  const inputIsClosed = value === '' && placeholder === undefined;

  const textColor = shades[isFocused ? 100 : isDarkMode ? 80 : 70]
  const backgroundColor = shades[isFocused ? (isDarkMode ? 15 : 12) : isDarkMode ? 10 : 8]
  let labelColor = shades[70];
  let borderColor = shades[isFocused ? 70 : 50];
  let statusColor = shades[70];
  if (hasBeenEdited) {
    labelColor = `${(isValid ? semantic.success : semantic.danger).slice(
      0,
      -1,
    )},${isFocused && inputIsClosed ? 0.6 : 1})`;
    borderColor = isValid ? semantic.success : semantic.danger;
    statusColor = isValid ? semantic.success : semantic.danger;

    if (!isValid && status === undefined) {
      status =
        validator === defaultValidator
          ? `${label} is required`
          : `${label} is invalid`;
    }
  }

  return (
    <div>
      <label
        style={{
          display: 'block',
          position: 'relative',
          borderBottom: `2px solid ${borderColor}`,
          backgroundColor,
        }}
      >
        <div
          style={{
            fontSize: inputIsClosed ? 'inherit' : '75%',
            color: labelColor,
            padding: inputIsClosed ? '1.2em 1em' : '.8em 1.37em 0',
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
        {startEnhancer}
        <input
          {...focusProps}
          name={name}
          disabled={disabled}
          autoComplete={autoComplete}
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
              }, 300);
            }
          }}
          style={{
            color: textColor,
            padding: inputIsClosed ? `1.2em 1em` : `1.7em 1em .7em`,
            fontSize: 'inherit',
            outline: 0,
            border: 0,
            background: 'transparent',
          }}
        />
        {value === '' && placeholder !== undefined ? (
          <div
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              userSelect: 'none',
              pointerEvents: 'none',
              color: shades[40],
              padding: inputIsClosed ? `1.2em 1em` : `1.7em 1em .7em`,
              fontSize: 'inherit',
              outline: 0,
              border: 0,
              background: 'transparent',
            }}
          >
            {placeholder}
          </div>
        ) : null}
        {endEnhancer}
      </label>
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
