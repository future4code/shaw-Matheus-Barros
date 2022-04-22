import React, {useState, useEffect} from 'react'
import styled from 'styled-components'
import axios from 'axios'
import {BASE_URL} from '../constants/api'

const ProfileDiv = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    height: 65vh;
    background: url(${props => props.imagem});
    background-size: cover; //Pegar toda div
    background-repeat: no-repeat;
    background-position: 50% 0%; //Eixo x Eixo y (ESTUDAR)
`

const DescriptionDiv = styled.div`
    background: linear-gradient(#0000, #fcc98e);
    padding: 5px;
    color: black;
`

export default function Profiles(props) {

    const [profiles, setProfiles] = useState({})

    const getProfileToChoose = () => {
        axios.get(`${BASE_URL}/person`)
        .then(res => {
            setProfiles(res.data.profile)
            console.log(res.data.profile)
        })
        .catch(err => {console.log(err)})
    }
    
    useEffect( () => {
        getProfileToChoose()
    }, [])

    return(
        <ProfileDiv imagem={profiles.photo}>
            <DescriptionDiv>
                <p> {profiles.name &&  <b>{profiles.name}, {profiles.age}</b>} </p>
                <p> {profiles.bio} </p>
            </DescriptionDiv>
        </ProfileDiv>
    )
}