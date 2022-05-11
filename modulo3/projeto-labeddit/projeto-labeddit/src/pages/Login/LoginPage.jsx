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
                    pattern={"[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"}
                    title={"Email deve possuir um . e no mínimo 2 e no máximo 4 caracteres em seguida no final"}
                    required 
                />
                <input placeholder="Senha"
                    type={"password"}
                    name="password"
                    value={form.password}
                    onChange={onChange}
                    pattern={"^.{8,30}$"}
                    title={"Senha deve possuir no mínimo 8 e no máximo 30 caracteres"}
                    required 
                />

                <button type={"submit"}> Entrar </button>
            </FormSubmit>
            
            <button onClick={() => goToSignUpPage(navigate)}> Criar conta </button>
        </LoginContainer>
    )
}