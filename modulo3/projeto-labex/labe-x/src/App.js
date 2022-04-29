import { Rounter } from "./routes/Routes";
import { createGlobalStyle } from "styled-components"

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0px;
    padding: 0px;
    box-sizing: border-box;
  }
`

function App() {
  return (
    <div>
      <GlobalStyle />
      <Rounter />
    </div>
  );
}

export default App;