import { useNavigate } from "react-router-dom"
import { goToSignUpPage } from "../../routes/coordinator"
import { LoginContainer, DivLogo, LogoImg, FormSubmit } from "./style"
import logo from "../../assets/logo-labeddit.png"
import useForm from "../../hooks/useForm"
import { login } from "../../services/requests"
import useUnprotectdPage from "../../hooks/useUnprotectdPage"
import TextField from '@mui/material/TextField';
import AccountCircle from '@mui/icons-material/AccountCircle';
import InputAdornment from '@mui/material/InputAdornment';
import KeySharpIcon from '@mui/icons-material/KeySharp';
import Button from '@mui/material/Button';

export function LoginPage() {

    useUnprotectdPage()
    const navigate = useNavigate()
    const {form, onChange} = useForm({email: "", password: ""})

    const onSubmitForm = (event) => {
        event.preventDefault()
        login(form, navigate)
    }

    return(
        <LoginContainer>
            <DivLogo>
                <LogoImg src={logo} alt="logo labeddit" />
                <h1> LabEddit </h1>
            </DivLogo>
            
            <FormSubmit onSubmit={onSubmitForm}>
                <TextField label="E-mail"
                    name="email"
                    type={"email"}
                    value={form.email}
                    onChange={onChange}
                    variant="outlined"
                    required 
                    InputProps={{
                        startAdornment: (
                          <InputAdornment position="start">
                            <AccountCircle />
                          </InputAdornment>
                        )
                    }}
                    inputProps={{
                        pattern:"[a-zA-Z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$",
                        title:"Email deve possuir um . e no mínimo 2 letras minúsculas em seguida no final"
                    }}
                />

                <TextField label="Senha"
                    name="password"
                    type={"password"}
                    value={form.password}
                    onChange={onChange}
                    variant="outlined"
                    sx={{width:"100%"}}
                    required 
                    InputProps={{
                        startAdornment: (
                          <InputAdornment position="start">
                            <KeySharpIcon sx={{
                                color:"white",
                                bgcolor:"gray", 
                                borderRadius:"50%", 
                                fontSize:"18px", 
                                padding: "2px"}}
                            />
                          </InputAdornment>
                        )
                    }}
                    inputProps={{
                        pattern: "^.{8,30}$",
                        title: "Senha deve possuir no mínimo 8 e no máximo 30 caracteres"
                    }}
                />

                <Button type={"submit"} variant="contained"> Entrar </Button>
            </FormSubmit>

            
            <p>
                <hr/>
                Não tem uma conta?  
                <Button onClick={() => goToSignUpPage(navigate)} variant="text"> 
                    Inscreva-se 
                </Button>
            </p>
        </LoginContainer>
    )
}