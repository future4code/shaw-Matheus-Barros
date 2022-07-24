import styled from "styled-components";
import lottoColors from "../theme/lottoColors"

export const NumberDiv = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100px;
    width: 100px;
    border-radius: 50%;
    font-weight: bold;
    font-size: 27px;
    background-color: white;
    margin-top: 2%;

    @media screen and (max-device-width : 800px){
        font-size: 21px;
        width: 50px;
        height: 50px;
    }
`

export const HomeDiv = styled.div`
    display: flex;
    height: 100vh;
    width: 100vw;
    background-color: ${props => lottoColors[props.color]};

    @media screen and (max-device-width : 800px){
        flex-direction: column;
    }
`

export const LeftDiv = styled.div`
    display: flex;
    justify-content: space-between;
    height: 100vh;
    width: 40vw;

    >img{
        position: absolute;
        right: 60%;
        height: 100%;
    }

    @media screen and (max-device-width : 800px){
        width: 100%;
        height: 55%;
        overflow: hidden;

        >img{
            transform: rotate(90deg);
            top: 4%;
            right: 41%;
            width: 15%;
            height: 100%;
        }
    }
`

export const LottoInfo = styled.div`
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    margin: 80px 0;
    width: 80%;
    color: white;
    padding-left: 10%;

    select{
        height: 45px;
        width: 215px;
        border-radius: 5px;
        border: none;
        padding: 0 10px;
        outline: none;
        font-weight: 500;
    }

    @media screen and (max-device-width : 800px){
        padding-left: 0;
        width: 100%;
        align-items: center;
        margin-top: 30px;
        margin-bottom: 40px;
    }
`

export const LogoDiv = styled.div`
    display: flex;
    align-items: center;

    img{
        height: 30%;
        margin-right: 10px;
    };

    span{
        font-size: 30px;
        font-weight: bold;
    }

    @media screen and (max-device-width : 800px){
        flex-direction: column;
        height: 30%;

        img{
            height: 62px;
            margin-right: 0;
        };
    }
`

export const ContestDiv = styled.div`
    @media screen and (max-device-width : 800px){
        display: flex;
        flex-direction: column;
        align-items: center;
    }
`

export const ContestInfo = styled.p`
    font-weight: bold;
    font-size: 20px;

    @media screen and (max-device-width : 800px){
        font-weight: 400;
        font-size: 20px;    
    }
`

export const RightDiv = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100vh;
    width: 60vw;
    background-color: #EFEFEF;

    @media screen and (max-device-width : 800px){
        width: 100%;
        height: 45%;
    }
`

export const NumberContainer = styled.div`
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 2%;
    width: 80%;
`
