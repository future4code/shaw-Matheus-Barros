import useProtectdPage from "../../hooks/useProtectdPage"
import useRequestData from "../../hooks/useRequestData"
import { BASE_URL } from "../../constants/url"
import { DivComments, ModalComments, FormComment, DivDetails, ScrollContainer, DivDetailsFeed, DivVote } from "./style"
import { newPosts, postVote } from "../../services/requests"
import useForm from "../../hooks/useForm"
import KeyboardReturnIcon from '@mui/icons-material/KeyboardReturn';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ThumbDownAltIcon from '@mui/icons-material/ThumbDownAlt';

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
                <div>
                    <p>Enviado por: {comment.username}</p>
                    {comment.body}
                </div>

                <DivVote>
                    <button onClick={() => commentVote(`comments/${comment.id}/votes`, comment.userVote, 1)}> 
                        <ThumbUpIcon sx={{ color: "#6F6F6F" }}/> 
                    </button>
                    <span>{comment.voteSum ? comment.voteSum : 0}</span>
                    <button onClick={() => commentVote(`comments/${comment.id}/votes`, comment.userVote, -1)}> 
                        <ThumbDownAltIcon sx={{ color: "#6F6F6F" }}/> 
                    </button>
                </DivVote>
            </DivDetails>
        )
    })

    return (
        <DivComments>
            <ModalComments>
                <button onClick={() => props.setShowModal(false)}> 
                    <KeyboardReturnIcon  sx={{ color: "#fc9120" }}/> 
                </button>

                <DivDetailsFeed>
                    <u> Enviado por: {props.dataModal.username} </u>
                    <p> Assunto: <strong>{props.dataModal.title}</strong> </p> 
                    <p> {props.dataModal.body} </p>
                </DivDetailsFeed>

                <FormComment onSubmit={onSubmitNewComment}>
                    <TextField placeholder="Escreva um comentário..."
                        variant="outlined"
                        name="body"
                        multiline
                        maxRows={3}
                        size="small"
                        margin="dense"
                        value={form.body}
                        onChange={onChange}
                    />

                    <Button type={"submit"} variant="contained" size="small"> Comentar </Button>
                </FormComment>

                <ScrollContainer>
                    {detailsPost}
                </ScrollContainer>
            </ModalComments>
        </DivComments>
    )
}