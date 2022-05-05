import { HeaderDiv } from "./styled"
import { useNavigate } from "react-router-dom"
import { goToHomePage, goToAdminHomePage } from "../../routes/coordinator"

export default function HeaderPublic() {

    const navigate = useNavigate()

    return(
        <HeaderDiv>
            <h1> LabeX </h1>
            <div>
                <button onClick={() => goToHomePage(navigate)}> Início </button>
                <button onClick={() => goToAdminHomePage(navigate)}> Área administrativa </button>
            </div> 
        </HeaderDiv>   
    )
}