import styled from 'styled-components'
import { useNavigate } from "react-router-dom"
import { goToCreateTripPage, goToTripDetailsPage } from "../routes/coordinator"
import { useProtectdPage } from "../hooks/useProtectdPage"
import { useGetRequestData } from "../hooks/useGetRequestData"
import { BASE_URL } from "../constants/api"
import HeaderAdm from '../components/headerAdm/HeaderAdm'
import Footer from '../components/footer/Footer'

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

    const data = useGetRequestData([], `${BASE_URL}/trips`)

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
            <HeaderAdm />

            {listTrips}

            <button onClick={() => goToCreateTripPage(navigate)}> Criar viagem </button>

            <Footer />
        </div>
    )
}