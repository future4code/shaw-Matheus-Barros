import React from 'react'
import styled from 'styled-components'
import axios from 'axios'
import {BASE_URL} from '../constants/api'

const ChooseDiv = styled.div`
    width: 100%;
    height: 19%;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
`

const ButtonM = styled.button`
    cursor: pointer;
    font-size: 2em;
    width: 20%;
    height: 60%;
    border-radius: 50%;
    border: hidden;
    background: linear-gradient(0deg, rgba(20,167,62,1) 0%, rgba(102,247,113,1) 100%);
    box-shadow: 0 0 20px 3px green;

    &:hover{
        box-shadow: 0 0 20px 5px green;
    }

    &:active{
        box-shadow: 0 0 20px 1px green;
    }
`

const ButtonR = styled.button`
    cursor: pointer;
    font-size: 2em;
    width: 21%;
    height: 62%;
    border-radius: 50%;
    border: hidden;
    background: linear-gradient(0deg,  rgba(167,20,20,100) 0%, rgba(247,100,90,100) 100%);
    box-shadow: 0 0 20px 3px red;

    &:hover{
        box-shadow: 0 0 20px 5px red;
    }

    &:active{
        box-shadow: 0 0 20px 1px red;
    }
`

export default function Choose(props) {

    const choosePerson = (id, choice) => {
        const body = {
            id: id,
            choice: choice
        }

        axios.post(`${BASE_URL}/choose-person`, body)
        .then( (res) => {
            props.getProfileToChoose()
            if(res.data.isMatch){
                alert(`❤️ Deu match com ${props.profile.name} ❤️`)
            }
        })
        .catch( (err) => {console.log(err.response)} )
    }

    return(
        <ChooseDiv>
            <ButtonM onClick={() => choosePerson(props.profile.id, true)}> ✔️ </ButtonM>
            <ButtonR onClick={() => choosePerson(props.profile.id, false)}> ❌ </ButtonR>
        </ChooseDiv>
    )
}