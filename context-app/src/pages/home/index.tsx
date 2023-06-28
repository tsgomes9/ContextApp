import { useContext } from "react";

import { Button, Container } from "./styles";
import { ThemeContext } from "../../context/ThemeProvider";

export default function Home() {
  
  const theme = useContext(ThemeContext);

  return (
    
      <Container theme={theme.theme}>
        <h2>Current Theme: {theme.theme}</h2>
        <Button
          onClick={() =>
            theme.setTheme(theme.theme === "light" ? "dark" : "light")
          }
          theme={theme.theme}
        >
          Change Theme
        </Button>
      </Container>
    
  );
}
