import React, { useState } from 'react'
import { Examples } from './lib/Examples'
import { ThemeContext, DEFAULT_THEME } from './lib/theme'

export const Home = (): JSX.Element => {
  const [darkModeForce, setDarkModeForce] = useState<boolean | null>(null)

  return (
    <ThemeContext.Provider
      value={{
        ...DEFAULT_THEME,
        isDarkMode: darkModeForce ?? DEFAULT_THEME.isDarkMode,
      }}
    >
      <ThemeContext.Consumer>
        {(theme) => {
          const {
            isDarkMode
          } = theme
          return (
            <main className={isDarkMode ? 'dark' : ''}>
              <header>
                <button onClick={() => setDarkModeForce(!isDarkMode)}>
                  {isDarkMode ? 'Light' : 'Dark'} mode
                </button>
              </header>

              <Examples />

              <footer></footer>

              <pre>
                <code>THEME: {JSON.stringify(theme, null, 2)}</code>
              </pre>
            </main>
          )
        }}
      </ThemeContext.Consumer>
    </ThemeContext.Provider>
  )
}

export default Home
