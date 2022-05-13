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
    border: 1px solid lightsalmon;
    height: 90%;
    width: 80%;
`

export const FormComment = styled.form`
    margin-top: 10px;
`

export const DivDetails = styled.div`
    height: 10vh;
    width: 80%;
    border: 1px solid black;
    margin: 10px auto;
    border-radius: 30px;
    padding: 10px;
    word-wrap: break-word;
`

export const ScrollContainer = styled.div`
    display:flex;   
    overflow: auto;  
    flex: none;   
    flex-flow: column nowrap;
    overflow-y: scroll;   
    height:80%; 
    width: 100%;
`

export const DivDetailsFeed = styled.div`
    width: 100%;
    word-wrap: break-word;
` 