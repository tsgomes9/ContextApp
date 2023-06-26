import { ReactNode, useContext } from "react";
import { ThemeContext } from "../../App";


interface ILogin {
    setTheme: React.Dispatch<React.SetStateAction<string>>;
  }
  
export default function Login({ setTheme }: ILogin) {
  const theme = useContext(ThemeContext);

  return (
    <div>
      <h1>Login</h1>
      <h2>{theme}</h2>
      <label>
        <input
          type="checkbox"
          checked={theme === 'dark'}
          onChange={(e) => {
            setTheme(e.target.checked ? 'dark' : 'light')
          }}
        />
        Use dark mode
      </label>
    </div>
  );
}
