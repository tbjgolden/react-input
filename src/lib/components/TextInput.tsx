import React, { ForwardedRef, useRef, useState } from 'react';
import { useFocus } from '@react-aria/interactions';
import { useTheme } from '../theme';
import { validate } from '../validation';

const isVisibleNode = (node?: React.ReactNode): boolean => {
  return node !== undefined && node !== null && node !== true && node !== false;
};
const defaultValidator = (value: string): boolean => value.trim().length > 0;

export const TextInput = React.forwardRef(
  (
    {
      label,
      value,
      onChange,
      // optional
      validator = defaultValidator,
      status,
      startEnhancer,
      endEnhancer,
      monospace = false,
      // text input props
      name = label,
      disabled = false,
      autoComplete = 'on',
      placeholder,
    }: {
      label: string;
      value: string;
      onChange: (str: string, isValid: boolean) => void;
      // optional
      validator?: RegExp | ((str: string) => boolean) | null;
      status?: React.ReactNode;
      startEnhancer?: React.ReactNode;
      endEnhancer?: React.ReactNode;
      monospace?: boolean;
      // input props
      name?: HTMLInputElement['name'];
      disabled?: HTMLInputElement['disabled'];
      autoComplete?: HTMLInputElement['autocomplete'];
      placeholder?: HTMLInputElement['placeholder'];
    },
    ref: ForwardedRef<HTMLInputElement>,
  ) => {
    const { isDarkMode, shades, semantic, monospaceFont } = useTheme();
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

    const textColor = shades[isFocused ? 100 : isDarkMode ? 80 : 70];
    const backgroundColor = disabled
      ? shades[30]
      : shades[isFocused ? (isDarkMode ? 15 : 12) : isDarkMode ? 10 : 8];
    let labelColor = shades[70];
    let borderColor = shades[isFocused ? 70 : 50];
    let statusColor = shades[70];
    if (hasBeenEdited && validator !== null) {
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
            display: 'flex',
            position: 'relative',
            borderBottom: `2px solid ${borderColor}`,
            backgroundColor,
            color: textColor,
          }}
        >
          {startEnhancer}
          <div
            style={{
              flex: '1 1 auto',
              position: 'relative',
            }}
          >
            <input
              {...focusProps}
              ref={ref}
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
                paddingTop: inputIsClosed ? '1.2em' : '1.7em',
                paddingBottom: inputIsClosed ? '1.2em' : '.7em',
                paddingLeft: isVisibleNode(startEnhancer) ? 0 : '1em',
                paddingRight: isVisibleNode(endEnhancer) ? 0 : '1em',
                font: 'inherit',
                outline: 0,
                border: 0,
                width: '100%',
                background: 'transparent',
                position: 'relative',
                zIndex: 2,
                fontFamily: monospace ? monospaceFont : 'inherit',
              }}
            />
            <div
              style={{
                position: 'absolute',
                top: 0,
                left: isVisibleNode(startEnhancer) ? 0 : '1em',
                right: isVisibleNode(endEnhancer) ? 0 : '1em',
                bottom: 0,
              }}
            >
              <div
                style={{
                  fontSize: inputIsClosed ? 'inherit' : '75%',
                  color: labelColor,
                  padding: inputIsClosed ? '1.2em 0' : '.8em 0 0',
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  width: '100%',
                  height: '100%',
                  pointerEvents: 'none',
                  userSelect: 'none',
                }}
              >
                {label}
              </div>
              {value === '' && placeholder !== undefined ? (
                <div
                  style={{
                    position: 'absolute',
                    top: inputIsClosed ? '1.2em' : '1.7em',
                    left: 0,
                    userSelect: 'none',
                    pointerEvents: 'none',
                    color: shades[40],
                    padding: 0,
                    fontSize: 'inherit',
                    outline: 0,
                    border: 0,
                    background: 'transparent',
                    whiteSpace: 'pre',
                    overflow: 'hidden',
                  }}
                >
                  {placeholder}
                </div>
              ) : null}
            </div>
          </div>
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
  },
);
