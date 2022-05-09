import { useNavigate } from "react-router-dom"
import { goToLoginPage, goToFeedPage } from "../../routes/coordinator"

export function SignUpPage() {

    const navigate = useNavigate()

    return(
        <>
            <h1> SiginUp Page </h1>

            <input placeholder="Nome" />
            <input placeholder="E-mail" />
            <input placeholder="Senha" />

            <button onClick={() => goToFeedPage(navigate)}> Cadastrar </button>
            <button onClick={() => goToLoginPage(navigate)}> Voltar </button>
        </>
    )
}