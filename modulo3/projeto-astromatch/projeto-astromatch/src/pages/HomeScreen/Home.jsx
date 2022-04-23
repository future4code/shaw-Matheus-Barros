import React, {useState, useEffect} from 'react'
import Card from '../../components/Card'

export default function Home(props) {
    return(
        <>
            <Card changePage={props.changePage} page={props.page} /> 
        </>
    )
}