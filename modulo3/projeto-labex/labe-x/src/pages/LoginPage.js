import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { goToHomePage, goToLoginPage } from "../routes/coordinator"
import axios from "axios"
import { BASE_URL } from "../constants/api"

export function LoginPage() {

    const navigate = useNavigate()
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const onChangeEmail = (event) => {
        setEmail(event.target.value)
    }

    const onChangePassword = (event) => {
        setPassword(event.target.value)
    }

    const onSubmitLogin = () => {
        const body = {
            email: email,
            password: password
        }

        axios.post(`${BASE_URL}/login`, body)
        .then((res) => {
            localStorage.setItem('token', res.data.token)
            alert("Autenticações autorizadas!")
            navigate("/admin/trips/list", {replace:true})
        })
        .catch((err) => {
            console.log('Deu errado: ', err.response)
            alert("Autenticações não autorizadas.")
        })
    }

    return(
        <div>
            <h2> Login Page </h2>
            <button onClick={() => goToHomePage(navigate)}> Home </button>
            <button onClick={() => goToLoginPage(navigate)}> Login </button>

            <br/>
            
            <input 
                placeholder="email"
                type="email"
                value={email}
                onChange={onChangeEmail}
            />
            <input 
                placeholder="password"
                type="password"
                value={password}
                onChange={onChangePassword}
            />

            <button onClick={onSubmitLogin}> Conectar </button>
        </div>
    )
}