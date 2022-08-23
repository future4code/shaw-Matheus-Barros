import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { UserInitialize } from "../constants/UserInitialize"
import { getUserName } from "../services/getUserName"
import { UserInfo } from "../types/UserInfo"
import { RiUserSearchLine } from "react-icons/ri"
import { AiOutlineClear } from "react-icons/ai"
import { DivFollows, DivInfo, DivSearch, DivUser, HeaderDiv, Name, Nickname, Repos } from "./styled"
import { BsDot } from "react-icons/bs"

export function HistoryPage() {

    const navigate = useNavigate()
    const [valueSelect, setValueSelect] = useState("")
    const [selectOptions, setSelectOptions] = useState<string[]>([])
    const [data, setData] = useState<UserInfo>(UserInitialize)

    const onChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setValueSelect(event.target.value)
    }

    const onClick = () => {
        const localHistory = window.localStorage.getItem("history")
        const localArray: string[] = localHistory ? JSON.parse(localHistory) : []
        const updateLocalArray = [valueSelect, ...localArray] 

        valueSelect && window.localStorage.setItem("history", JSON.stringify(updateLocalArray))
        valueSelect && getUserName(valueSelect, setData)
    }

    const clear = () => {
        window.localStorage.removeItem("history")
        setSelectOptions([])
    }

    useEffect(() => {
        const localHistory = window.localStorage.getItem("history")
        const localArray: string[] = localHistory ? JSON.parse(localHistory) : []
        
        setSelectOptions(localArray)
    }, [])

    useEffect(() => {
        valueSelect && onClick()
    }, [valueSelect])

    const options = selectOptions.map((option: string, index: number) => {
        return(
            <option value={option} key={index}>
                { option }
            </option>
        )
    })

    return(
        <div>
            <HeaderDiv>
                <DivSearch>
                    <select value={valueSelect} onChange={onChange}>
                        <option value={""} disabled selected={!selectOptions.length}> Selecionar usuário </option>
                        { options }
                    </select>

                    <button onClick={clear}>
                        <AiOutlineClear />
                    </button>
                </DivSearch>

                <button onClick={() => navigate("/")}>
                    <RiUserSearchLine />
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