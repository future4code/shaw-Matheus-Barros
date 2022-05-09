import { useNavigate } from "react-router-dom"
import { goToSignUpPage, goToFeedPage } from "../../routes/coordinator"

export function LoginPage() {

    const navigate = useNavigate()

    return(
        <>
            <h1> Login Page </h1>

            <input placeholder="E-mail" />
            <input placeholder="Senha" />

            <button onClick={() => goToFeedPage(navigate)}> Entrar </button>
            <button onClick={() => goToSignUpPage(navigate)}> Criar conta </button>
        </>
    )
}