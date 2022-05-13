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

export const newPost = (setUpdate, update, body, headers, clear) => {
    axios.post(`${BASE_URL}/posts`, body, headers)
    .then((res) => {
        setUpdate(!update)
        alert(res.data)
        clear()
    })
    .catch((err) => console.log(err.response))
}

export const newComment = (id, update, setUpdate, body, headers, clear) => {
    axios.post(`${BASE_URL}/posts/${id}/comments`, body, headers)
    .then((res) => {
        setUpdate(!update)
        alert(res.data)
        clear()
    })
    .catch((err) => console.log(err.response))
}

export const newPostVote = (id, update, setUpdate, body, headers) => {
    axios.post(`${BASE_URL}/posts/${id}/votes`, body, headers)
    .then((res) => {
        setUpdate(!update)
        alert(res.data)
    })
    .catch((err) => console.log(err))
}