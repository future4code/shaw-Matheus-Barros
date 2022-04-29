import { useNavigate } from "react-router-dom"
import { goBackAdminHomePage } from "../routes/coordinator"
import { useProtectdPage } from "../hooks/useProtectdPage"
import HeaderAdm from "../components/headerAdm/HeaderAdm"

export function CreateTripPage(){
    const navigate = useNavigate()

    useProtectdPage()

    return(
        <div>
            <HeaderAdm />

            <h2> CreateTripPage </h2>

            <button onClick={() => goBackAdminHomePage(navigate)}> Voltar </button>
        </div>
    )
}