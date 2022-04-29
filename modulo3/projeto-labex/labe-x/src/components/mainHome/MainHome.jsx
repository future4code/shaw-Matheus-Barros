import { MainHomeDiv } from "./styled"
import { useNavigate } from "react-router-dom"
import { goToListTripsPage, goToLoginPage } from "../../routes/coordinator"
import AstroHome from "../../assets/AstroHome.png"

export default function MainHome() {

    const navigate = useNavigate()

    return(
        <MainHomeDiv Img={AstroHome}>
            <button onClick={() => goToListTripsPage(navigate)}> Viagens </button>
            <button onClick={() => goToLoginPage(navigate)}> Login </button>
        </MainHomeDiv>   
    )
}