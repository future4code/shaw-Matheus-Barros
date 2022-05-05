import styled from "styled-components"
import { useNavigate } from "react-router-dom"
import { goToApplicationFormPage } from "../routes/coordinator"
import { useGetRequestData } from "../hooks/useGetRequestData"
import { BASE_URL } from "../constants/api"
import HeaderPublic from "../components/headerPublic/HeaderPublic"
import Footer from "../components/footer/Footer"

const TripDiv = styled.div`
    margin: 5px;
    border: 1px solid black;
`

export function ListTripsPage(){

    const navigate = useNavigate()

    const trips = useGetRequestData([], `${BASE_URL}/trips`)

    const listTrips = trips.map((trip) => {
        return(
            <TripDiv key={trip.name}>
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
            <HeaderPublic />

            <h2> ListTripsPage </h2>

            {listTrips}
            
            <button onClick={() => goToApplicationFormPage(navigate)}> Candidatar-se </button>

            <Footer />
        </div>
    )
}