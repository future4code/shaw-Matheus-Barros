import styled from "styled-components";

export const HeaderDiv = styled.div`
    height: 10vh;
    width: 100%;
    background-color: #fc9120;
    color: white;
    display: flex;
    justify-content: space-between;
    align-items: center;

    h1 {
        margin-left: 10px;
    }

    button {
        margin-right: 10px;
        padding: 5px;
        background-color: white;
        color: orange;
        font-size: 1.2em;
        cursor: pointer;
        :hover{
            text-decoration: underline;
        }
    }
`