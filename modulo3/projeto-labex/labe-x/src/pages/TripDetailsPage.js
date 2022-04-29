import axios from "axios"
import { useEffect, useState } from "react"
import { goBackAdminHomePage } from "../routes/coordinator"
import { BASE_URL } from "../constants/api"
import { useNavigate, useParams } from "react-router-dom"
import { useProtectdPage } from "../hooks/useProtectdPage"
import HeaderAdm from "../components/headerAdm/HeaderAdm"

export function TripDetailsPage() {

    const pathParams = useParams()
    const navigate = useNavigate()
    const [tripDetails, setTripDetails] = useState({})

    useProtectdPage()

    useEffect(() => {
        const token = localStorage.getItem('token')
        axios.get(`${BASE_URL}/trip/${pathParams.id}`, {
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
            <HeaderAdm />
            <br/>
            <h2> TripDetailsPage </h2>
            
            {tripDetails.name} 
            
            <br/>
            <button onClick={() => goBackAdminHomePage(navigate)}> Voltar </button>
        </div>
    )
}