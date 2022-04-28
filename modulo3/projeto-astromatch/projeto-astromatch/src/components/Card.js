import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import axios from 'axios'
import { BASE_URL } from '../constants/api'
import LogoHeader from '../images/LogoHeader.png'
import Profiles from './Profiles'
import Choose from './Choose'
import Matches from './Matches'

const CardDiv = styled.div`
    width: 30%;
    height: 100%;
    margin: auto;
    border: 5px solid #fb9221;
    border-radius: 10px;
    background-color: #b5c3c9;

    @media (max-width: 800px)  {
		width: 100%;
        border-radius: 0;
    }
`
const CardHeader = styled.header`
    display: flex;
    align-items: center;
    height: 15%;
    background-color: #edb371;
    border-radius: 4px 4px 0px 0px;

    img {
        height: 80%;
        width: 70%;
    }

    button {
        border-radius: 10px;
        padding: 5px 10px 5px 10px;
        box-shadow: -3px 4px rgba(0, 0, 0, 0.2);
        &:hover{
            cursor: pointer;
            transform: scale(1.05);
        }
    }
`

const ButtonClear = styled.button`
    width: 100%;
    height: 85%;
    cursor: pointer;
    background: linear-gradient(#fcc98e, #0000, #fcc98e);
    padding: 5px;
    border: none;
    border-radius: 0% 0% 1% 1%;
    margin: auto;
`

export default function Card(props) {

    const [profiles, setProfiles] = useState({})
    const [noProfiles, setNoProfiles] = useState(false)

    const getProfileToChoose = () => {
        axios.get(`${BASE_URL}/person`)
        .then(res => {
            if (res.data.profile !== null) {
                setProfiles(res.data.profile)
            } else {
                setNoProfiles(true)
            }
        })
        .catch(err => { console.log(err.response) })
    }

    const clear = () => {
        axios.put(`${BASE_URL}/clear`)
        .then(res => {
            alert("Lista de matches resetada com sucesso! Reinicie a página se necessário.")
        })
        .catch(err => { console.log(err.response) })
    }

    useEffect(() => {
        getProfileToChoose()
    }, [])

    return (
        <>
            {
                (props.page === "Home" ?

                    <CardDiv>
                        <CardHeader>
                            <img src={LogoHeader} alt="Logo AstroMatch" />
                            <button onClick={props.changePage}> <b>Matches ❤️</b> </button>
                        </CardHeader>
                        {
                            noProfiles ? 
                            <ButtonClear onClick={clear}> 
                                <h3>Não há mais perfis, clique pra resetar.</h3> 
                            </ButtonClear> 
                            :  
                            <>
                                <Profiles profile={profiles} />
                                <Choose profile={profiles} getProfileToChoose={getProfileToChoose} />
                            </>
                        }
                    </CardDiv>
                    :
                    <CardDiv>
                        <CardHeader>
                            <img src={LogoHeader} alt="Logo AstroMatch" />
                            <button onClick={props.changePage}> <b>Matches ❤️</b> </button>
                        </CardHeader>

                        <Matches clear={clear} />
                    </CardDiv>
                )
            }

        </>
    )
}