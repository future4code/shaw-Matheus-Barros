import styled from "styled-components";

export const FooterDiv = styled.div`
    height: 15vh;
    width: 100%;
    background-color: #44535c;
    color: white;
    display: flex;
    /* justify-content: space-evenly; */
    justify-content: space-between;
    align-items: center;

    h2 {
        text-decoration: underline;
        align-self: center;
        margin-left: 10px;
    }

    p {
        margin-left: 10px;
    }

    h4 {
        align-self: flex-end;
        margin: 0 0 10px 80px;
        @media (max-width: 800px) {
            margin: 0;
        }
    }

    @media (max-width: 800px) {
        justify-content: center;
        flex-wrap: wrap;
    }

/* 
    button {
        margin-right: 10px;
        padding: 5px;
        border: none;
        background-color: #fc9120;
        color: white;
    } */
`