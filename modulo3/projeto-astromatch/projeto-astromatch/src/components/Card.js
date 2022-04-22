import React from 'react'
import styled from 'styled-components'
import LogoHeader from '../images/LogoHeader.png'
import Profiles from './Profiles'

const CardDiv = styled.div`
    width: 30%;
    height: 100%;
    margin: auto;
    border: 5px solid #fb9221;
    border-radius: 10px;
    background-color: #b5c3c9;
`
const CardHeader = styled.header`
    display: flex;
    align-items: center;
    height: 15%;
    background-color: #edb371;
    border-radius: 4px 4px 0px 0px;

    img {
        height: 80%;
    }

    button {
        border-radius: 10px;
        padding: 5px 10px 5px 10px;
        box-shadow: -3px 4px rgba(0, 0, 0, 0.2);
    }
`

export default function Card(props) {
    return(
        <CardDiv>
            <CardHeader> 
                <img src={LogoHeader} alt="Logo AstroMatch"/>
                <button onClick={props.changePage}> <b>Matchs ❤️</b> </button>
            </CardHeader>
            
            <Profiles />
        </CardDiv>
    )
}