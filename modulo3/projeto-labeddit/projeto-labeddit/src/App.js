import Router from './routes/Router';
import { ThemeProvider } from '@emotion/react';
import theme from "./constants/theme";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router />
    </ThemeProvider>
  );
}

export default App;