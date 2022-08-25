import styled from "styled-components"

export const HeaderDiv = styled.div`
    height: 15vh;
    background-color: #161b22;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0px 35px;

    input{
        width: 250px;
        padding: 12px 5px 12px 12px;
        outline: none;
        border: none;
        border-radius: 2px;
    }

    select{
        width: 250px;
        padding: 11px;
        outline: none;
        border: none;
        border-radius: 2px;
    }

    button{
        display: flex;
        align-items: center;
        justify-content: center;
        border: 1px solid white;
        border-radius: 2px;
        padding: 10px;
        border-radius: 50%;
        background-color: #161b22;
        color: white;
        font-weight: bold;
        font-size: 20px;
        cursor: pointer;
        :hover{
            background-color: #26364bf6;
        }
    }
`

export const DivSearch = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
`

export const DivUser = styled.div`
    height: 85vh;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0 2rem;
    a{
        width: 40%;
        display: flex;
        align-items: center;
        img{
            border-radius: 50%;
            width: 80%;
        }
    }
`

export const DivInfo = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 90%;
    width: 60%;
    border: 1px solid #bda2c63d;
    border-radius: 5px;
    padding: 20px;
    color: whitesmoke;
    position: relative;
`

export const Name = styled.a`
    font-size: 2rem;
    display: flex;
    align-items: center;
    justify-content: center;
    text-decoration: none;
    color: whitesmoke;
`

export const Nickname = styled.p`
    font-size: 16px;
    color: gray;
    padding-bottom: 40px;
`

export const Repos = styled.p`
    padding: 20px 0;
`

export const DivFollows = styled.div`
    display: flex;
    align-items: center;
    position: absolute;
    bottom: 20px;
    right: 20px;
    gap: 5px;
`