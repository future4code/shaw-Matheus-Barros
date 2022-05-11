import { useNavigate } from "react-router-dom"
import Header from "../../components/header/Header"
import useProtectdPage from "../../hooks/useProtectdPage"
import { goToLoginPage, goToFeedPage } from "../../routes/coordinator"

export function PostPage() {

    useProtectdPage()

    const navigate = useNavigate()

    return(
        <>
            <Header page={"page"}/>
        
            <h1> Post Page </h1>
        </>
    )
}