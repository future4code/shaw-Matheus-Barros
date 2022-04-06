import React from 'react';
import axios from 'axios';
import styled from "styled-components";

const headers = {
  headers: {
    Authorization: "Matheus-Martinelle-Barros-Shaw"
  }
};

class App extends React.Component {

  state = {
    inputName: "",
    inputEmail: "",
    users: [],
    screen: false
  }

  onChangeName = (event) => {
    this.setState({ inputName: event.target.value })
  }

  onChangeEmail = (event) => {
    this.setState({ inputEmail: event.target.value })
  }
  
  onClickScreen = () => {
    this.setState({ screen: !this.state.screen })
  }

  getAllUsers() {
    //Aqui é onde a função de get é chamada
    //No get passamos a url, e o headers
    axios.get("https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users", headers)
      .then((response) => {
      //Caso de tudo certo guarde os users no estado:
        this.setState({ users: response.data });
      })
      .catch((error) => {
      //Caso de erro exiba-o no console:
        console.log(error.response.data);
      });
  }

  createUser = () => {
    //body é criado com o valor que tem no inputName e inputEmail
    const body = {
      name: this.state.inputName,
      email: this.state.inputEmail
    };
    //Aqui é onde a função de post é chamada
    //No post passamos a url, body, e o headers
    axios.post("https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users", body, headers)
      .then(() => {
        //Pegartodas as playlists
        this.getAllUsers();
        //Deixar o texto do input com um valor vazio
        this.setState({
          inputName: "",
          inputEmail: ""
        });
      })
      .catch((error) => {
        //Alertar caso um erro aconteça
        alert(error.response.data.message);
      });
  }

  deleteUser = (id) => {
    axios.delete(`https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/${id}`, headers)    
      .then((res) => {
        this.getAllUsers() 
      })
      .catch((err) => {
        alert("Não foi possível deletar o usuário por causa do seguinte erro: ", err.response.data.message)
      })
  }

  confirmDelete = (id) => {
    if(window.confirm("Tem certeza de que deseja deletar?")) {
      this.deleteUser (id)
    }
  }

  componentDidMount() {
    //Pegar todas as playlists
    this.getAllUsers();
  }

  render() {

    const componentsUsers = this.state.users.map((user) => {
      return(
        <li> 
          {user.name}  
          <button onClick = {() => this.confirmDelete(user.id)} > X </button>
        </li>
      )  
    });

    return(
      <div>
        <button onClick={this.onClickScreen}> Trocar Tela </button> 

        <label>
          Novo usuário:
          <input placeholder="Nome..." value={this.state.inputName} onChange={this.onChangeName} />
          <input placeholder="Email..." value={this.state.inputEmail} onChange={this.onChangeEmail} />
        </label>

        <button onClick={this.createUser}> Registrar </button>

        <ul>{componentsUsers}</ul>
      </div>
    )
  }
}

export default App;