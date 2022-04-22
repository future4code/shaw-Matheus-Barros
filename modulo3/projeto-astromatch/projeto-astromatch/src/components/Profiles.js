import React, {useState, useEffect} from 'react'
import styled from 'styled-components'
import axios from 'axios'
import {BASE_URL} from '../constants/api'

const ProfileDiv = styled.div`
    height: 65vh;

    img {
        width: 100%;
    }
`

const DescriptionDiv = styled.div`
    /* display: flex;
    flex-direction: column;
    justify-content: flex-end; */

    /* box-shadow: rgb(117 117 117 / 77%) 0px 2px 10px 0px; */
    
    background: linear-gradient(#0000, #fcc98e);
    margin: 10px 0px;
    padding: 5px;
    bottom: 4em;
    color: black;
    position: relative;
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
        <ProfileDiv>
            <img src={profiles.photo} height={400} />
            <DescriptionDiv>
                <p> <b>{profiles.name}, {profiles.age}</b>  </p>
                <p> {profiles.bio} </p>
            </DescriptionDiv>

           
        </ProfileDiv>
    )
}