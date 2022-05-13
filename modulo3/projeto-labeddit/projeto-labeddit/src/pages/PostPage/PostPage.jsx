import useProtectdPage from "../../hooks/useProtectdPage"
import useRequestData from "../../hooks/useRequestData"
import { BASE_URL } from "../../constants/url"
import { DivComments, ModalComments, FormComment, DivDetails, ScrollContainer, DivDetailsFeed } from "./style"
import { newPosts, postVote } from "../../services/requests"
import useForm from "../../hooks/useForm"

export function PostPage(props) {

    useProtectdPage()
    const comments = useRequestData(props.update, [], `${BASE_URL}/posts/${props.dataModal.id}/comments`)
    const { form, onChange, clear } = useForm({body: ""})

    const onSubmitNewComment = (event) => {
        event.preventDefault()

        const token = localStorage.getItem('token')
        const headers = {headers: {Authorization: token}}
        console.log(headers)

        newPosts(props.setUpdate, props.update, form, headers, `posts/${props.dataModal.id}/comments`, clear)
    }

    const commentVote = (endpoint, userVote, value) => {
        
        const token = localStorage.getItem('token')
        const headers = {headers: {Authorization: token}}

        postVote(props.setUpdate, props.update, headers, endpoint, userVote, value)
    }

    const detailsPost = comments && comments.map((comment) => {
        return (
            <DivDetails key={comment.id}>
                {comment.body}
                <button onClick={() => commentVote(`comments/${comment.id}/votes`, comment.userVote, 1)}> Like </button>
                <span>{comment.voteSum ? comment.voteSum : 0}</span>
                <button onClick={() => commentVote(`comments/${comment.id}/votes`, comment.userVote, -1)}> Deslike </button>
            </DivDetails>
        )
    })

    return (
        <DivComments>
            <ModalComments>
                <button onClick={() => props.setShowModal(false)}> X </button>

                <DivDetailsFeed>
                    {props.dataModal.body}
                </DivDetailsFeed>

                <FormComment onSubmit={onSubmitNewComment}>
                    <input placeholder="Escreva um comentário..."
                        name="body"
                        value={form.body}
                        onChange={onChange}
                    />

                    <button type={"submit"}> Comentar </button>
                </FormComment>

                <p> Comentários </p>
                <ScrollContainer>
                    {detailsPost}
                </ScrollContainer>
            </ModalComments>
        </DivComments>
    )
}