import styled from "styled-components";

export const MainHomeDiv = styled.div`
    height: 75vh;
    width: 100%;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    background: url(${props => props.Img}) no-repeat top;
    background-size: 40% 70%;
    @media (max-width: 800px)  {
		background-size: 80% 60%;
    }

    button {
        margin: 8em 1em 1em 1em;
        padding: 5px;
        border: none;
        border-radius: 100px;
        background-color: #fc9120;
        color: white;
        height: 20%;
        width: 15%;
        font-size: 2em;
        cursor: pointer;
        :hover{
            background-color: #d97d1c
        }
        @media (max-width: 800px)  {
		    width: 50%;
            margin: 6em 1em 1em 1em;
        }
    }
`