import styled from "styled-components"

export const HeaderDiv = styled.div`
    display: flex;
    justify-content: ${props => props.page ? "space-between" : "flex-end"};
    align-items: center;
    height: 8vh;
    max-width: 100vw;
    border: 1px solid black;
    padding: 0 5px;
`

export const LogoImg = styled.div`
    position: absolute;
    height: 10vh; //10% está entendendo como 100% de HeaderDiv
    left: 44vw;
    top: 1vh;
    img{
        height: 60%;
    }
`

export const Button = styled.button`
    :hover{
        opacity: 85%;
    }
`