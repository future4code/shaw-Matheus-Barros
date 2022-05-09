export const goToLoginPage = (navigate) => {
    navigate("/")
}

export const goToSignUpPage = (navigate) => {
    navigate("/signup")
}

export const goToFeedPage = (navigate) => {
    navigate("/feed")
}

export const goToPostPage = (navigate) => {
    navigate(`/feed/post/${id}`)
}

export const goBack = (navigate) => {
    navigate(-1)
}