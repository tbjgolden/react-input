import React, { useState } from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import { XTextArea } from './lib/examples/TextArea';
import { XTextInput } from './lib/examples/TextInput';
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
            {['TextInput', 'TextArea'].map((element) => (
              <Link
                to={`/${element}`}
                style={{
                  display: 'inline-block',
                  color: 'inherit',
                  marginTop: 8,
                  marginRight: 8,
                  fontWeight: 'bold',
                }}
                key={element}
              >
                {element}
              </Link>
            ))}
          </div>
        </header>

        <Switch>
          <Route exact path={['/', '/TextInput']}>
            <XTextInput />
          </Route>
          <Route path="/TextArea">
            <XTextArea />
          </Route>
        </Switch>

        <footer></footer>

        <pre style={{ whiteSpace: 'pre-wrap' }}>
          <code>THEME: {JSON.stringify(theme, null, 2)}</code>
        </pre>
      </main>
    </ThemeContext.Provider>
  );
};
export default Home;
