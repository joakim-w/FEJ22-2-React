import { createContext, useState } from 'react'

export const ThemeContext = createContext()

const ThemeContextProvider = ({children}) => {

  const [isDarkTheme, setIsDarkTheme] = useState(false)

  const dark = {
    text: '#fff',
    bg: '#888',
    ui: '#333'
  }
  const light = {
    text: '#333',
    bg: '#f2f2f2',
    ui: '#fff'
  }

  const themeUI = isDarkTheme ? dark : light

  const toggleTheme = () => {
    setIsDarkTheme(theme => !theme)
  }

  const value = {
    isDarkTheme,
    themeUI,
    toggleTheme
  }

  return (
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  )
}

export default ThemeContextProvider