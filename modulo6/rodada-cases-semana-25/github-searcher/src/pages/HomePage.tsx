import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { UserInitialize } from "../constants/UserInitialize"
import { getUserName } from "../services/getUserName"
import { UserInfo } from "../types/UserInfo"
import { BsSearch, BsClockHistory, BsDot } from "react-icons/bs"
import { DivFollows, DivInfo, DivSearch, DivUser, HeaderDiv, Name, Nickname, Repos } from "./styled"

export function HomePage() {

    const navigate = useNavigate()
    const [valueInput, setValueInput] = useState("")
    const [data, setData] = useState<UserInfo>(UserInitialize)

    const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setValueInput(event.target.value)
    }

    const onClick = () => {
        const localHistory = window.localStorage.getItem("history")
        const localArray: string[] = localHistory ? JSON.parse(localHistory) : []
        const updateLocalArray = [valueInput, ...localArray] 

        valueInput && window.localStorage.setItem("history", JSON.stringify(updateLocalArray))
        valueInput && getUserName(valueInput, setData)
    }

    return(
        <div>
            <HeaderDiv>
                <DivSearch>
                    <input value={valueInput}
                        onChange={onChange}
                        placeholder={"Buscar usuário..."}
                    />

                    <button onClick={onClick}>
                        <BsSearch />
                    </button>
                </DivSearch>

                <button onClick={() => navigate("/history")}>
                    <BsClockHistory />
                </button>
            </HeaderDiv>

            { 
                data.name 
                &&  
                <DivUser>
                    <a href={ data.html_url } target="_blank" >
                        <img src={data.avatar_url} alt="Foto do usuário" />
                    </a>
                    <DivInfo>
                        <Name href={ data.html_url } target="_blank"> 
                            { data.name } 
                        </Name>
                        <Nickname> { data.login } </Nickname>
                        {
                            data.bio
                            &&
                            <p> { data.bio } </p>
                        }
                        <Repos> Repositórios públicos: { data.public_repos } </Repos>
                        {
                            data.email 
                            &&
                            <p> { data.email } </p>
                        }
                        <DivFollows>
                            <p> { data.followers } seguidores </p>
                            <BsDot />
                            <p> { data.following } seguindo </p>
                        </DivFollows>
                    </DivInfo>
                </DivUser>
            }
        </div>
    )
} 