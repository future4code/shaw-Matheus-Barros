import React from 'react';
import axios from 'axios';
// import styled from "styled-components";

export default class ListUsers extends React.Component {

    state = {
        users: []
    }

    getUsersAPI = () => {
        const url = "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users";
        const headers = {
            headers: {
              Authorization: "Matheus-Martinelle-Barros-Shaw"
            }
        };

        axios.get(url, headers)
        .then( (res) => {
            this.setState({ users: res.data })
            //res.data é onde o array users está na API.
        })
        .catch( (err) => {
            alert(err.response.data)
        })
    }

    componentDidMount() { // ?
        this.getUsersAPI()
    }

    deleteUserAPI = (id) => {
        const url = `https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/${id}`
        const headers = {
            headers: {
              Authorization: "Matheus-Martinelle-Barros-Shaw"
            }
        };

        axios.delete(url, headers)
        .then( (res) => {
            this.getUsersAPI()
            // alert("Usuário deletado com sucesso!")
        })
        .catch( (err) => {
            console.log(err.response.data)
            alert("ERRO: não foi possível deletar o usuário, tente novamente.")
        })
    }

    render() {

        const listUsers = this.state.users.map((user) => {
            //Sempre que faz um map, colocar uma key para o react ser otimizado.
            //Sempre que um button recebe um onClick com parâmetro, precisamos botar o valor com uma arrow function.
            return ( 
            <div key={user.id}> 
                {user.name}
                <button onClick={() => this.deleteUserAPI(user.id)}> X </button> 
            </div>
            )
        })

        return(
            <div>
                <button onClick={this.props.clickChangeScreen}> Ir para Tela de Registro </button>

                <h1> Lista de Usuários </h1>

                {listUsers}
            </div>
        )
    }
}