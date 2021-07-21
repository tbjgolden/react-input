import React, {
  ForwardedRef,
  useEffect,
  useLayoutEffect,
  useMemo,
  useRef,
  useState,
} from 'react';
import { useFocus } from '@react-aria/interactions';
import { useTheme } from '../theme';
import { validate } from '../validation';

const isVisibleNode = (node?: React.ReactNode): boolean => {
  return node !== undefined && node !== null && node !== true && node !== false;
};
const defaultValidator = (value: string): boolean => value.trim().length > 0;

type x = HTMLTextAreaElement;

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
      rows = 4,
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
      resize?: boolean;
      // input props
      name?: HTMLTextAreaElement['name'];
      disabled?: HTMLTextAreaElement['disabled'];
      autoComplete?: HTMLTextAreaElement['autocomplete'];
      placeholder?: HTMLTextAreaElement['placeholder'];
      rows?: HTMLTextAreaElement['rows'];
    },
    ref: ForwardedRef<HTMLTextAreaElement>,
  ) => {
    const { isDarkMode, shades, semantic, monospaceFont } = useTheme();
    const textAreaElRef = useRef<HTMLTextAreaElement | null>(null);
    const debounceRef = useRef<ReturnType<typeof setTimeout>>();
    const prevDimensions = useRef<{ y: number; height: number }>({
      y: 0,
      height: 0,
    });
    const [height, setHeight] = useState<number | null>(null);
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

    const computedRows = useMemo(() => {
      let newLineCount = 0;
      for (let i = value.length; i >= 0; i--) {
        if (value.charCodeAt(i) === 10) newLineCount += 1;
      }
      return Math.max(rows, newLineCount + 1);
    }, [value, rows]);

    const onMouseDown = (event: React.MouseEvent) => {
      event.stopPropagation();
      prevDimensions.current.y = event.clientY;
      prevDimensions.current.height = textAreaElRef.current?.clientHeight ?? 0;

      const onWindowMouseMove = (event: MouseEvent) => {
        const delta = event.clientY - prevDimensions.current.y;
        const height = prevDimensions.current.height + delta;

        prevDimensions.current.y = event.clientY;
        prevDimensions.current.height = height;

        setHeight(height);
      };

      const onWindowMouseUp = (event: MouseEvent) => {
        event.stopPropagation();
        window.removeEventListener('mouseup', onWindowMouseUp);
        window.removeEventListener('mousemove', onWindowMouseMove);
      };

      window.addEventListener('mouseup', onWindowMouseUp);
      window.addEventListener('mousemove', onWindowMouseMove);
    };

    const onTouchStart = (event: React.TouchEvent) => {
      const { clientY } = event.targetTouches.item(
        event.targetTouches.length - 1,
      );
      prevDimensions.current.y = clientY;
      prevDimensions.current.height = textAreaElRef.current?.clientHeight ?? 0;

      const onWindowTouchMove: (this: Window, ev: TouchEvent) => void = (
        event,
      ) => {
        const lastTouch = event.targetTouches.item(
          event.targetTouches.length - 1,
        );
        if (lastTouch !== null) {
          const delta = lastTouch.clientY - prevDimensions.current.y;
          const height = prevDimensions.current.height + delta;

          prevDimensions.current.y = lastTouch.clientY;
          prevDimensions.current.height = height;

          setHeight(height);
        }
      };

      const onWindowTouchEnd = () => {
        window.removeEventListener('touchend', onWindowTouchEnd);
        window.removeEventListener('touchmove', onWindowTouchMove);
      };

      window.addEventListener('touchend', onWindowTouchEnd);
      window.addEventListener('touchmove', onWindowTouchMove);
    };

    const isValid = validate(value, validator);

    const inputIsClosed = value === '' && placeholder === undefined;

    const textColor = shades[isFocused ? 100 : isDarkMode ? 80 : 70];
    const backgroundColor =
      shades[isFocused ? (isDarkMode ? 15 : 12) : isDarkMode ? 10 : 8];
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
              rows={computedRows}
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
                marginTop: inputIsClosed ? '1.2em' : '1.7em',
                marginBottom: inputIsClosed ? '1.5em' : '1em',
                paddingTop: 0,
                paddingBottom: 0,
                paddingLeft: isVisibleNode(startEnhancer) ? 0 : '1em',
                paddingRight: isVisibleNode(endEnhancer) ? 0 : '1em',
                font: 'inherit',
                outline: 0,
                border: 0,
                width: '100%',
                height: height ?? 'auto',
                minHeight: '1.2em',
                background: 'transparent',
                fontFamily: monospace ? monospaceFont : 'inherit',
                resize: 'none',
                touchAction: 'none',
                position: 'relative',
                zIndex: 2,
              }}
            />
          </div>
          {endEnhancer}
          {resize ? (
            <div
              onMouseDown={onMouseDown}
              onTouchStart={onTouchStart}
              style={{
                position: 'absolute',
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
                cursor: 'ns-resize',
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
            }}
          >
            {status}
          </div>
        ) : null}
      </div>
    );
  },
);
