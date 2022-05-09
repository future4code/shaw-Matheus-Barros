import { BrowserRouter, Routes, Route } from "react-router-dom"
import { LoginPage } from "../pages/Login/LoginPage"
import { SignUpPage } from "../pages/SignUp/SignUp"
import { FeedPage } from "../pages/Feed/FeedPage"
import { PostPage } from "../pages/PostPage/PostPage"
import { ErroPage } from "../pages/Erro/ErroPage"

function Router() {
    return(
        <BrowserRouter>
            <Routes>
                <Route index element={<LoginPage />} />
                <Route path='/signup' element={<SignUpPage />} />
                <Route path='/feed' element={<FeedPage />} />
                <Route path='/feed/post/:id' element={<PostPage />} />
                <Route path='*' element={<ErroPage />} />
            </Routes>
        </BrowserRouter>
    )
}

export default Router