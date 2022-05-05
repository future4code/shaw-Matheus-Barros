import React from 'react'
import HeaderAdm from "../components/headerAdm/HeaderAdm"
import { useNavigate } from "react-router-dom"
import { goBackAdminHomePage } from "../routes/coordinator"
import { useProtectdPage } from "../hooks/useProtectdPage"
import { useForm } from "../hooks/useForm"
import axios from "axios"
import { BASE_URL } from "../constants/api"
import { planets } from '../constants/planets'

export function CreateTripPage() {

    const navigate = useNavigate()

    useProtectdPage()

    const { form, onChange, clearFields } = useForm({
        name:"", planet:"", date:"", description:"", durationInDays: ""
    })

    const today = new Date() //Para pegar a data e hora atual no formato de texto e numero
    //Métodos para transformar new Date() em uma data padrão.
    const minDate = today.getFullYear() + "-" + ("0" + (today.getMonth() + 1)) + "-" + ("0" + today.getDate())

    const onSubmitCreateTrip = (event) => {
        event.preventDefault()
        
        const token = localStorage.getItem('token')
        const headers = {headers: {auth: token}}
        axios.post(`${BASE_URL}/trips`, form, headers)
        .then(() => { 
            alert("Viagem criada!") 
            clearFields() 
        })
        .catch((err) => { console.log(err.response.data) })
    };

    return(
        <div>
            <HeaderAdm />

            <h2> CreateTripPage </h2>

            <form onSubmit={onSubmitCreateTrip}>
                <input placeholder="Nome da viagem"
                    name={"name"}
                    value={form.name}
                    onChange={onChange}
                    type={"text"}
                    pattern={"^.{5,}$"}
                    title="O nome deve ter no mínimo 5 letras."
                    required
                />
                <select placeholder="Nome do planeta"
                    name={"planet"} 
                    value={form.planet}
                    onChange={onChange}
                    type={"text"}
                    required
                >
                    <option value="" disabled> Escolha um planeta </option>
                    {planets.map((planet) => {
                        return (<option value={planet} key={planet}> {planet} </option>)
                    })}
                </select>
                <input placeholder="Data de viagem"
                    name={"date"}
                    value={form.date} 
                    onChange={onChange}
                    type={"date"}
                    min={minDate}
                    required
                />
                <input placeholder="Descrição da viagem" 
                    name={"description"}
                    value={form.description}
                    onChange={onChange}
                    type={"text"}
                    pattern={"^.{30,}$"}
                    title={"A descrição é no mínimo 30 caracteres."}
                    required
                />
                <input placeholder="Duração da viagem (dias)" 
                    name={"durationInDays"}
                    value={form.durationInDays}
                    onChange={onChange}
                    type={"number"}
                    min={50}
                    title={"A duração é no mínimo 50 dias."}
                    required
                />
                <button> Criar viagem </button>
            </form>

            <button onClick={() => goBackAdminHomePage(navigate)}> Voltar </button>
        </div>
    );
}