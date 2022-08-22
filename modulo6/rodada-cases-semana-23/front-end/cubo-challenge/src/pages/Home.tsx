import { useEffect, useState } from "react"
import { VictoryPie } from "victory"
import { getData } from "../api/getData"
import { postData } from "../api/postData"
import Header from "../components/Header"
import { useForm } from "../hooks/useForm"
import { GetDataDTO } from "../types/GetDataDTO"
import { Block, DivCenter, DivGraphicSVG, GraphicContainer, ColumnIndex, LegendGraphicSVG, LegendContainer, LegendText, MainContainer, ColumnText, ColumnParticipation, Table, ResetIcon } from "./styled"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { GrUpdate } from "react-icons/gr"
import { deleteData } from "../api/deleteData"

export default function Home() {

    const [data, setData] = useState<GetDataDTO[]>([])
    const [randomColor, setRandomColor] = useState<string[]>([])
    const [reloadData, setReloadData] = useState(false)

    const { form, onChange, clearFields } = useForm({
        firstName: "",
        lastName: "",
        participation: ""
    })

    const notify = (error: string) => toast.info(error)

    useEffect(() => {
        getData('/form', setData, notify)
    }, [reloadData])

    useEffect(() => {
        const colors: string[] = data.map(() => {
            const color = Math.random().toString(16).substring(2, 8)

            return `#${color}`
        })

        setRandomColor(colors)
    }, [data])

    const onSubmit = (event: any) => {
        event.preventDefault()

        const body = { ...form, participation: Number(form.participation) }

        postData('/form', body, reloadData, setReloadData, notify)
        clearFields()
    }

    const resetData = () => {
        deleteData('/form', reloadData, setReloadData, notify)
    }

    const dataRow = data.map((form: GetDataDTO, index: number) => {
        return (
            <tbody key={form.id}>
                <tr>
                    <td> {index + 1} </td>
                    <td> {form.firstName} </td>
                    <td> {form.lastName} </td>
                    <td> {form.participation}% </td>
                </tr>
            </tbody>
        )
    })

    const graphicInfo = data.map((data: GetDataDTO) => {
        return { x: ' ', y: data.participation }
    })

    const graphicLegend = data.map((data: GetDataDTO, index: number) => {
        return (
            <LegendGraphicSVG key={index}>
                <Block color={randomColor[index]}></Block>
                <LegendText color={randomColor[index]}>
                    {data.firstName} {data.lastName}
                </LegendText>
            </LegendGraphicSVG>
        )
    })

    return (
        <div>
            <Header form={form} onChange={onChange} onSubmit={onSubmit} />

            <DivCenter>
                <h1> DATA </h1>
                <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
            </DivCenter>

            {
                data.length === 0 ?
                    <></>
                    :
                    <MainContainer>
                        <Table>
                            <thead>
                                <tr>
                                    <ColumnIndex>
                                        <ResetIcon onClick={resetData}> 
                                            <GrUpdate />
                                            <span> Reset data. </span>
                                        </ResetIcon>
                                    </ColumnIndex>
                                    <ColumnText>First Name</ColumnText>
                                    <ColumnText>Last Name</ColumnText>
                                    <ColumnParticipation>Participation</ColumnParticipation>
                                </tr>
                            </thead>
                            {dataRow}
                        </Table>

                        <GraphicContainer>
                            <DivGraphicSVG>
                                <VictoryPie
                                    innerRadius={70}
                                    labelPlacement={"parallel"}
                                    labelRadius={45}
                                    padAngle={2}
                                    data={graphicInfo}
                                    colorScale={randomColor}
                                />
                            </DivGraphicSVG>
                            <LegendContainer>
                                {graphicLegend}
                            </LegendContainer>
                        </GraphicContainer>
                    </MainContainer>
            }
            <ToastContainer
                theme="dark"
                position="bottom-center"
                autoClose={5000}
                hideProgressBar={true}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
            />
        </div>
    )
}
