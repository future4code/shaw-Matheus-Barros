import { useNavigate } from "react-router-dom"
import { goToHomePage, goToLoginPage, goToListTripsPage } from "../routes/coordinator"

export function HomePage(){
    const navigate = useNavigate()

    return(
        <div>
            <h2> Home Page </h2>

            <button onClick={() => goToHomePage(navigate)}> Home </button>
            <button onClick={() => goToLoginPage(navigate)}> Login </button>
            <button onClick={() => goToListTripsPage(navigate)}> Viagens </button>
        </div>
    )
}