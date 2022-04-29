import { useNavigate } from "react-router-dom"
import { goToHomePage, goToListTripsPage, goToAdminHomePage, goToLoginPage } from "../routes/coordinator"

export function HomePage(){
    const navigate = useNavigate()

    return(
        <div>
            <h2> Home Page </h2>

            <button onClick={() => goToHomePage(navigate)}> Início </button>
            <button onClick={() => goToAdminHomePage(navigate)}> Área administrativa </button>

            <button onClick={() => goToListTripsPage(navigate)}> Viagens </button>
            <button onClick={() => goToLoginPage(navigate)}> Login </button>
        </div>
    )
}