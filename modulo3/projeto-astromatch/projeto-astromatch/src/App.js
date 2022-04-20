import React, {useState} from 'react'
import {createGlobalStyle} from "styled-components"
import Home from './pages/HomeScreen/Home'
import Match from './pages/MatchScreen/Match'

const GlobalStyle = createGlobalStyle`
  *{
      margin:0px;
      padding:0px;
      box-sizing: border-box;
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
        return <Home changePage={changePage} />
      case "Match":
        return <Match changePage={changePage} />
      default:
        return <Home changePage={changePage} />
    }
  }
  
  return(
    <div>
      <GlobalStyle />
      {selectPage()}
    </div>
  )
}

export default App;