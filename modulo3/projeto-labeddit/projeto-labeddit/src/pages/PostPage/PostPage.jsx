import useProtectdPage from "../../hooks/useProtectdPage"
import useRequestData from "../../hooks/useRequestData"
import { BASE_URL } from "../../constants/url"
import { useState } from "react"
import { DivDetails, DivComments  } from "./style"

export function PostPage(props) {

    useProtectdPage()
    const [update, setUpdate] = useState(false)
    const details = useRequestData(update, [], `${BASE_URL}/posts/${props.idModal}/comments`)

    const detailsPost = details && details.map((detail) => {
        return (
            <DivDetails>
                {detail.body}
            </DivDetails>
        )
    })

    return (
        <DivComments>
            <div onClick={() => props.setShowModal(false)}> X </div>
            <p> Comentários </p>
            {detailsPost}
        </DivComments>
    )
}