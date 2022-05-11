import useProtectdPage from "../../hooks/useProtectdPage"
import Header from "../../components/header/Header"
import { BASE_URL } from "../../constants/url"
import { useGetRequestData } from "../../hooks/useRequestData"

export function FeedPage() {
    
    useProtectdPage()
    const posts = useGetRequestData([], `${BASE_URL}/posts`)
    console.log(posts)

    const listPosts = posts && posts.map((post) => {
        return(
            <div key={post.id}>
                {post.title}
            </div>
        )
    })

    return(
        <>
            <Header />

            <h1> Feed Page </h1>

            <input placeholder="Escreva seu post..." />

            <button> Postar </button>

            {listPosts}
        </>
    )
}