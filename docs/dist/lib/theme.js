import React, { useContext, useMemo } from '../../_snowpack/pkg/react.js';
export const DEFAULT_THEME = {
  isDarkMode: true,
  monospaceFont:
    "source-code-pro,Menlo,Monaco,Consolas,'Courier New',monospace",
  hue: 0,
  saturation: 0,
};
export const ThemeContext = React.createContext(DEFAULT_THEME);
const LIGHT_SEMANTIC = {
  success: 'hsl(152deg,100%,25%)',
  danger: 'hsl(354deg,100%,39%)',
  warning: 'hsl(45deg,100%,21%)',
  info: 'hsl(190deg,100%,25%)',
};
const DARK_SEMANTIC = {
  success: 'hsl(152deg,79%,36%)',
  danger: 'hsl(354deg,81%,59%)',
  warning: 'hsl(45deg,100%,51%)',
  info: 'hsl(190deg,90%,50%)',
};
const O_TO_100 = new Array(101).fill(0).map((_, i) => i);
export const useTheme = () => {
  const { isDarkMode, monospaceFont, hue, saturation } =
    useContext(ThemeContext);
  const getLightness = (delta) => (isDarkMode ? 0 + delta : 100 - delta);
  const shades = useMemo(
    () =>
      O_TO_100.map(
        (lightness) =>
          `hsl(${hue}deg,${saturation}%,${getLightness(lightness)}%)`,
      ),
    [hue, saturation, isDarkMode],
  );
  return {
    isDarkMode,
    monospaceFont,
    shades,
    semantic: isDarkMode ? DARK_SEMANTIC : LIGHT_SEMANTIC,
  };
};
