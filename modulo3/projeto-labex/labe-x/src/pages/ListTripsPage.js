import { useNavigate } from "react-router-dom"
import { goToHomePage, goToLoginPage, goToApplicationFormPage } from "../routes/coordinator"

export function ListTripsPage(){
    const navigate = useNavigate()

    return(
        <div>
            <h2> ListTripsPage </h2>

            <button onClick={() => goToHomePage(navigate)}> Home </button>
            <button onClick={() => goToLoginPage(navigate)}> Login </button>
            <button onClick={() => goToApplicationFormPage(navigate)}> Candidatar-se </button>
        </div>
    )
}