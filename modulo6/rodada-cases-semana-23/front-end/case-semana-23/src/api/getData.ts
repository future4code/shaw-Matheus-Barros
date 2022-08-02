import axios from "axios"
import React from "react"
import { BASE_URL } from "../constants/BASE_URL"
import { GetDataDTO } from "../types/GetDataDTO"

export const getData = async (endpoint: string, setData: React.Dispatch<React.SetStateAction<GetDataDTO[]>>) => {
    try {
        const data = await axios.get(BASE_URL + endpoint)
        
        setData(data.data.formData)

    } catch (error: any) {
        console.log(error)
    }
}