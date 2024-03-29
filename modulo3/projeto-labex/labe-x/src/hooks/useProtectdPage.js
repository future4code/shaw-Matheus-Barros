import { useNavigate } from "react-router-dom"
import { useEffect } from "react"

export const useProtectdPage = () => {

    const navigate = useNavigate()

    useEffect(() => {
        const token = localStorage.getItem('token')

        if(token === null){
            console.log("Não está logado!")
            navigate('/login', {replace:true})
        }
    }, [])
}