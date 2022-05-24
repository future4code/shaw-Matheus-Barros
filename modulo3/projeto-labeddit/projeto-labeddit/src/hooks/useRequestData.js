import axios from "axios"
import { useEffect, useState } from "react"

const useRequestData = (update, stateInitial, url) => {
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
    }, [update])

    return data
}

export default useRequestData