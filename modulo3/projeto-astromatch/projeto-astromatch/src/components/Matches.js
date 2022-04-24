import React, {useState, useEffect} from 'react'
import styled from 'styled-components'
import axios from 'axios'
import { BASE_URL } from '../constants/api'

const MatchesDiv = styled.div`
    height: 78%;

    center > button {
        width: 100%;
        height: 3.2em;
        cursor: pointer;
        background: linear-gradient(#0000, #fcc98e);
        padding: 5px;
        border: none;
    }
`

const ListMatchesDiv = styled.div`
    display: flex;
    flex-direction: column;
    row-gap: 5px;
    height: 100%;
    overflow-y: scroll;
    
    ::-webkit-scrollbar {
        width: 4px;
    }
    ::-webkit-scrollbar-thumb {
        background-color: #44535c;
    }

    @media screen and (min-device-width : 320px) and (max-device-width : 480px) {
        ::-webkit-scrollbar {
            width: 0;
        }
    }
    
    h1 {
        text-align: center;
        margin: auto;
    }
`

const MatcheDiv = styled.div`
    display: flex;
    align-items: center;
    width: 100%;
    height: 15%;
    margin-bottom: 5px;
    &:hover{
        background: linear-gradient(to right, #fcc98e, #0000);
    }

    img {
        width: 20%;
        height: 5.5em;
        border-radius: 50%;
        margin-left: 0.5em;
        padding: 12px 0;
    }

    p {
        padding-left: 10px;
    }
`

export default function Matches(){
    
    const [matches, setMatches] = useState([])

    const clear = () => {
        axios.put(`${BASE_URL}/clear`)
        .then(res => {
            alert("Lista de matches resetada com sucesso!")
        })
        .catch(err => { console.log(err.response) })
    }

    const getMatches = () => {
        axios.get(`${BASE_URL}/matches`)
        .then(res => {
            setMatches(res.data.matches)
        })
        .catch(err => { console.log(err.response) })
    }

    useEffect(() => {
        getMatches()
    }, [matches])

    const listMatches = matches.map((objeto) => {
        return(
            <MatcheDiv>
                <img src={objeto.photo} />
                <p> <b>{objeto.name}</b> </p>
            </MatcheDiv>
        )
    })
    
    return(
        <MatchesDiv>
            <center><button onClick={() => clear()}> Excluir Matches ​🗑️ </button></center>

            <ListMatchesDiv>
            {
                matches.length !== 0 ?
                listMatches : <h1> Você ainda não tem Matches. </h1> 
            }
            </ListMatchesDiv>
        </MatchesDiv>
    )
}