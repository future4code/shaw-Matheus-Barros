import axios from "axios"
import { useEffect, useState } from "react"

export const useGetRequestData = (stateInitial, url) => {
    const [data, setData] = useState(stateInitial)

    useEffect(() => {
        axios.get(url, {headers: {Authorization: localStorage.getItem("token")}})
        .then((res) => {
            console.log('Deu bom: ', res.data)
            setData(res.data)
        })
        .catch((err) => {
            console.log('Deu ruim: ', err.response.data)
        })
    }, [url])

    return data
}