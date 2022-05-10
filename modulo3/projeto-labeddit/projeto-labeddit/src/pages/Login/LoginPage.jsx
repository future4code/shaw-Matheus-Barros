import { useNavigate } from "react-router-dom"
import { goToSignUpPage } from "../../routes/coordinator"
import { LoginContainer, LogoImg, FormSubmit } from "./style"
import logo from "../../assets/logo-labeddit.png"
import useForm from "../../hooks/useForm"
import { login } from "../../services/requests"
import useUnprotectdPage from "../../hooks/useUnprotectdPage"

export function LoginPage() {

    useUnprotectdPage()

    const {form, onChange, clear} = useForm({email: "", password: ""})

    const navigate = useNavigate()

    const onSubmitForm = (event) => {
        console.log(form)
        event.preventDefault()
        login(form, navigate)
    }

    return(
        <LoginContainer>
            <LogoImg src={logo} alt="logo labeddit" />

            <h1> Login Page </h1>

            <FormSubmit onSubmit={onSubmitForm}>
                <input placeholder="E-mail"
                    type={"email"}
                    name="email"
                    value={form.email}
                    onChange={onChange}
                    required 
                />
                <input placeholder="Senha"
                    type={"password"}
                    name="password"
                    value={form.password}
                    onChange={onChange}
                    required 
                />

                <button type={"submit"}> Entrar </button>
            </FormSubmit>
            
            <button onClick={() => goToSignUpPage(navigate)}> Criar conta </button>
        </LoginContainer>
    )
}