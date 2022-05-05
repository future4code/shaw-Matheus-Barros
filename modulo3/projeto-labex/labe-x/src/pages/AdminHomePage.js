import styled from 'styled-components'
import { useNavigate } from "react-router-dom"
import { goToCreateTripPage, goToTripDetailsPage } from "../routes/coordinator"
import { useProtectdPage } from "../hooks/useProtectdPage"
import { useGetRequestData } from "../hooks/useGetRequestData"
import { BASE_URL } from "../constants/api"
import axios from 'axios'
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

    const trips = useGetRequestData([], `${BASE_URL}/trips`)

    const deleteTrip = (id) => {
        const token = localStorage.getItem("token");
        const headers = {
            headers: {
                auth: token
            }
        }
    
        axios.delete(`${BASE_URL}/trips/${id}`, headers)
        .then((res) => {
            alert("Viagem deletada com sucesso, atualize a página!")
        })
        .catch((err) => { console.log(err.response.data) })
    }

    const listTrips = trips.map((trip) => {
        return(
            <TripDiv key={trip.id}>
                <h1> {trip.name} </h1>
                <p> "{trip.description}" </p>
                <p> Destino: {trip.planet} </p>
                <p> Duração: {trip.durationInDays} dias </p>
                <p> Data: {trip.date} </p>
                <button onClick={() => goToTripDetailsPage(navigate, trip.id)}> Candidatos </button>
                <button onClick={() => deleteTrip(trip.id)}> Excluir </button>
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