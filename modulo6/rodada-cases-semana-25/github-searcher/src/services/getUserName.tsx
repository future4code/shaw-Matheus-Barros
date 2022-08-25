import axios from "axios"
import { BASE_URL } from "../constants/BaseURL"
import { UserInfo } from "../types/UserInfo"

export const getUserName = async (username: string, setData: React.Dispatch<React.SetStateAction<UserInfo>>) => {
    const result = await axios.get(BASE_URL + username)
    
    setData(result.data)
}