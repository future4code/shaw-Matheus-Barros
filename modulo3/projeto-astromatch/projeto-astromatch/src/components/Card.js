import React from 'react'
import styled from 'styled-components'

const CardDiv = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 30vw;
    height: 90vh;
    border: 5px solid orange;
    border-radius: 10px;
    background-color: grey;
`

export default function Card() {
    return(
        <CardDiv>
            <p> Aqui é o Card da página Home. </p>
        </CardDiv>
    )
}