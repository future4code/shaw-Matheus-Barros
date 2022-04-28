import styled from 'styled-components'
import { useNavigate } from "react-router-dom"
import { goToHomePage, goToCreateTripPage, goToTripDetailsPage } from "../routes/coordinator"
import { useProtectdPage } from "../hooks/useProtectdPage"
import { GetRequestData } from "../hooks/useGetRequestData"
import { BASE_URL } from "../constants/api"

const TripDiv = styled.div`
    margin: 5px;
    border: 1px solid black;
    width: 30vw;
    height: 50vh;
    background: linear-gradient(whitesmoke, orange);
`

export function AdminHomePage(){
    const navigate = useNavigate()

    useProtectdPage()

    const data = GetRequestData([], `${BASE_URL}/trips`)

    const listTrips = data.map((trip) => {
        return(
            <TripDiv key={trip.id}>
                <h1> {trip.name} </h1>
                <p> "{trip.description}" </p>
                <p> Destino: {trip.planet} </p>
                <p> Duração: {trip.durationInDays} dias </p>
                <p> Data: {trip.date} </p>
                <button onClick={() => goToTripDetailsPage(navigate, trip.id)}> Candidatos </button>
            </TripDiv>
        )
    })

    return(
        <div>
            <button onClick={() => goToHomePage(navigate)}> Home </button>
            <button> Logout </button>

            <h2> AdminHomePage </h2>

            {listTrips}

            <button onClick={() => goToCreateTripPage(navigate)}> Criar viagem </button>
        </div>
    )
}