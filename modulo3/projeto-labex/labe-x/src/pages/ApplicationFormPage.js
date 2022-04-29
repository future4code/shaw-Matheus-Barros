import { useNavigate } from "react-router-dom"
import { goToHomePage,  goToAdminHomePage, goBackListTripsPage } from "../routes/coordinator"

export function ApplicationFormPage(){
    const navigate = useNavigate()

    return(
        <div>
            <h2> ApplicationFormPage </h2>

            <button onClick={() => goToHomePage(navigate)}> Início </button>
            <button onClick={() => goToAdminHomePage(navigate)}> Área administrativa </button>
            <button onClick={() => goBackListTripsPage(navigate)}> Voltar </button>
        </div>
    )
}