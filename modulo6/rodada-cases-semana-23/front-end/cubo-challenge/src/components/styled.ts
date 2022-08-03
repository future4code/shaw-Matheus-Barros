import styled from "styled-components";

export const DivHeader = styled.div`
    display: flex;
    height: 18vh;
    background-color: #00b8e2;
`

export const Form = styled.form`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;
    width: 100vw;

    >input{
        width: 250px;
        padding: 12px 5px 12px 12px;
        outline: none;
        border: none;
        border-radius: 2px;
    }

    >button{
        border: 1px solid white;
        border-radius: 2px;
        width: 110px;
        height: 40px;
        background-color: #00b8e2;
        color: white;
        font-weight: bold;
        cursor: pointer;
        :hover{
            background-color: #02a2c7;
            :active{
                background-color: #02819e;
            }
        }
    }
`