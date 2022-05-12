import useProtectdPage from "../../hooks/useProtectdPage"
import Header from "../../components/header/Header"
import { BASE_URL } from "../../constants/url"
import useRequestData from "../../hooks/useRequestData"
import { useState } from "react"
import { PostPage } from "../PostPage/PostPage"
import { DivPost } from "./style"

export function FeedPage() {

    useProtectdPage()
    const posts = useRequestData([], `${BASE_URL}/posts`)
    const [showModal, setShowModal] = useState(false)
    const [idModal, setIdModal] = useState("")

    const showPostDetails = (id) => {
        setIdModal(id)    
        setShowModal(true)
    }

    const listPosts = posts && posts.map((post) => {
        return (
            <DivPost key={post.id} onClick={() => showPostDetails(post.id)}> {/* onClick botar em outro lugar pq a div terá outros botões */}
                {post.title}
            </DivPost>
        )
    })

    return (
        <>
            <div>
                <Header />

                <h1> Feed Page </h1>

                <input placeholder="Escreva seu post..." />

                <button> Postar </button>

                {listPosts}
            </div>

            {showModal && <PostPage idModal={idModal} setShowModal={setShowModal}/>}
        </>
    )
}