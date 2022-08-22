import axios from "axios"
import { BASE_URL } from "../constants/BASE_URL"

export const deleteData = async (endpoint: string, reload: boolean, setReload: React.Dispatch<React.SetStateAction<boolean>>, setError: (error: string) => void) => {
    try {
        await axios.delete(BASE_URL + endpoint)

        setReload(!reload)
        
    } catch (error: any) {
        setError(error.response?.data?.error || error.message)
    }
}