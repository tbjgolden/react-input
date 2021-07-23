import React, { useState } from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import { XTextArea } from './lib/examples/TextArea';
import { XTextInput } from './lib/examples/TextInput';
import { XTextMask } from './lib/examples/TextMask';
import { ThemeContext, DEFAULT_THEME } from './lib/theme';

const ELEMENTS = {
  XTextInput,
  XTextArea,
  XTextMask,
};

const ELEMENTS_LIST = Object.entries(ELEMENTS).map(
  ([key, component]) => [key.slice(1), component] as const,
);

export const Home = (): JSX.Element => {
  const [darkModeForce, setDarkModeForce] = useState<boolean | null>(null);
  const [hueForce, setHueForce] = useState<number | null>(null);
  const [saturationForce, setSaturationForce] = useState<number | null>(null);

  const isDarkMode = darkModeForce ?? DEFAULT_THEME.isDarkMode;
  const hue = hueForce ?? DEFAULT_THEME.hue;
  const saturation = saturationForce ?? DEFAULT_THEME.saturation;

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
          <h1 style={{ marginTop: 0 }}>
            <code>react-input</code>
          </h1>
          <h2>Global Options</h2>
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
            }}
          >
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                marginRight: 16,
              }}
            >
              <button
                onClick={() => setDarkModeForce(!isDarkMode)}
                style={{ marginTop: 8, marginBottom: 8 }}
              >
                {isDarkMode ? 'Light' : 'Dark'} mode
              </button>
            </div>
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                flex: '1 0 auto',
              }}
            >
              <label
                style={{
                  display: 'flex',
                  flex: '1 1 0',
                }}
              >
                {`Saturation: `}
                <input
                  type="range"
                  min="0"
                  max="100"
                  value={saturation}
                  onChange={(event) => {
                    setSaturationForce(parseInt(event.target.value));
                  }}
                  style={{
                    flex: '1 0 auto',
                    verticalAlign: 'middle',
                    width: 100,
                  }}
                />
                {` ${saturation}%`}
              </label>
              <br />
              <label
                style={{
                  display: 'flex',
                  flex: '1 1 0',
                }}
              >
                {`Hue: `}
                <input
                  type="range"
                  min="0"
                  max="360"
                  value={hue}
                  onChange={(event) => {
                    setHueForce(parseInt(event.target.value));
                  }}
                  style={{
                    flex: '1 0 auto',
                    verticalAlign: 'middle',
                    width: 100,
                  }}
                />
                {` ${hue}deg`}
              </label>
            </div>
          </div>
          <hr />
          <div>
            {ELEMENTS_LIST.map(([key]) => (
              <Link
                to={`/${key}`}
                style={{
                  display: 'inline-block',
                  color: 'inherit',
                  marginTop: 8,
                  marginRight: 8,
                  fontWeight: 'bold',
                }}
                key={key}
              >
                {key}
              </Link>
            ))}
          </div>
        </header>

        <Switch>
          <Route exact path="/">
            <h2>TextInput</h2>
            <XTextInput />
          </Route>
          {ELEMENTS_LIST.map(([key, Element]) => (
            <Route path={`/${key}`} key={key}>
              <h2>{key}</h2>
              <Element />
            </Route>
          ))}
        </Switch>
      </main>
    </ThemeContext.Provider>
  );
};

export default Home;
