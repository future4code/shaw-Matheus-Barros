import { useNavigate } from "react-router-dom"
import { goToLoginPage } from "../../routes/coordinator"
import { SignupContainer, LogoImg, FormSubmit } from "./style"
import useForm from "../../hooks/useForm"
import { signup } from "../../services/requests"
import useUnprotectdPage from "../../hooks/useUnprotectdPage"
import Header from "../../components/header/Header"
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

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

                <h1> Junte-se hoje à LabEddit </h1>

                <FormSubmit onSubmit={onSubmitForm}>
                    <TextField label="Nome"
                        name="username"
                        variant="outlined"
                        value={form.username}
                        onChange={onChange}
                        required  
                    />
                    <TextField label="E-mail"
                        type={"email"}
                        name="email"
                        variant="outlined"
                        value={form.email}
                        onChange={onChange}
                        inputProps={{
                            pattern:"[a-zA-Z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$",
                            title:"Email deve possuir um . e no mínimo 2 letras minúsculas em seguida no final"
                        }}
                        required  
                    />        
                    <TextField label="Senha"
                        type={"password"}
                        name="password"
                        variant="outlined"
                        value={form.password}
                        onChange={onChange}
                        inputProps={{
                            pattern:"^.{8,30}$",
                            title:"Senha deve possuir no mínimo 8 e no máximo 30 caracteres"
                        }}
                        required 
                    />

                    <Button type={"submit"} variant="contained"> Cadastrar </Button>
                </FormSubmit>
            </SignupContainer>
        </>
    )
}