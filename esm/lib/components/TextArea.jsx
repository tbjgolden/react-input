import React, { useMemo, useRef, useState } from 'react';
import { useFocus } from '@react-aria/interactions';
import { useTheme } from '../theme';
import { validate } from '../validation';
const isVisibleNode = (node) => {
  return node !== undefined && node !== null && node !== true && node !== false;
};
const defaultValidator = (value) => value.trim().length > 0;
export const TextArea = React.forwardRef(
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
      resize = true,
      // textarea props
      name = label,
      disabled = false,
      autoComplete = 'on',
      placeholder,
      rows = 3,
    },
    ref,
  ) => {
    const { isDarkMode, shades, semantic, monospaceFont } = useTheme();
    const debounceRef = useRef();
    const prevDimensions = useRef({
      y: 0,
      height: 0,
    });
    const [customHeight, setCustomHeight] = useState(null);
    const [hasBeenEdited, setHasBeenEdited] = useState(false);
    const [isFocused, setIsFocused] = useState(false);
    const [isBeingDragged, setIsBeingDragged] = useState(false);
    const { focusProps } = useFocus({
      onFocusChange: (isFocused) => {
        setIsFocused(isFocused);
        if (!isFocused && !hasBeenEdited) {
          setHasBeenEdited(true);
        }
      },
    });
    const textAreaElRef = useRef(null);
    const measureRef = useRef(null);
    const lineHeight = measureRef.current?.clientHeight ?? 19;
    const fontSize = measureRef.current?.clientWidth ?? 16;
    const contentHeight = useMemo(() => {
      let newLineCount = 0;
      for (let i = value.length; i >= 0; i--) {
        if (value.charCodeAt(i) === 10) newLineCount += 1;
      }
      return lineHeight * Math.max(rows, newLineCount + 1) + 2.4 * fontSize;
    }, [value, rows]);
    const height = Math.max(customHeight ?? 0, contentHeight);
    const resizeCursor = height === contentHeight ? 's-resize' : 'ns-resize';
    const onMouseDown = (event) => {
      event.stopPropagation();
      prevDimensions.current.y = event.clientY;
      prevDimensions.current.height = textAreaElRef.current?.clientHeight ?? 0;
      const onWindowMouseMove = (event) => {
        const delta = event.clientY - prevDimensions.current.y;
        const height = prevDimensions.current.height + delta;
        prevDimensions.current.y = event.clientY;
        prevDimensions.current.height = height;
        setCustomHeight(Math.max(height, lineHeight * rows));
      };
      const onWindowMouseUp = (event) => {
        event.stopPropagation();
        window.removeEventListener('mouseup', onWindowMouseUp);
        window.removeEventListener('mousemove', onWindowMouseMove);
        setIsBeingDragged(false);
      };
      window.addEventListener('mouseup', onWindowMouseUp);
      window.addEventListener('mousemove', onWindowMouseMove);
      setIsBeingDragged(true);
    };
    const onTouchStart = (event) => {
      const { clientY } = event.targetTouches.item(
        event.targetTouches.length - 1,
      );
      prevDimensions.current.y = clientY;
      prevDimensions.current.height = textAreaElRef.current?.clientHeight ?? 0;
      const onWindowTouchMove = (event) => {
        const lastTouch = event.targetTouches.item(
          event.targetTouches.length - 1,
        );
        if (lastTouch !== null) {
          const delta = lastTouch.clientY - prevDimensions.current.y;
          const height = prevDimensions.current.height + delta;
          prevDimensions.current.y = lastTouch.clientY;
          prevDimensions.current.height = height;
          setCustomHeight(Math.max(height, lineHeight * rows));
        }
      };
      const onWindowTouchEnd = () => {
        window.removeEventListener('touchend', onWindowTouchEnd);
        window.removeEventListener('touchmove', onWindowTouchMove);
        setIsBeingDragged(false);
      };
      window.addEventListener('touchend', onWindowTouchEnd);
      window.addEventListener('touchmove', onWindowTouchMove);
      setIsBeingDragged(true);
    };
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
            height,
            font: 'inherit',
            overflow: 'hidden',
          }}
        >
          {startEnhancer}
          <div
            style={{
              flex: '1 1 auto',
              position: 'relative',
            }}
            ref={(el) => {
              const textAreaEl = el?.querySelector('textarea') ?? null;
              textAreaElRef.current = textAreaEl;
            }}
          >
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
                    zIndex: 1,
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
            <textarea
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
                paddingTop: inputIsClosed ? '1.2em' : '1.65em',
                paddingBottom: inputIsClosed ? '1.2em' : '0.75em',
                paddingLeft: isVisibleNode(startEnhancer) ? 0 : '1em',
                paddingRight: isVisibleNode(endEnhancer) ? 0 : '1em',
                font: 'inherit',
                outline: 0,
                border: 0,
                width: '100%',
                height: '100%',
                background: 'transparent',
                fontFamily: monospace ? monospaceFont : 'inherit',
                resize: 'none',
                touchAction: 'none',
                position: 'absolute',
                zIndex: 2,
                cursor: isBeingDragged ? resizeCursor : 'auto',
                overflow: 'hidden',
              }}
            />
            <div
              style={{
                position: 'absolute',
                visibility: 'hidden',
                zIndex: -100,
                font: 'inherit',
                display: 'inline-block',
                width: '1em',
                padding: 0,
                margin: 0,
                pointerEvents: 'none',
                userSelect: 'none',
              }}
              ref={measureRef}
            >
              &nbsp;
            </div>
          </div>
          {endEnhancer}
          {resize ? (
            <div
              onMouseDown={onMouseDown}
              onTouchStart={onTouchStart}
              style={{
                position: 'absolute',
                zIndex: 3,
                right: 0,
                bottom: 0,
                borderWidth: window.matchMedia('not (any-pointer: fine)')
                  .matches
                  ? '.7em'
                  : '.5em',
                borderStyle: 'solid',
                borderTopColor: 'transparent',
                borderLeftColor: 'transparent',
                borderRightColor: borderColor,
                borderBottomColor: borderColor,
                touchAction: 'none',
                cursor: height === contentHeight ? 's-resize' : 'ns-resize',
              }}
            />
          ) : null}
        </label>
        {hasBeenEdited && status ? (
          <div
            style={{
              fontSize: '75%',
              color: statusColor,
              padding: '.6em 1.4em 0',
              cursor: isBeingDragged ? resizeCursor : 'auto',
            }}
          >
            {status}
          </div>
        ) : null}
      </div>
    );
  },
);
