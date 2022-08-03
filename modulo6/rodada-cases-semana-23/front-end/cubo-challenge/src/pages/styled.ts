import styled from "styled-components";
import { PropsBlock } from "../types/PropsBlock";

export const DivCenter = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 10vh;
    gap: 15px;
    margin: 40px 0 40px 0;
    color: #394b50;


    >h1{
        font-size: 25px;
    }
`

export const MainContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 5px;
    color: #394b50;
`

export const Table = styled.table`
    border-spacing: 0px;
    width: 40%;
    text-align: center;
    font-size: 14px;
    border: 1px solid gray;
    
    td, th {
        border: 1px solid gray;
        padding: 0.5rem 0;
    }
`

export const ColumnIndex = styled.th`
    width: 10%;
`

export const ResetIcon = styled.span`
    cursor: pointer;
    position: relative;
    display: inline-block;

    >span{
        visibility: hidden;
        background-color: #00b8e2;
        color: #fff;
        text-align: center;
        border-radius: 6px 6px 6px 0;
        padding: 5px 0;
        position: absolute;
        z-index: 1;
        bottom: 100%;
        width: 100px;
    };
    &:hover{
        >span{
            visibility: visible;
        }
    };
`

export const ColumnText = styled.th`
    width: 35%;
`

export const ColumnParticipation = styled.th`
    width: 20%;
`

export const GraphicContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 40%;
`

export const DivGraphicSVG = styled.div`
    width: 50%;
`

export const LegendContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
`

export const LegendGraphicSVG = styled.div`
    display: flex;
    align-items: center;
    gap: 15px;
`

export const Block = styled.div`
    width: 25px;
    height: 25px;
    background: ${(props: PropsBlock) => props.color};
    border-radius: 4px;
`

export const LegendText = styled.p`
    color: ${(props: PropsBlock)=> props.color};
    font-weight: bold;
`