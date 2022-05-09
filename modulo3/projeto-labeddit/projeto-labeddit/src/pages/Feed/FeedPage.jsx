import { useNavigate } from "react-router-dom"
import { goToLoginPage } from "../../routes/coordinator"

export function FeedPage() {

    const navigate = useNavigate()

    return(
        <>
            <button onClick={() => goToLoginPage(navigate)}> Desconectar </button>

            <h1> Feed Page </h1>

            <input placeholder="Escreva seu post..." />

            <button> Postar </button>
        </>
    )
}