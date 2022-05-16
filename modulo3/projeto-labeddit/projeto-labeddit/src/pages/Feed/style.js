import styled from "styled-components"

export const DivPost = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    min-height: 15vh;
    min-width: auto;
    border-radius: 5px; 
    border: 2px solid #E0E0E0;
    background-color: #f5f5f5;
    margin-bottom: 15px;
    padding: 5px;

    p{
        margin: 0;
        color: #6F6F6F;
        font-weight: bold;
        font-size: 14px;
    }
    strong{
        margin-bottom: 15px;
    }
`

export const DivShowComments = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
    word-wrap: break-word;
`

export const DivVote = styled.div`
    display: flex;
    justify-content: space-between;

    div{
        display: flex;
        align-items: center;
        border: none;
        gap: 3px;
    }
    button{
        display: flex;
        align-items: center;
        border: none;
        gap: 5px;
    }
`

export const DivPublication = styled.div`
    margin: 30px 20px;
`

export const DivPosts = styled.div`
    margin: 10px 30px;
`

export const FormPublication = styled.form`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 5px;
    button{
        font-weight: bold;
        padding: 0;
    }
    hr{
        min-width: 100%;
    }
`