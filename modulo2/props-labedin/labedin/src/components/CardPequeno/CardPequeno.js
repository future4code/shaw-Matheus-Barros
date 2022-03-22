import React from 'react';
import styled from 'styled-components';

const DivCardPequeno = styled.div`
    display: flex;
    align-items: center;
    border: 1px solid black;
    padding: 20px 10px;
    margin-bottom: 10px;
    height: 100px;

    img {
        width: 70px;
        margin-right: 10px;
        border-radius: 50%;
    }

    div {
        display: flex;
        flex-direction: column;
        justify-items: flex-start;
    } 

    h4 {
        margin-bottom: 15px;
    }
` 

function CardPequeno(props){
    return(
        <DivCardPequeno>
            <img src={ props.imagem } />
            <div>
                <h4>{ props.nome }</h4>
                <p>{ props.descricao }</p>
            </div>
        </DivCardPequeno>
    )   
}

export default CardPequeno;