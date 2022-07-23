import { NumberDiv, HomeDiv, LeftDiv, LottoInfo, LogoDiv, ContestInfo, RightDiv, NumberContainer } from "./style";
import shapeDesktop from "../assets/shapeDesktop.png";
import logo from "../assets/logo.png"
import { useEffect, useState } from "react";
import { getLotto } from "../api/getLotto";
import { getContests } from "../api/getContests";
import { getContestById } from "../api/getContestById";
import moment from "moment"

export default function Home(){
    
    const [lottos, setLottos] = useState([])
    const [contests, setContests] = useState([])
    const [currentContest, setCurrentConstest] = useState({})
    const [currentLotto, setCurrentLotto] = useState("MEGA-SENA")

    const handleSelect = (event) => {
        setCurrentLotto(event.target.value)
    }

    useEffect(() => {
        getLotto(setLottos)
        getContests(setContests)
    }, [])

    useEffect(() => {
        contests.length > 0 && getContestById(setCurrentConstest, contests[0].concursoId)
    }, [contests])

    useEffect(() => {
        const findLottoId = lottos.find(lotto => lotto.nome.toUpperCase() === currentLotto)
        const findLottoContest = findLottoId && contests.find(contest => contest.loteriaId === findLottoId.id)
        findLottoContest && getContestById(setCurrentConstest, findLottoContest.concursoId)
    }, [currentLotto])

    const selectOptions = lottos.map((lotto) => {
        return(
            <option key={lotto.id} value={lotto.nome.toUpperCase()}> 
                { lotto.nome.toUpperCase() } 
            </option>
        )
    })

    const contestNumbers = currentContest.numeros && currentContest.numeros.map((number, index) => {
        return(
            <NumberDiv key={index}>
                { number }
            </NumberDiv>
        )
    })

    return(
        <HomeDiv color={currentLotto}>
            <LeftDiv>
                <LottoInfo>
                    <select onChange={handleSelect}>
                        { selectOptions }
                    </select>

                    <LogoDiv>
                        <img src={logo} />
                        <span> { currentLotto } </span>
                    </LogoDiv>

                    <div>
                        <p>CONCURSO</p>
                        <ContestInfo>{ currentContest.id } - { moment(currentContest.data).format("DD/MM/YYYY") }</ContestInfo>
                    </div>
                </LottoInfo>

                <img src={shapeDesktop} />
            </LeftDiv>

            <RightDiv>
                <NumberContainer>
                    { contestNumbers }
                </NumberContainer>
            </RightDiv>
        </HomeDiv>
    )
}