import useProtectdPage from "../../hooks/useProtectdPage"
import Header from "../../components/header/Header"
import { BASE_URL } from "../../constants/url"
import useRequestData from "../../hooks/useRequestData"
import { useState } from "react"
import { PostPage } from "../PostPage/PostPage"
import { DivPost, DivPublication, DivPosts, FormPublication, DivShowComments, DivVote } from "./style"
import useForm from "../../hooks/useForm"
import { newPosts, postVote } from "../../services/requests"
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import ChatIcon from '@mui/icons-material/Chat';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ThumbDownAltIcon from '@mui/icons-material/ThumbDownAlt';

export function FeedPage() {

    useProtectdPage()
    const { form, onChange, clear } = useForm({ title: "", body: "" })
    const [update, setUpdate] = useState(false)
    const posts = useRequestData(update, [], `${BASE_URL}/posts`)
    const [showModal, setShowModal] = useState(false)
    const [dataModal, setDataModal] = useState("")

    const onSubmitNewPost = (event) => {
        event.preventDefault()

        const token = localStorage.getItem('token')
        const headers = { headers: { Authorization: token } }

        newPosts(setUpdate, update, form, headers, "posts", clear)
    }

    const feedVote = (endpoint, userVote, value) => {

        const token = localStorage.getItem('token')
        const headers = { headers: { Authorization: token } }

        postVote(setUpdate, update, headers, endpoint, userVote, value)
    }

    const showPostDetails = (post) => {
        setDataModal(post)
        setShowModal(true)
    }

    const listPosts = posts && posts.map((post) => {
        return (
            <DivPost key={post.id}>
                <DivShowComments onClick={() => showPostDetails(post)}>
                    <p> Enviado por: {post.username} </p>
                    <strong>{post.title}</strong>
                </DivShowComments>
                <DivVote>
                    <div>
                        <button onClick={() => feedVote(`posts/${post.id}/votes`, post.userVote, 1)}> 
                            <ThumbUpIcon sx={{ color: "#6F6F6F" }}/> 
                        </button>
                        <span>{post.voteSum ? post.voteSum : 0}</span>
                        <button onClick={() => feedVote(`posts/${post.id}/votes`, post.userVote, -1)}> 
                            <ThumbDownAltIcon sx={{ color: "#6F6F6F" }}/> 
                        </button>
                    </div>
                    <button onClick={() => showPostDetails(post)}> 
                        <ChatIcon sx={{ color: "#3b3a3a" }}/> {post.commentCount ? post.commentCount : 0}
                    </button>
                </DivVote>
            </DivPost>
        )
    })

    return (
        <>
            <Header />

            <DivPublication>

                <FormPublication onSubmit={onSubmitNewPost}>
                    <TextField placeholder="Título do assunto"
                        variant="outlined"
                        name="title"
                        fullWidth
                        value={form.title}
                        onChange={onChange}
                        required
                        style={{
                            backgroundColor: "#EDEDED"
                        }}
                    />
                    <TextField placeholder="Descrição do assunto..."
                        variant="outlined"
                        name="body"
                        multiline
                        rows={3}
                        fullWidth
                        value={form.body}
                        onChange={onChange}
                        required
                        style={{
                            backgroundColor: "#EDEDED"
                        }}
                    />

                    <Button type={"submit"} variant="text"> Publicar </Button>
                    <hr/>
                </FormPublication>
            </DivPublication>

            <DivPosts>
                {listPosts}
            </DivPosts>

            {showModal && <PostPage
                dataModal={dataModal}
                setShowModal={setShowModal}
                update={update}
                setUpdate={setUpdate}
            />
            }
        </>
    )
}