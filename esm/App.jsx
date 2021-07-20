import React, { useState } from 'react';
import { Examples } from './Examples';
import { ThemeContext, DEFAULT_THEME } from './lib/theme';
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
    saturation,
  };
  return (
    <ThemeContext.Provider
      value={{
        ...DEFAULT_THEME,
        isDarkMode,
        hue,
        saturation,
      }}
    >
      <main className={isDarkMode ? 'dark' : ''}>
        <header>
          <button onClick={() => setDarkModeForce(!isDarkMode)}>
            {isDarkMode ? 'Light' : 'Dark'} mode
          </button>
          <br />
          <br />
          <label>
            {`Hue: `}
            <input
              type="range"
              min="0"
              max="360"
              value={hue}
              onChange={(event) => {
                setHueForce(parseInt(event.target.value));
              }}
              style={{ verticalAlign: 'middle' }}
            />
            {` ${hue}deg`}
          </label>
          <br />
          <label>
            {`Saturation: `}
            <input
              type="range"
              min="0"
              max="100"
              value={saturation}
              onChange={(event) => {
                setSaturationForce(parseInt(event.target.value));
              }}
              style={{ verticalAlign: 'middle' }}
            />
            {` ${saturation}%`}
          </label>
        </header>

        <Examples />

        <footer></footer>

        <pre style={{ whiteSpace: 'pre-wrap' }}>
          <code>THEME: {JSON.stringify(theme, null, 2)}</code>
        </pre>
      </main>
    </ThemeContext.Provider>
  );
};
export default Home;
