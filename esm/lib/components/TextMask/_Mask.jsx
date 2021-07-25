import React, { useEffect, useRef } from 'react';
import IMask from 'imask';
export const MaskInput = React.forwardRef(
  (
    {
      // the mask settings (for imask)
      mask: maskOptions,
      // the format the value is consumed as value and sent in callbacks
      // e.g. masked="1999-01-01", unmasked="19990101", typed: Date("1999-01-01")
      ioMode = 'masked',
      // must match the ioMode
      value,
      // ...
      onInputChange,
      onComplete,
      // input props
      ...inputProps
    },
    ref,
  ) => {
    const inputElRef = useRef(null);
    const maskRef = useRef(null);
    const getValue = () => {
      const mask = maskRef.current;
      if (mask !== null) {
        if (ioMode === 'typed') return mask.typedValue;
        else if (ioMode === 'unmasked') return mask.unmaskedValue;
        else return mask.value;
      }
      return value;
    };
    const setValue = (value) => {
      const mask = maskRef.current;
      if (mask !== null) {
        const nonNullableValue = value ?? '';
        if (ioMode === 'typed') mask.typedValue = nonNullableValue;
        else if (ioMode === 'unmasked') mask.unmaskedValue = nonNullableValue;
        else mask.value = nonNullableValue;
      }
    };
    const setGetAndSend = (value) => {
      const mask = maskRef.current;
      if (mask !== null) {
        setValue(value);
        const newValue = getValue();
        if (value !== newValue) {
          onInputChange?.(newValue, mask.masked.isComplete);
          if (mask.masked.isComplete) {
            onComplete?.(newValue);
          }
        }
      }
    };
    useEffect(() => {
      if (maskOptions === undefined) {
        if (maskRef.current !== null) {
          maskRef.current.destroy();
          maskRef.current = null;
        }
      } else {
        if (maskRef.current === null) {
          const inputEl = inputElRef.current;
          if (inputEl !== null) {
            const mask = IMask(inputEl, {
              ...{
                placeholderChar: '▮',
                lazy: false,
              },
              ...maskOptions,
            })
              .on('accept', () => {
                onInputChange?.(getValue(), mask.masked.isComplete);
              })
              .on('complete', () => {
                onComplete?.(getValue());
              });
            maskRef.current = mask;
            setGetAndSend(value);
          }
        } else {
          maskRef.current.updateOptions({
            placeholderChar: '▮',
            lazy: false,
            ...maskOptions,
          });
          setGetAndSend(value);
        }
      }
    });
    return (
      <input
        {...inputProps}
        {...(maskOptions === undefined
          ? {
              value: value.toString(),
              onChange: (event) => {
                onInputChange?.(event.target.value, true);
                onComplete?.(event.target.value);
              },
            }
          : {})}
        ref={(el) => {
          inputElRef.current = el;
          if (typeof ref === 'function') {
            ref(el);
          } else if (ref !== null) {
            ref.current = el;
          }
        }}
      />
    );
  },
);
