import { useNavigate } from "react-router-dom"
import { goToLoginPage, goToFeedPage } from "../../routes/coordinator"

export function PostPage() {

    const navigate = useNavigate()

    return(
        <>
            <button onClick={() => goToLoginPage(navigate)}> Desconectar </button>

            <h1> Post Page </h1>

            <button onClick={() => goToFeedPage(navigate)}> Voltar </button>
        </>
    )
}