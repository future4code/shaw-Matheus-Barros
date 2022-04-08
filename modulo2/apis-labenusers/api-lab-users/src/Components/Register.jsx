import React from 'react';
import axios from 'axios';
// import styled from "styled-components";

export default class Register extends React.Component {

    state = {
        inputName: "",
        inputEmail: ""
    }

    onChangeInputName = (e) => {
        this.setState({ inputName: e.target.value })
    }

    onChangeInputEmail = (e) => {
        this.setState({ inputEmail: e.target.value })
    }

    registerButtonAPI = () => {
        const url = "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users";
        const body = {
            name: this.state.inputName, 
            email: this.state.inputEmail
        };
        const headers = {
            headers: {
              Authorization: "Matheus-Martinelle-Barros-Shaw"
            }
        };

        axios.post(url, body, headers)
        .then((response) => {
            alert("Usuário registrado com sucesso!")
            this.setState({ 
                inputName: "", 
                inputEmail: "" 
            })
        })
        .catch((error) => {
            console.log(error.response.data)
            alert("Usuário não registrado!")
        })
    }   

    render() {

        return(
            <div>
                <button onClick={this.props.clickChangeScreen}> Ir para Tela de Usuários </button>

                <h1> Registro </h1>

                <input 
                placeholder={"Nome..."} 
                value={this.state.inputName} 
                onChange={this.onChangeInputName} 
                />
                <input 
                placeholder={"Email..."} 
                value={this.state.inputEmail} 
                onChange={this.onChangeInputEmail}
                />

                <button onClick={this.registerButtonAPI}> Registrar </button>
            </div>
        )
    }
}