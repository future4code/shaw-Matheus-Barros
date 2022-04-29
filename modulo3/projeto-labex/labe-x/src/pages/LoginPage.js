import { useNavigate } from "react-router-dom"
import axios from "axios"
import { BASE_URL } from "../constants/api"
import { useForm } from "../hooks/useForm"
import HeaderPublic from "../components/headerPublic/HeaderPublic"

export function LoginPage() {

    const navigate = useNavigate()

    const { form, onChange } = useForm({email:"", password:""})

    const onSubmitLogin = (event) => {
        event.preventDefault()
         
        axios.post(`${BASE_URL}/login`, form)
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
            <HeaderPublic />

            <h2> Login Page </h2>

            <br/>

            <form onSubmit={onSubmitLogin}>
                <input 
                    name={'email'}
                    placeholder="email"
                    type="email"
                    value={form.email}
                    onChange={onChange}
                    required
                />
                <input 
                    name={'password'}
                    placeholder="password"
                    type="password"
                    value={form.password}
                    onChange={onChange}
                    required
                />

                <button> Conectar </button>
            </form>
        </div>
    )
}