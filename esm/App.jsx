import React, { useRef, useState } from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import { XTextArea } from './lib/examples/TextArea';
import { XTextInput } from './lib/examples/TextInput';
import { XTextMask } from './lib/examples/TextMask';
import { XCodeEditor } from './lib/examples/CodeEditor';
import { ThemeContext, DEFAULT_THEME } from './lib/theme';
const ELEMENTS = {
  XTextInput,
  XTextArea,
  XTextMask,
  XCodeEditor,
};
const ELEMENTS_LIST = Object.entries(ELEMENTS).map(([key, component]) => [
  key.slice(1),
  component,
]);
export const Home = () => {
  const sweetRavePartyFrameRef = useRef(-1);
  const sweetRavePartyTimeoutRef = useRef();
  const [enableSweetRaveParty, setEnableSweetRaveParty] = useState(false);
  const [fontSize, setFontSize] = useState(16);
  const [darkModeForce, setDarkModeForce] = useState(null);
  const [hueForce, setHueForce] = useState(null);
  const [saturationForce, setSaturationForce] = useState(null);
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
        <article>
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
                  marginRight: 16,
                  marginBottom: 12,
                }}
              >
                <button
                  onClick={() => setDarkModeForce(!isDarkMode)}
                  style={{ marginTop: 0, marginBottom: 4 }}
                >
                  Switch to {isDarkMode ? 'light' : 'dark'} mode
                </button>
                <br />
                <button
                  onClick={() => {
                    const partyOn = !enableSweetRaveParty;
                    if (partyOn) {
                      const startTime = Date.now();
                      sweetRavePartyFrameRef.current =
                        window.requestAnimationFrame(step);
                      function step() {
                        sweetRavePartyTimeoutRef.current = setTimeout(() => {
                          const elapsed = Date.now() - startTime;
                          setHueForce(Math.floor((elapsed % 3600) / 10));
                          setSaturationForce(Math.floor((elapsed % 600) / 6));
                          sweetRavePartyFrameRef.current =
                            window.requestAnimationFrame(step);
                        });
                      }
                    } else {
                      clearTimeout(sweetRavePartyTimeoutRef.current);
                      cancelAnimationFrame(sweetRavePartyFrameRef.current);
                    }
                    setEnableSweetRaveParty(partyOn);
                  }}
                  style={{ marginTop: 0, marginBottom: 0 }}
                >
                  Toggle sweet rave party
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
                <br />
                <label
                  style={{
                    display: 'flex',
                    flex: '1 1 0',
                  }}
                >
                  {`Font Size: `}
                  <input
                    type="range"
                    min="12"
                    max="24"
                    value={fontSize}
                    onChange={(event) => {
                      setFontSize(parseInt(event.target.value));
                    }}
                    style={{
                      flex: '1 0 auto',
                      verticalAlign: 'middle',
                      width: 100,
                    }}
                  />
                  {` ${fontSize}px`}
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
              <div style={{ fontSize }}>
                <XTextInput />
              </div>
            </Route>
            {ELEMENTS_LIST.map(([key, Element]) => (
              <Route path={`/${key}`} key={key}>
                <h2>{key}</h2>
                <div style={{ fontSize }}>
                  <Element />
                </div>
              </Route>
            ))}
          </Switch>
        </article>
      </main>
    </ThemeContext.Provider>
  );
};
export default Home;
