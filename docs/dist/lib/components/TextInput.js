import React, {useRef, useState} from "../../../_snowpack/pkg/react.js";
import {useFocus} from "../../../_snowpack/pkg/@react-aria/interactions.js";
import {useTheme} from "../theme.js";
import {validate} from "../validation.js";
const isVisibleNode = (node) => {
  return node !== void 0 && node !== null && node !== true && node !== false;
};
const defaultValidator = (value) => value.trim().length > 0;
export const TextInput = React.forwardRef(({
  label,
  value,
  onChange,
  validator = defaultValidator,
  status,
  startEnhancer,
  endEnhancer,
  monospace = false,
  name = label,
  disabled = false,
  autoComplete = "on",
  placeholder
}, ref) => {
  const {isDarkMode, shades, semantic, monospaceFont} = useTheme();
  const debounceRef = useRef();
  const [hasBeenEdited, setHasBeenEdited] = useState(false);
  const [isFocused, setIsFocused] = useState(false);
  const {focusProps} = useFocus({
    onFocusChange: (isFocused2) => {
      setIsFocused(isFocused2);
      if (!isFocused2 && !hasBeenEdited) {
        setHasBeenEdited(true);
      }
    }
  });
  const isValid = validate(value, validator);
  const inputIsClosed = value === "" && placeholder === void 0;
  const textColor = shades[isFocused ? 100 : isDarkMode ? 80 : 70];
  const backgroundColor = shades[isFocused ? isDarkMode ? 15 : 12 : isDarkMode ? 10 : 8];
  let labelColor = shades[70];
  let borderColor = shades[isFocused ? 70 : 50];
  let statusColor = shades[70];
  if (hasBeenEdited && validator !== null) {
    labelColor = `${(isValid ? semantic.success : semantic.danger).slice(0, -1)},${isFocused && inputIsClosed ? 0.6 : 1})`;
    borderColor = isValid ? semantic.success : semantic.danger;
    statusColor = isValid ? semantic.success : semantic.danger;
    if (!isValid && status === void 0) {
      status = validator === defaultValidator ? `${label} is required` : `${label} is invalid`;
    }
  }
  return /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("label", {
    style: {
      display: "flex",
      position: "relative",
      borderBottom: `2px solid ${borderColor}`,
      backgroundColor,
      color: textColor,
      paddingLeft: isVisibleNode(startEnhancer) ? 0 : "1em",
      paddingRight: isVisibleNode(endEnhancer) ? 0 : "1em"
    }
  }, startEnhancer, /* @__PURE__ */ React.createElement("div", {
    style: {
      flex: "1 1 auto",
      position: "relative"
    }
  }, /* @__PURE__ */ React.createElement("div", {
    style: {
      fontSize: inputIsClosed ? "inherit" : "75%",
      color: labelColor,
      padding: inputIsClosed ? "1.2em 0" : ".8em 0 0",
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      pointerEvents: "none"
    }
  }, label), /* @__PURE__ */ React.createElement("input", {
    ...focusProps,
    ref,
    name,
    disabled,
    autoComplete,
    value,
    onChange: (event) => {
      onChange(event.target.value, validate(event.target.value, validator));
      clearTimeout(debounceRef.current);
      if (!hasBeenEdited) {
        debounceRef.current = setTimeout(() => {
          if (!hasBeenEdited) {
            setHasBeenEdited(true);
          }
        }, 300);
      }
    },
    style: {
      color: textColor,
      padding: inputIsClosed ? `1.2em 0` : `1.7em 0 .7em`,
      fontSize: "inherit",
      outline: 0,
      border: 0,
      width: "100%",
      background: "transparent",
      fontFamily: monospace ? monospaceFont : "inherit"
    }
  }), value === "" && placeholder !== void 0 ? /* @__PURE__ */ React.createElement("div", {
    style: {
      position: "absolute",
      top: inputIsClosed ? "1.2em" : "1.7em",
      left: 0,
      userSelect: "none",
      pointerEvents: "none",
      color: shades[40],
      padding: 0,
      fontSize: "inherit",
      outline: 0,
      border: 0,
      background: "transparent",
      whiteSpace: "pre",
      overflow: "hidden"
    }
  }, placeholder) : null), endEnhancer), hasBeenEdited && status ? /* @__PURE__ */ React.createElement("div", {
    style: {
      fontSize: "75%",
      color: statusColor,
      padding: ".6em 1.4em 0"
    }
  }, status) : null);
});
