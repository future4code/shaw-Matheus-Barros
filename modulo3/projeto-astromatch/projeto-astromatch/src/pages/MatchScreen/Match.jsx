import React from 'react'
import Card from '../../components/Card'

export default function Match(props) {
    return(
        <>
            <Card changePage={props.changePage} page={props.page} /> 
        </>
    )
}