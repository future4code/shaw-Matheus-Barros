import { useState } from "react"

export const useForm = (initialState: {
        firstName: string,
        lastName: string,
        participation: number
    }) => {

    const [form, setForm] = useState(initialState)

    const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target
        setForm({ ...form, [name]: value })
    }

    const clearFields = () => {
        setForm(initialState)
    }

    return { form, onChange, clearFields }
}