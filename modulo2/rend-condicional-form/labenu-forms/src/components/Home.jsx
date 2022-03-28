import React from 'react';
import styled from 'styled-components';

const BoxHome = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 80vw;
    height: 80vh;
    margin: 10vh 10vw;
    border: 1px solid black;

    h1 {
        text-decoration: underline;
    }

    p {
        font-size: 1.2em;
    }
`

class Home extends React.Component {
  
  render(){

    return(
      <BoxHome>
        <h1> Formulário de Cadastro </h1>
        <p> *Inicie logo abaixo o preenchimento do formulário para concorrer uma vaga no nosso processo seletivo. </p>
        <button onClick={this.props.onClick}> PLAY </button>
      </BoxHome>
    )
  }
}

export default Home;