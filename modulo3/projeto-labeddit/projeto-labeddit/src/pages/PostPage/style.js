import styled from "styled-components"

export const DivComments = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    background: rgba(0, 0, 0, 0.500);       
    backdrop-filter: blur( 5px );     
    -webkit-backdrop-filter: blur( 13.5px );     
    box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );     
    border: 1px solid rgba( 255, 255, 255, 0.18 );
    position: fixed;
    top: 0;
    height: 100vh;
    width: 100vw;
`

export const ModalComments = styled.div`
    display: flex;
    flex-direction: column;
    align-items: start;
    padding: 10px;
    box-shadow: 0 0 5px 0 black;
    background-color: whitesmoke;
    border-radius: 5px;
    height: 90%;
    width: 80%;

    >button{
        margin-bottom: 15px;
        border: none;
    }
`

export const DivDetailsFeed = styled.div`
    display: flex;
    flex-direction: column;
    gap: 5px;
    min-width: 93%;
    max-width: 93%;
    word-wrap: break-word;
    border: 1px solid grey;
    border-radius: 5px;
    padding: 10px;
    background-color: #e3e1e1;
` 

export const FormComment = styled.form`
    display: flex;
    flex-direction: column;
    margin: 15px 0;
    width: 100%;
`

export const ScrollContainer = styled.div`
    overflow: auto; 
    overflow-y: scroll;   
    height: 48%; 
    width: 100%;
    margin: 20px 0;
`

export const DivDetails = styled.div`
    display: flex;
    flex-direction: column;
    min-width: 93%;
    max-width: 93%;
    border: 1px solid grey;
    border-radius: 3px;
    padding: 8px;
    word-wrap: break-word;
    gap: 10px;
    margin: 10px 0;
    p{
        margin: 0;
        margin-bottom: 5px;
        color: #6F6F6F;
        font-weight: bold;
        font-size: 14px;
    }
`

export const DivVote = styled.div`
    display: flex;
    align-items: center;
    padding-top: 5px;
    button{
        border: none;
        gap: 10px;
    }
`