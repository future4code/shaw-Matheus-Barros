import axios from "axios"
import { useEffect, useState } from "react"
import { goBackAdminHomePage } from "../routes/coordinator"
import { BASE_URL } from "../constants/api"
import { useNavigate, useParams } from "react-router-dom"
import { useProtectdPage } from "../hooks/useProtectdPage"
import HeaderAdm from "../components/headerAdm/HeaderAdm"
import styled from "styled-components"

const TripDiv = styled.div`
    margin: 5px;
    border: 1px solid black;
`

export function TripDetailsPage() {
    useProtectdPage()
    const navigate = useNavigate()
    const pathParams = useParams()
    // const [tripDetails, setTripDetails] = useState({})
    const [candidates, setCandidates] = useState([])
    const [canditadesApproved, setCandidatesApproved]= useState([])

    const getTripDetail = () => {
        const token = localStorage.getItem('token')
        axios.get(`${BASE_URL}/trip/${pathParams.id}`, {
            headers: {
                auth: token
            }
        })
        .then((res) => {
            setCandidates(res.data.trip.candidates)
            setCandidatesApproved(res.data.trip.approved)
        })
        .catch((err) => {
            console.log('Deu ruim: ', err.response)
        })
    }

    useEffect(() => {
        getTripDetail()
    }, [])

    const putCandidateAproved = (id) => {
        const body = {approve: true}
        const token = localStorage.getItem('token')

        axios.put(`${BASE_URL}/trips/${pathParams.id}/candidates/${id}/decide`, body, {headers: 
            {auth: token}
        })
        .then((res) => {
            alert('Aprovado')
            getTripDetail()
        })
        .catch((err) => {
            console.log(err.response.data)
        })
    }

    const putCandidateDesaproved = (id) => {
        const body = {approve: false}
        const token = localStorage.getItem('token')

        axios.put(`${BASE_URL}/trips/${pathParams.id}/candidates/${id}/decide`,body, {headers: 
            {auth: token}
        })
        .then((res) => {
            alert('Descartado')
            getTripDetail()
        })
        .catch((err) => {
            console.log(err.response.data)
        })

    }

    const candidatos = [...candidates].map((candidato) => {
        return (
            <TripDiv key={candidato.id}>
                <p>Nome: {candidato.name}</p>
                <p>Profissão: {candidato.profession}</p>
                <p>Idade: {candidato.age}</p>
                <p>País: {candidato.country}</p>
                <p>Texto de candidatura: {candidato.applicationText}</p>
                <div>
                    <button onClick={() => putCandidateDesaproved(candidato.id)}>Descartar</button>
                    <button onClick={() => putCandidateAproved(candidato.id)}>Aprovar</button>
                </div>
            </TripDiv>
        )
    })

    const aprovados = [...canditadesApproved].map((aprovado) => {
        return (<li key={aprovado.id}> {aprovado.name} </li>)
    })

    return (
        <div>
            <HeaderAdm />
            <p> Candidatos aprovados </p>
            {aprovados}
            <p> Candidatos pendentes </p>
            {candidatos}
            <button onClick={() => goBackAdminHomePage(navigate)}>Voltar</button>
        </div>
    )
}