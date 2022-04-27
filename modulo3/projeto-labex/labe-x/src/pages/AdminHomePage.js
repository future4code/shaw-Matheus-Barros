import { useNavigate } from "react-router-dom"
import { goToHomePage, goToCreateTripPage, goToTripDetailsPage } from "../routes/coordinator"
import { useProtectdPage } from "../hooks/useProtectdPage"

export function AdminHomePage(){
    const navigate = useNavigate()

    useProtectdPage()

    return(
        <div>
            <h2> AdminHomePage </h2>

            <button onClick={() => goToHomePage(navigate)}> Home </button>
            <button> Logout </button>

            <button onClick={() => goToCreateTripPage(navigate)}> Criar viagem </button>
            <button onClick={() => goToTripDetailsPage(navigate)}> Candidatos </button>
        </div>
    )
}