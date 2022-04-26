import { useNavigate } from "react-router-dom"
import { goToHomePage, goBackAdminHomePage } from "../routes/coordinator"

export function TripDetailsPage(){
    const navigate = useNavigate()

    return(
        <div>
            <h2> TripDetailsPage </h2>

            <button onClick={() => goToHomePage(navigate)}> Home </button>
            <button> Logout </button>
            <button onClick={() => goBackAdminHomePage(navigate)}> Voltar </button>
        </div>
    )
}