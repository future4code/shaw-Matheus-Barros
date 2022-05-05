import { HeaderDiv } from "./styled"
import { useNavigate } from "react-router-dom"
import { goToHomePage, goToLogout } from "../../routes/coordinator"

export default function HeaderAdm() {

    const navigate = useNavigate()

    return(
        <HeaderDiv>
            <h1> LabeX </h1>
            <div>
                <button onClick={() => goToHomePage(navigate)}> Início </button>
                <button onClick={() => goToLogout(navigate)}> Desconectar </button>
            </div> 
        </HeaderDiv>   
    )
}