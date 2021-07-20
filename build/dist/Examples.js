import React, {useRef, useState} from "../_snowpack/pkg/react.js";
import {TextInput} from "./lib/components/TextInput.js";
export const Examples = () => {
  const [textInput1, setTextInput1] = useState("");
  const [textInput2, setTextInput2] = useState("");
  const [textInput3, setTextInput3] = useState("");
  const [textInput4, setTextInput4] = useState("");
  const textInput5Ref = useRef(null);
  const [textInput5, setTextInput5] = useState("");
  return /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement(Example, {
    name: "Normal text input"
  }, /* @__PURE__ */ React.createElement(TextInput, {
    label: "Fruit",
    value: textInput1,
    onChange: setTextInput1
  })), /* @__PURE__ */ React.createElement(Example, {
    name: "Text input with placeholder"
  }, /* @__PURE__ */ React.createElement(TextInput, {
    label: "Fruit",
    value: textInput2,
    onChange: setTextInput2,
    placeholder: "Orange"
  })), /* @__PURE__ */ React.createElement(Example, {
    name: "Monospace text input"
  }, /* @__PURE__ */ React.createElement(TextInput, {
    label: "Cyberfruit",
    value: textInput3,
    onChange: setTextInput3,
    monospace: true
  })), /* @__PURE__ */ React.createElement(Example, {
    name: "Text input with no validation"
  }, /* @__PURE__ */ React.createElement(TextInput, {
    label: "Cyberfruit",
    value: textInput4,
    onChange: setTextInput4,
    validator: null
  })), /* @__PURE__ */ React.createElement(Example, {
    name: "Text input with custom enhancers"
  }, /* @__PURE__ */ React.createElement(TextInput, {
    label: "Search",
    value: textInput5,
    onChange: setTextInput5,
    validator: null,
    ref: textInput5Ref,
    startEnhancer: /* @__PURE__ */ React.createElement("div", {
      style: {
        flex: "0 0 3em",
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
      }
    }, /* @__PURE__ */ React.createElement("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "1em",
      height: "1em",
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: 2,
      strokeLinecap: "round",
      strokeLinejoin: "round"
    }, /* @__PURE__ */ React.createElement("circle", {
      cx: 11,
      cy: 11,
      r: 8
    }), /* @__PURE__ */ React.createElement("path", {
      d: "M21 21l-4.35-4.35"
    }))),
    endEnhancer: textInput5 === "" ? null : /* @__PURE__ */ React.createElement("div", {
      style: {
        flex: "0 0 3em",
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
      }
    }, /* @__PURE__ */ React.createElement("button", {
      onClick: () => {
        setTextInput5("");
        const el = textInput5Ref.current;
        if (el !== null) {
          el.focus();
        }
      },
      style: {
        background: "none",
        border: "none",
        padding: "none",
        margin: "none",
        font: "inherit",
        color: "inherit",
        lineHeight: 1
      }
    }, /* @__PURE__ */ React.createElement("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "1em",
      height: "1em",
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: 2,
      strokeLinecap: "round",
      strokeLinejoin: "round"
    }, /* @__PURE__ */ React.createElement("circle", {
      cx: 12,
      cy: 12,
      r: 10
    }), /* @__PURE__ */ React.createElement("line", {
      x1: 15,
      y1: 9,
      x2: 9,
      y2: 15
    }), /* @__PURE__ */ React.createElement("line", {
      x1: 9,
      y1: 9,
      x2: 15,
      y2: 15
    }))))
  })));
};
const Example = ({name, children}) => {
  return /* @__PURE__ */ React.createElement("div", {
    style: {
      margin: "16px 0"
    }
  }, /* @__PURE__ */ React.createElement("div", {
    style: {
      marginBottom: 8
    }
  }, name), /* @__PURE__ */ React.createElement("div", null, children));
};
