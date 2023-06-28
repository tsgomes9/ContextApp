import { createContext, useState } from "react"

interface IThemeProvider {
    children: JSX.Element;
  }

interface IThemeProps { 
  theme: string,
  setTheme: React.Dispatch<React.SetStateAction<string>>
}

export const ThemeContext = createContext<IThemeProps>({} as IThemeProps)

export default function ThemeProvider ({children}: IThemeProvider) {
    
    const [theme, setTheme] = useState('light')

    return <ThemeContext.Provider value={{theme, setTheme}}>{children}</ThemeContext.Provider> // retorna o contexto criado sendo passado para children (elemento(s) filho(s))
    
}