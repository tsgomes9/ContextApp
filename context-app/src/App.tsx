import { createContext, useState } from "react"
import Login from "./pages/login"

interface IThemeContext {
  theme: string,
  setTheme: React.Dispatch<React.SetStateAction<string>>
}

export const ThemeContext = createContext<IThemeContext | null>(null)

export default function App() {
  
  const [theme, setTheme] = useState<string>('light')

  return (

    <>
      <ThemeContext.Provider value={{theme, setTheme}}>
        <Login/>
      </ThemeContext.Provider>
    </>
  )
}
