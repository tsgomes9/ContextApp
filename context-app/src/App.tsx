import { createContext, useState } from 'react';
import Login from './pages/login';

export const ThemeContext = createContext<string | null>(null);

export default function MyApp() {
  
  const [theme, setTheme] = useState('light');

  return (

    <ThemeContext.Provider value={theme}>     
      <Login setTheme={setTheme}/>
    </ThemeContext.Provider>
  )
}
