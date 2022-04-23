import React, {useState, useEffect} from 'react'
import styled from 'styled-components' // 20%
import axios from 'axios'
import {BASE_URL} from '../constants/api'

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
        <div>
            <button onClick={() => choosePerson(props.profile.id, true)}> ✔️ </button>
            <button onClick={() => choosePerson(props.profile.id, false)}> ❌ </button>
        </div>
    )
}