import React from "react";
import styled from "styled-components";
import buttonEnviar from "../buttonEnviar.png";
import imgButton from "../imgButton.png";
import Mensagem from "./Mensagem";

const MainBox = styled.div`
  display: flex;
  flex-direction: column-reverse; //para fazer as mensagens ser enviadas abaixo da última.
  height: 72vh;
  width: 100%;
`;

const FooterBox = styled.footer`
  display: flex;
  align-items: center;
  height: 7vh;
  width: 100%;
  padding: 0 5px;
  background-color: #161616;
`;

const InputUser = styled.input`
  width: 20%;
  padding: 3px;
  margin: 0 3px;
`

const InputMensagem = styled.input`
  width: 70%;
  padding: 3px;
  margin: 0 3px;
`

const ButtonEnviar = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 3px;

  img {
    height: 30px;
    padding: 3px;
  }
`

class Input extends React.Component {
  state = {
    mensagens: [
      // {
      //   user: "Matheus",
      //   mensagem: "Que bom ver você por aqui!",
      // },
    ],

    valueInputUser: "",
    valueInputMensagem: "",
  };

  onChangeUser = (event) => {
    this.setState({ valueInputUser: event.target.value });
  };

  onChangeMensagem = (event) => {
    this.setState({ valueInputMensagem: event.target.value });
  };

  adicionaMensagem = () => {
    if ((this.state.valueInputUser !== "") & (this.state.valueInputMensagem !== "")){
      const novaMesagem = {
        user: this.state.valueInputUser,
        mensagem: this.state.valueInputMensagem,
      };
      const novoMensagens = [...this.state.mensagens, novaMesagem];
      this.setState({ mensagens: novoMensagens });
  
      this.setState({ valueInputUser: "" });
      this.setState({ valueInputMensagem: "" });

    }else{
      alert("Você precisa preencher os campos!")
    }
  };

  render() {
    return (
      <>
        <MainBox>
          <Mensagem mensagens={this.state.mensagens} />
        </MainBox>

        <FooterBox>
          <InputUser
            placeholder={"User..."}
            value={this.state.valueInputUser}
            onChange={this.onChangeUser}
          />
          <InputMensagem
            placeholder={"Mensagem..."}
            value={this.state.valueInputMensagem}
            onChange={this.onChangeMensagem}
          />
          <ButtonEnviar onClick={this.adicionaMensagem}>
            <img src={imgButton} />
          </ButtonEnviar>
        </FooterBox>
      </>
    );
  }
}

export default Input;