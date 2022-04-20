import React, {useState, useEffect} from 'react'
import Card from '../../components/Card'

export default function Home(props) {
    return(
        <>
            Aqui é o Home!
            <button onClick={props.changePage}> Ir pra Match </button>
            <Card /> 
        </>
    )
}