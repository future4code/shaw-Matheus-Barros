import { useNavigate } from "react-router-dom"
import { goToHomePage, goToLoginPage, goBackListTripsPage } from "../routes/coordinator"

export function ApplicationFormPage(){
    const navigate = useNavigate()

    return(
        <div>
            <h2> ApplicationFormPage </h2>

            <button onClick={() => goToHomePage(navigate)}> Home </button>
            <button onClick={() => goToLoginPage(navigate)}> Login </button>
            <button onClick={() => goBackListTripsPage(navigate)}> Voltar </button>
        </div>
    )
}