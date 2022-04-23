import React, {useState} from 'react'
import styled, {createGlobalStyle} from "styled-components"
import Home from './pages/HomeScreen/Home'
import Match from './pages/MatchScreen/Match'

const GlobalDiv = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: #44535c;
`

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0px;
    padding: 0px;
    box-sizing: border-box;
  }

  body {
    font-family: Roboto, sans-serif;
  }
`

function App() {

  const [page, setPage] = useState("Home")

  const changePage = () => {
    if(page === "Home"){
      setPage("Match")
    } else {
      setPage("Home")
    }
  }

  const selectPage = () => {
    switch(page){
      case "Home":
        return <Home changePage={changePage} page={page} />
      case "Match":
        return <Match changePage={changePage} page={page} />
      default:
        return <Home changePage={changePage} page={page} />
    }
  }
  
  return(
    <GlobalDiv>
      <GlobalStyle />
      {selectPage()}
    </GlobalDiv>
  )
}

export default App;