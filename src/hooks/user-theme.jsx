import { useContext } from "react"
import { ThemeProviderContext } from "../contexts/theme-context"

// Custom hook to use the theme context

export const useTheme = () => {

  // Get the context value from ThemeProviderContext

  const context = useContext(ThemeProviderContext)

  // If the context is undefined, it means the hook is used outside of a ThemeProvider
 
  if (context === undefined)
    throw new Error("useTheme must be used within a ThemeProvider")
 
  return context
}