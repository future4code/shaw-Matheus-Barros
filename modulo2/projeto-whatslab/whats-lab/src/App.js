import React from 'react';
import styled from 'styled-components';
import Chat from './Components/chat'

const MainContainer = styled.div`
  background-color: #282c34;
`
const BoxChat = styled.div`
  margin-left: auto;
  margin-right: auto;
  min-height: 100vh;
  width: 50vw;
  border: 1px solid orange;
`
const HeaderBox = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 10vh;
  width: 100%;
  background-color: orange;
  color: black;
  text-decoration-line: underline;
`

const FooterBox = styled.footer`
  min-height: 10vh;
  width: 100%;
  background-color: orange;
`

class App extends React.Component {

  render() {

    return (
      <MainContainer>
        <BoxChat>
          <HeaderBox>
            <h1>WhatsLab</h1>
          </HeaderBox>
          <Chat />
        </BoxChat>
      </MainContainer>
    );

  }
}

export default App;