import { PropsPost } from "../types/PropsPost"
import axios from "axios"
import { BASE_URL } from "../constants/BASE_URL"

export const postData = async (endpoint: string, body: PropsPost, reload: boolean, setReload: React.Dispatch<React.SetStateAction<boolean>>, setError: (error: string) => void) => {
    try {
        await axios.post(BASE_URL + endpoint, body)

        setReload(!reload)
        
    } catch (error: any) {
        setError(error.response?.data?.error || error.message)
    }
}