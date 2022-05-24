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

export const newPosts = (setUpdate, update, body, headers, endpoint, clear) => {
    axios.post(`${BASE_URL}/${endpoint}`, body, headers)
    .then((res) => {
        setUpdate(!update)
        alert(res.data)
        clear && clear()
    })
    .catch((err) => console.log(err.response))
}

export const attPostVote = (setUpdate, update, body, headers, endpoint) => {
    axios.put(`${BASE_URL}/${endpoint}`, body, headers)
    .then((res) => {
        setUpdate(!update)
        alert(res.data)
    })
    .catch((err) => console.log(err.response))
}

export const delPostVote = (setUpdate, update, headers, endpoint) => {
    axios.delete(`${BASE_URL}/${endpoint}`, headers)
    .then((res) => {
        setUpdate(!update)
        alert(res.data)
    })
    .catch((err) => console.log(err.response))
}

export const postVote = (setUpdate, update, headers, endpoint, userVote, value) => {
    const body = {direction: value}
    
    userVote === null && newPosts(setUpdate, update, body, headers, endpoint)
    userVote !== value && attPostVote(setUpdate, update, body, headers, endpoint)
    userVote === value && delPostVote(setUpdate, update, headers, endpoint)
}