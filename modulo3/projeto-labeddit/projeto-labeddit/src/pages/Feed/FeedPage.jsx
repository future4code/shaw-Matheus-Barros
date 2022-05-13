import useProtectdPage from "../../hooks/useProtectdPage"
import Header from "../../components/header/Header"
import { BASE_URL } from "../../constants/url"
import useRequestData from "../../hooks/useRequestData"
import { useState } from "react"
import { PostPage } from "../PostPage/PostPage"
import { DivPost } from "./style"
import useForm from "../../hooks/useForm"
import { newPost, newPostVote } from "../../services/requests"

export function FeedPage() {

    useProtectdPage()
    const { form, onChange, clear } = useForm({title: "", body: ""})
    const [update, setUpdate] = useState(false)
    const posts = useRequestData(update, [], `${BASE_URL}/posts`)
    const [showModal, setShowModal] = useState(false)
    const [idModal, setIdModal] = useState("")

    const onSubmitNewPost = (event) => {
        event.preventDefault()

        const token = localStorage.getItem('token')
        const headers = {headers: {Authorization: token}}

        newPost(setUpdate, update, form, headers, clear)
    }

    const postVote = (event) => {
        event.preventDefault()
        
        const body = {direction: 1}
        const token = localStorage.getItem('token')
        const headers = {headers: {Authorization: token}}

        newPostVote(idModal, update, setUpdate, body, headers)
    }

    const showPostDetails = (id) => {
        setIdModal(id)    
        setShowModal(true)
    }

    const listPosts = posts && posts.map((post) => {
        return (
            <DivPost key={post.id} onClick={() => showPostDetails(post.id)}> {/* onClick botar em outro lugar pq a div terá outros botões */}
                {post.username}
                <br/>
                {post.title}
                <button onClick={postVote}> Like </button>
            </DivPost>
        )
    })
    
    return (
        <>
            <Header />
            <div>
                <h1> Criar publicação </h1>

                <form onSubmit={onSubmitNewPost}>
                    <input placeholder="Título do assunto"
                        name="title"
                        value={form.title}
                        onChange={onChange}
                        required 
                    />
                    <input placeholder="Descrição do assunto..."
                        name="body"
                        value={form.body}
                        onChange={onChange}
                    />

                    <button type={"submit"}> Publicar </button>
                </form>
            </div>
            <div>
                {listPosts}
            </div>

            {showModal && <PostPage 
                idModal={idModal} 
                setShowModal={setShowModal} 
                update={update} 
                setUpdate={setUpdate} 
            />
            }
        </>
    )
}