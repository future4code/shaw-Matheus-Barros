import styled from "styled-components"

export const HeaderDiv = styled.div`
    display: flex;
    justify-content: ${props => props.page ? "space-between" : "flex-end"};
    align-items: center;
    height: 8vh;
    max-width: 100vw;
    background-color: #EDEDED;
    padding: 0 10px;

    button{
        font-weight: bold;
        :hover{
            opacity: 75%;
        }
        @media screen and (min-device-width : 800px) and (max-device-width : 1024px) {
            font-size: 16px;
        }
        @media screen and (min-device-width : 1025px) {
            font-size: 20px;
        }
    }
`

export const LogoImg = styled.div`
    position: absolute;
    height: 10vh;
    left: 46vw;
    top: 1vh;
    img{
        height: 60%;
    }
    @media screen and (min-device-width : 800px) and (max-device-width : 1024px) {
        left:48vw;
    }
    @media screen and (min-device-width : 1025px) {
        left:49vw;
    }
`