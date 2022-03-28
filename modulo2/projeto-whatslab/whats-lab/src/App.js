import React from "react";
import styled, { createGlobalStyle } from "styled-components";
import Input from "./components/Input";

const GloboStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  } 

  body {
    background-color: black;
  }
`;

const Box = styled.div`
  display: flex;
  flex-direction: column;
  margin: 30px auto;
  height: 90vh;
  width: 35vw;
  border: 3px solid orange;
  border-radius: 5px;
  box-sizing: border-box;
  background-image: url(http://img.htmlsucai.com/forum/201708/04/161108ffr16g16w25mzmo1.jpg);
`;

const HeaderBox = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 10vh;
  width: 100%;
  background-color: orange;
  color: #161616;
  text-decoration-line: underline;
`;

class App extends React.Component {

  render() {

    return (
      <Box>
        <GloboStyle />
        <HeaderBox>
          <h1>WhatsLab</h1>
        </HeaderBox>
        <Input />
      </Box>
    );
  }
}

export default App;