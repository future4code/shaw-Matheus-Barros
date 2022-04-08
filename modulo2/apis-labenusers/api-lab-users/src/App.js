import React from 'react';
import Register from './Components/Register'
import ListUsers from './Components/ListUsers'
// import styled from "styled-components";

class App extends React.Component {

  state = {
    screen: "Register",
  }

  //Função que por meio de props consegue fazer com que os outros componentes identificam qual página está, com isso, se houver interação do button do componente Register ele executará essa função, e com isso ele vai fazer com que o valor da prop screen de App mude para o valor do componente ListUsers.
  clickChangeScreen = () => {
    if (this.state.screen === "Register"){
      return(this.setState({ screen: "ListUsers" }))

    } else {
      return(this.setState({ screen: "Register" }))
    }
  }

  //Função que vai ser seguida após a ativação de clickChangeScreen. Esta função vai verificar o valor de screen, e em seguida, vai renderizar o componente correspondente.
  //Props foram passadas pois os componentes contém propriedade de App (que é a função clickChangeScreen).
  changeScreen = () => {
    switch (this.state.screen){
      case "Register":
        return <Register clickChangeScreen={this.clickChangeScreen}/>
      default: // case "ListUsers:"
        return <ListUsers clickChangeScreen={this.clickChangeScreen}/>
      // default:
      // return <p>Erro! Página não encontrada.</p>

      // Adicionar o default como terceiro caso em uma situação que existe apenas duas possibilidades seria apenas para termos uma resposta se algo estivesse errado no código.
    }
  }

  // confirmDelete = (id) => {
  //   if(window.confirm("Tem certeza de que deseja deletar?")) {
  //     this.deleteUser (id)
  //   }
  // }

  render(){

    return (
      <div>
        {this.changeScreen()}
      </div>
    )
  }
}

export default App;