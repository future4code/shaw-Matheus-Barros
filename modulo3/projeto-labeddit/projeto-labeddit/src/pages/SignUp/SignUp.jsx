import { useNavigate } from "react-router-dom"
import { goToLoginPage } from "../../routes/coordinator"
import { SignupContainer, LogoImg, FormSubmit } from "./style"
import useForm from "../../hooks/useForm"
import { signup } from "../../services/requests"
import useUnprotectdPage from "../../hooks/useUnprotectdPage"
import Header from "../../components/header/Header"

export function SignUpPage() {

    useUnprotectdPage()

    const {form, onChange, clear} = useForm({username: "", email: "", password: ""})

    const navigate = useNavigate()

    const onSubmitForm = (event) => {
        event.preventDefault()
        signup(form, navigate)
    }

    return(
        <>
            <Header />
            <SignupContainer>

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
                        pattern={"[a-zA-Z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"}
                        title={"Email deve possuir um . e no mínimo 2 letras minúsculas em seguida no final"}
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

                    <button type={"submit"}> Cadastrar </button>
                </FormSubmit>
            </SignupContainer>
        </>
    )
}