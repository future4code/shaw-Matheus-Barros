import axios from "axios"
import React from "react"
import { BASE_URL } from "../constants/BASE_URL"
import { GetDataDTO } from "../types/GetDataDTO"

export const getData = async (endpoint: string, setData: React.Dispatch<React.SetStateAction<GetDataDTO[]>>, setError: (error: string) => void) => {
    try {
        const data = await axios.get(BASE_URL + endpoint)
        
        setData(data.data.formData)

        console.log(data.data.formData)

        if(data.data.formData.length === 0){
            setError("Data not found.")
        }   

    } catch (error: any) {
        setError(error.response?.data?.error || error.message)
    }
}