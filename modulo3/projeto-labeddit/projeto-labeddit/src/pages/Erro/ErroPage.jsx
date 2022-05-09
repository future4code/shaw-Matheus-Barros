import { useNavigate } from "react-router-dom"
import { goToLoginPage } from "../../routes/coordinator"

export function ErroPage() {

    const navigate = useNavigate()

    return(
        <>
            <button onClick={() => goToLoginPage(navigate)}> Desconectar </button>

            <h1> Página não encontrada... </h1>
        </>
    )
}