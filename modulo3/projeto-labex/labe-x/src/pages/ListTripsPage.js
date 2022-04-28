import styled from "styled-components"
import { useNavigate } from "react-router-dom"
import { goToHomePage, goToLoginPage, goToApplicationFormPage } from "../routes/coordinator"
import { GetRequestData } from "../hooks/useGetRequestData"
import { BASE_URL } from "../constants/api"

const TripDiv = styled.div`
    margin: 5px;
    border: 1px solid black;
`

export function ListTripsPage(){

    const navigate = useNavigate()

    const data = GetRequestData([], `${BASE_URL}/trips`)

    const listTrips = data.map((trip) => {
        return(
            <TripDiv>
                <h1> {trip.name} </h1>
                <p> "{trip.description}" </p>
                <p> Destino: {trip.planet} </p>
                <p> Duração: {trip.durationInDays} dias </p>
                <p> Data: {trip.date} </p>
            </TripDiv>
        )
    })

    return(
        <div>
            <button onClick={() => goToHomePage(navigate)}> Home </button>
            <button onClick={() => goToLoginPage(navigate)}> Login </button>

            <h2> ListTripsPage </h2>

            {listTrips}
            
            <button onClick={() => goToApplicationFormPage(navigate)}> Candidatar-se </button>
        </div>
    )
}