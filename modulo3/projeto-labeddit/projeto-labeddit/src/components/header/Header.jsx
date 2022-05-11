import { useNavigate } from "react-router-dom"
import { HeaderDiv, LogoImg, Button } from "./style"
import logo from "../../assets/logo-labeddit.png"

function Header(props) {

    const navigate = useNavigate()
    const token = localStorage.getItem("token")
    // const [rightButton, setRightButton] = useState(token ? "Logout" : "Login")

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
            
                <Button onClick={login}>
                    Login
                </Button>
            </HeaderDiv>
            :
            <HeaderDiv page={props.page}>
                {props.page && 
                    <button onClick={() => navigate(-1)}> X </button>
                }

                <LogoImg>
                    <img src={logo} alt={"Logo Labeddit"} />
                </LogoImg>
                
                <Button onClick={logout}>
                    Logout
                </Button>
            </HeaderDiv>
            }
        </>
    )
}

export default Header