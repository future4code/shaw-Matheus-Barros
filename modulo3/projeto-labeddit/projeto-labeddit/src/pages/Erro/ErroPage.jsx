import { useNavigate } from "react-router-dom"

export function ErroPage() {

    const navigate = useNavigate()

    return(
        <>
            <button onClick={() => navigate(-1)}> Voltar </button>

            <h1> Página não encontrada... </h1>
        </>
    )
}