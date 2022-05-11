import { useNavigate } from "react-router-dom"
import { goToLoginPage } from "../../routes/coordinator"
import useProtectdPage from "../../hooks/useProtectdPage"
import Header from "../../components/header/Header"

export function FeedPage() {
    
    useProtectdPage()

    const navigate = useNavigate()

    return(
        <>
            <Header />

            <h1> Feed Page </h1>

            <input placeholder="Escreva seu post..." />

            <button> Postar </button>
        </>
    )
}