import React from 'react'
import styled from 'styled-components'

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

    return(
        <ProfileDiv imagem={props.profile.name && props.profile.photo}>
            <DescriptionDiv>
                <h2> {props.profile.name &&  <b>{props.profile.name}, {props.profile.age}</b>} </h2>
                <h3> {props.profile.name && props.profile.bio} </h3>
            </DescriptionDiv>
        </ProfileDiv>
    )
}