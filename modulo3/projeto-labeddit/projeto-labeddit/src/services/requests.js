import axios from "axios"
import { BASE_URL } from "../constants/url"
import { goToFeedPage } from "../routes/coordinator"

export const login = (body, navigate) => {
    axios.post(`${BASE_URL}/users/login`, body)
    .then((res) => {
        localStorage.setItem("token", res.data.token)
        alert("Logado com sucesso!")
        goToFeedPage(navigate)
    })
    .catch((err) => {
        alert(err.response.data)
    })
}

export const signup = (body, navigate) => {
    axios.post(`${BASE_URL}/users/signup`, body)
    .then((res) => {
        localStorage.setItem("token", res.data.token)
        alert("Cadastro feito com sucesso!")
        goToFeedPage(navigate)
    })
    .catch((err) => {
        alert(err.response.data)
    })
}