import React, {useState} from "../_snowpack/pkg/react.js";
import {Examples} from "./Examples.js";
import {ThemeContext, DEFAULT_THEME} from "./lib/theme.js";
export const Home = () => {
  const [darkModeForce, setDarkModeForce] = useState(null);
  const [hueForce, setHueForce] = useState(null);
  const [saturationForce, setSaturationForce] = useState(null);
  const isDarkMode = darkModeForce ?? DEFAULT_THEME.isDarkMode;
  const hue = hueForce ?? DEFAULT_THEME.hue;
  const saturation = saturationForce ?? DEFAULT_THEME.saturation;
  const theme = {
    ...DEFAULT_THEME,
    isDarkMode,
    hue,
    saturation
  };
  return /* @__PURE__ */ React.createElement(ThemeContext.Provider, {
    value: {
      ...DEFAULT_THEME,
      isDarkMode,
      hue,
      saturation
    }
  }, /* @__PURE__ */ React.createElement("main", {
    className: isDarkMode ? "dark" : ""
  }, /* @__PURE__ */ React.createElement("header", null, /* @__PURE__ */ React.createElement("button", {
    onClick: () => setDarkModeForce(!isDarkMode)
  }, isDarkMode ? "Light" : "Dark", " mode"), /* @__PURE__ */ React.createElement("br", null), /* @__PURE__ */ React.createElement("br", null), /* @__PURE__ */ React.createElement("label", null, `Hue: `, /* @__PURE__ */ React.createElement("input", {
    type: "range",
    min: "0",
    max: "360",
    value: hue,
    onChange: (event) => {
      setHueForce(parseInt(event.target.value));
    },
    style: {verticalAlign: "middle"}
  }), ` ${hue}deg`), /* @__PURE__ */ React.createElement("br", null), /* @__PURE__ */ React.createElement("label", null, `Saturation: `, /* @__PURE__ */ React.createElement("input", {
    type: "range",
    min: "0",
    max: "100",
    value: saturation,
    onChange: (event) => {
      setSaturationForce(parseInt(event.target.value));
    },
    style: {verticalAlign: "middle"}
  }), ` ${saturation}%`)), /* @__PURE__ */ React.createElement(Examples, null), /* @__PURE__ */ React.createElement("footer", null), /* @__PURE__ */ React.createElement("pre", {
    style: {whiteSpace: "pre-wrap"}
  }, /* @__PURE__ */ React.createElement("code", null, "THEME: ", JSON.stringify(theme, null, 2)))));
};
export default Home;
