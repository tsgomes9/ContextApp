import { useContext } from "react";
import { ThemeContext } from "../../App";
import { Container } from "./styles";



export default function Login() {
  const theme = useContext(ThemeContext);

  return (
    <Container theme={theme?.theme ? theme.theme : ''}>
      <h1>Tela principal</h1>
      <h2>Tema atual: {theme?.theme}</h2>
      <button onClick={() => theme?.setTheme(
        theme?.theme === 'dark' ? 'light' : 'dark'
      )}>
        Mudar tema
    </button>
    </Container>
  );
}
