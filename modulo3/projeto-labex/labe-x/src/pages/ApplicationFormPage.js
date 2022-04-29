import { useNavigate } from "react-router-dom"
import Footer from "../components/footer/Footer"
import HeaderPublic from "../components/headerPublic/HeaderPublic"
import { goBackListTripsPage } from "../routes/coordinator"

export function ApplicationFormPage(){
    const navigate = useNavigate()

    return(
        <div>
            <HeaderPublic />

            <h2> ApplicationFormPage </h2>

            <button onClick={() => goBackListTripsPage(navigate)}> Voltar </button>

            <Footer />
        </div>
    )
}