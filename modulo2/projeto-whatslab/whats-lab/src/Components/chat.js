import React from 'react';
import styled from 'styled-components';

const FooterBox = styled.div`
    display: flex;
    min-height: 10vh;
    width: 100%;
    background-color: #ffbc40;
    position: relative;
    bottom: -461px;

    img {
        width: 10%;
    }

    
`

class Chat extends React.Component {

    state = {
        mensagens: [
            {
                user: "",
                mensagem: "",
            }
        ],
        valueInputUser: "",
        valueInputMensagem: "",
    }

    onChangeInputUser = (event) => {
        this.setState({ valueInputUser: event.target.value });
    };
    
    onChangeInputMensagem = (event) => {
        this.setState({ valueInputMensagem: event.target.value });
    }

    adicionaMensagem = () => { 
        const novaMensagem = {
          user: this.state.valueInputUser,
          mensagem: this.state.valueInputMensagem,
        };

        const novoMensagens = [...this.state.mensagens, novaMensagem];

        this.setState({ mensagens: novoMensagens });
        this.setState({ valueInputUser: "", valueInputMensagem: ""})
    };

    render() {
        
        const listComponents = this.state.mensagens.map((texto) => {
            return (
                <div>
                    <p> {texto.user} </p>
                    <p> {texto.mensagem} </p>
                </div>                
            )
        })

        return (

            <div>
                {listComponents}
                <FooterBox>
                    <input
                        placeholder={"Nome"}
                        value={this.state.valueInputUser}
                        onChange={this.onChangeInputUser}
                    />
                    <input 
                        placeholder={"Mensagem..."}
                        value={this.state.valueInputMensagem}
                        onChange={this.onChangeInputMensagem}
                    />
                    <button onClick={this.adicionaPessoa}><img src="https://w7.pngwing.com/pngs/993/404/png-transparent-computer-icons-email-send-email-button-miscellaneous-angle-rectangle.png"/></button>    
                </FooterBox>
            </div>
        );
    }
}

export default Chat;