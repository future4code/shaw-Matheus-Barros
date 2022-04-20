import React, {useState, useEffect} from 'react'

export default function Match(props) {
    return(
        <>
            Aqui é o Match!
            <button onClick={props.changePage}> Ir pra Home </button>
        </>
    )
}