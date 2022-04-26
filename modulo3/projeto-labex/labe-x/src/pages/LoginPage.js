import { useNavigate } from "react-router-dom"
import { goToHomePage, goToLoginPage, goToAdminHomePage } from "../routes/coordinator"

export function LoginPage(){
    const navigate = useNavigate()

    return(
        <div>
            <h2> Login Page </h2>

            <button onClick={() => goToHomePage(navigate)}> Home </button>
            <button onClick={() => goToLoginPage(navigate)}> Login </button>
            <button onClick={() => goToAdminHomePage(navigate)}> Conectar </button>
        </div>
    )
}