import { useNavigate } from "react-router-dom"
import { goToHomePage, goBackAdminHomePage } from "../routes/coordinator"

export function CreateTripPage(){
    const navigate = useNavigate()

    return(
        <div>
            <h2> CreateTripPage </h2>

            <button onClick={() => goToHomePage(navigate)}> Home </button>
            <button> Logout </button>
            <button onClick={() => goBackAdminHomePage(navigate)}> Voltar </button>
        </div>
    )
}