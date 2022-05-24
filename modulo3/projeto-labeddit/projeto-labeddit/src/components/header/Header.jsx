import { useNavigate } from "react-router-dom"
import { HeaderDiv, LogoImg } from "./style"
import logo from "../../assets/logo-labeddit.png"
import { Button } from "@mui/material"

function Header(props) {

    const navigate = useNavigate()
    const token = localStorage.getItem("token")

    const login = () => {
        navigate("/")
    }

    const logout = () => {
        localStorage.removeItem("token")
        navigate("/")
    }

    return(
        <>
            {!token ? 
            <HeaderDiv>
                <LogoImg>
                    <img src={logo} alt={"Logo Labeddit"} />
                </LogoImg>
            
                <Button onClick={login} variant="text">
                    Login
                </Button>
            </HeaderDiv>
            :
            <HeaderDiv>

                <LogoImg>
                    <img src={logo} alt={"Logo Labeddit"} />
                </LogoImg>
                
                <Button onClick={logout} variant="text">
                    Logout
                </Button>
            </HeaderDiv>
            }
        </>
    )
}

export default Header