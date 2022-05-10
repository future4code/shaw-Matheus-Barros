import { useNavigate } from "react-router-dom"
import { goToLoginPage } from "../../routes/coordinator"
import useProtectdPage from "../../hooks/useProtectdPage"

export function FeedPage() {
    
    useProtectdPage()

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