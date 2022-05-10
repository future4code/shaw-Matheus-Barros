import { useNavigate } from "react-router-dom"
import { goToLoginPage } from "../../routes/coordinator"
import { SignupContainer, LogoImg, FormSubmit } from "./style"
import logo from "../../assets/logo-labeddit.png"
import useForm from "../../hooks/useForm"
import { signup } from "../../services/requests"
import useUnprotectdPage from "../../hooks/useUnprotectdPage"

export function SignUpPage() {

    useUnprotectdPage()

    const {form, onChange, clear} = useForm({username: "", email: "", password: ""})

    const navigate = useNavigate()

    const onSubmitForm = (event) => {
        event.preventDefault()
        signup(form, navigate)
    }

    return(
        <SignupContainer>
            <LogoImg src={logo} alt="logo labeddit" />

            <h1> SiginUp Page </h1>

            <FormSubmit onSubmit={onSubmitForm}>
                <input placeholder="Nome"
                    name="username"
                    value={form.username}
                    onChange={onChange}
                    required  
                />
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
                    // pattern={"^.{8, 30}$"} --- Não funciona pq a API já tem tal critério? ---
                    // title="Senha deve possuir no mínimo 8 e no máximo 30 caracteres."
                    required 
                />

                <button type={"submit"}> Cadastrar </button>
            </FormSubmit>
            

            <button onClick={() => goToLoginPage(navigate)}> Voltar </button>
        </SignupContainer>
    )
}