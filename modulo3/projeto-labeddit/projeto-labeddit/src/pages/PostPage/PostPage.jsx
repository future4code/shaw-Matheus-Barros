import { BASE_URL } from "../../constants/url"
import useProtectdPage from "../../hooks/useProtectdPage"
import useRequestData from "../../hooks/useRequestData"
import { DivDetails } from "./style"

export function PostPage(props) {

    useProtectdPage()
    const details = useRequestData([], `${BASE_URL}/posts/${props.idModal}/comments`)

    const detailsPost = details && details.map((detail) => {
        return (
            <>
                <DivDetails >
                    {detail.body}
                </DivDetails>
            </>
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