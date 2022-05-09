import { GlobalStyle } from "./AppStyle"
import Router from './routes/Router';
import { ThemeProvider } from "@material-ui/core/styles"
import theme from "./constants/theme";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Router />
    </ThemeProvider>
  );
}

export default App;