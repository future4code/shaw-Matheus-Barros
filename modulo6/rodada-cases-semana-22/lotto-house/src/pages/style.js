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
`

export const HomeDiv = styled.div`
    display: flex;
    height: 100vh;
    width: 100vw;
    background-color: ${props => lottoColors[props.color]};
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
`

export const LogoDiv = styled.div`
    display: flex;
    align-items: center;
    gap: 22px;

    img{
        height: 30%;
    };

    span{
        font-size: 30px;
        font-weight: bold;
    }
`

export const ContestInfo = styled.p`
    font-weight: bold;
    font-size: 20px;
`

export const RightDiv = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100vh;
    width: 60vw;
    background-color: #EFEFEF;
`

export const NumberContainer = styled.div`
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 2%;
    width: 80%;
`
