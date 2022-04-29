import { useNavigate } from "react-router-dom"
import { goToHomePage, goToLogout, goBackAdminHomePage } from "../routes/coordinator"
import { useProtectdPage } from "../hooks/useProtectdPage"

export function CreateTripPage(){
    const navigate = useNavigate()

    useProtectdPage()

    return(
        <div>
            <h2> CreateTripPage </h2>

            <button onClick={() => goToHomePage(navigate)}> Início </button>
            <button onClick={() => goToLogout(navigate)}> Desconectar </button>
            <button onClick={() => goBackAdminHomePage(navigate)}> Voltar </button>
        </div>
    )
}