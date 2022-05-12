import { BASE_URL } from "../../constants/url"
import useProtectdPage from "../../hooks/useProtectdPage"
import useRequestData from "../../hooks/useRequestData"
import { DivDetails } from "./style"
import { useState } from "react"

export function PostPage(props) {

    useProtectdPage()
    const [update, setUpdate] = useState(false)
    const details = useRequestData(update, [], `${BASE_URL}/posts/${props.idModal}/comments`)

    const detailsPost = details && details.map((detail) => {
        return (
            <DivDetails >
                {detail.body}
            </DivDetails>
        )
    })

    return (
        <>
            <div onClick={() => props.setShowModal(false)}> X </div>
            <p> Comentários </p>
            {detailsPost}
        </>
    )
}