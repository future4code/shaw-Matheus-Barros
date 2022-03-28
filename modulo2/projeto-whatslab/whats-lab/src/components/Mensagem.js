import React from 'react';
import styled from 'styled-components'

const BoxMensagem = styled.div`
    margin: 5px;
    padding: 5px;
    background-color: white;
    border-radius: 5px;
    max-width: 60%;
    min-width: 8%;
    margin-bottom: 1em;
`

const Usuario = styled.div`
    color: black;
    font-weight: bold;
`

const Texto = styled.div`
    word-wrap: break-word;
`

class Mensagem extends React.Component {

    render() {

        const listaDeComponentes = (this.props.mensagens).map((mensagem, index) => {
            return (
                <BoxMensagem key={index}>
                    <Usuario>{mensagem.user}:</Usuario> <Texto>{mensagem.mensagem}</Texto>
                </BoxMensagem>
            );
        });

        return(
            <div>
                {listaDeComponentes}
            </div>
        )
    }
}

export default Mensagem;