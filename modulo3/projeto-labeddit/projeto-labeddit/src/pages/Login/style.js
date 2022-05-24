import styled from "styled-components"

export const LoginContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    max-height: 100vh;
    gap: 30px;

    hr{
        width: 252px;
    }

    p{
        text-align: center;
        button{
            padding: 0;
            padding-left: 6px;
            font-weight: bold;
        }
    }
`

export const DivLogo = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 30px;

    h1{
        font-weight: 700;
    }
`

export const LogoImg = styled.img`
    height: 120px;
`

export const FormSubmit = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
`