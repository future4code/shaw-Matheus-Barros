import useProtectdPage from "../../hooks/useProtectdPage"
import useRequestData from "../../hooks/useRequestData"
import { BASE_URL } from "../../constants/url"
import { useState } from "react"
import { DivComments, FormComment, DivDetails } from "./style"
import { newComment } from "../../services/requests"
import useForm from "../../hooks/useForm"

export function PostPage(props) {

    useProtectdPage()
    const details = useRequestData(props.update, [], `${BASE_URL}/posts/${props.idModal}/comments`) //ctrl H para trocar o nome para comments?
    const { form, onChange, clear } = useForm({body: ""})

    const onSubmitNewComment = (event) => {
        event.preventDefault()

        const token = localStorage.getItem('token')
        const headers = {headers: {Authorization: token}}
        console.log(headers)

        newComment(props.idModal, props.update, props.setUpdate, form, headers, clear)
    }

    const detailsPost = details && details.map((detail) => {
        return (
            <DivDetails key={detail.id}>
                {detail.body}
            </DivDetails>
        )
    })

    return (
        <DivComments>
            <button onClick={() => props.setShowModal(false)}> X </button>

            <FormComment onSubmit={onSubmitNewComment}>
                <input placeholder="Escreva um comentário..."
                    name="body"
                    value={form.body}
                    onChange={onChange}
                />

                <button type={"submit"}> Comentar </button>
            </FormComment>

            <p> Comentários </p>
            {detailsPost}
        </DivComments>
    )
}