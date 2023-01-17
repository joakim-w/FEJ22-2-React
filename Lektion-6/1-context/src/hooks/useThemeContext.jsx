import { useContext } from "react"
import { ThemeContext } from "../contexts/ThemeContext"


export const useThemeContext = () => {
  const context = useContext(ThemeContext)
  if(!context) throw new Error('useThemeContext must be inside a ThemeContextProvder')

  return context
}