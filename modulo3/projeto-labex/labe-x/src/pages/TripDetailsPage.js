import axios from "axios"
import { useEffect, useState } from "react"
import { goToHomePage, goBackAdminHomePage } from "../routes/coordinator"
import { aluno } from "../constants/api"
import { useNavigate, useParams } from "react-router-dom"
import { useProtectdPage } from "../hooks/useProtectdPage"

export function TripDetailsPage() {

    // const pathParams = useParams()
    const navigate = useNavigate()
    const [tripDetails, setTripDetails] = useState({})

    useProtectdPage()

    useEffect(() => {
        const token = localStorage.getItem('token')
        //Pega os detalhes de uma viagem
        //id 'GCwypeoim3Mpzztn5tgN' usada como exemplo. *usar params para id*
        axios.get(`https://us-central1-labenu-apis.cloudfunctions.net/labeX/${aluno}/trip/GCwypeoim3Mpzztn5tgN`, {
            headers: {
                auth: token
            }
        })
        .then((res) => {
            console.log('Deu bom: ', res.data.trip)
            setTripDetails(res.data.trip)
        })
        .catch((err) => {
            console.log('Deu ruim: ', err.response)
        })
    }, [])

    return(
        <div>
            <button onClick={() => goToHomePage(navigate)}> Home </button>
            <button> Logout </button>
            <br/>
            <h2> TripDetailsPage </h2>
            
            {tripDetails.name} 
            
            <br/>
            <button onClick={() => goBackAdminHomePage(navigate)}> Voltar </button>
        </div>
    )
}