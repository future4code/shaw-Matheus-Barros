import { useEffect, useState } from "react"
import { VictoryLabel, VictoryPie } from "victory"
import { getData } from "../api/getData"
import Header from "../components/Header"
import { useForm } from "../hooks/useForm"
import { GetDataDTO } from "../types/GetDataDTO"

export default function Home() {

    const [data, setData] = useState<GetDataDTO[]>([])

    useEffect(() => {
        getData("/form", setData)
    }, [])

    const { form, onChange } = useForm({
        firstName: "",
        lastName: "",
        participation: 0
    })

    const onSubmit = () => {

    }

    const dataRow = data.map((form: GetDataDTO, index: number) => {
        return (
            <tr key={form.id}>
                <td> {index + 1} </td>
                <td> {form.firstName} </td>
                <td> {form.lastName} </td>
                <td> {form.participation} </td>
            </tr>
        )
    })

    return (
        <div>
            <Header form={form} onChange={onChange} onSubmit={onSubmit} />

            <div>
                <table>
                    <tr>
                        <th></th>
                        <th> First Name </th>
                        <th> Last Name </th>
                        <th> Participation </th>
                    </tr>
                    {dataRow}
                </table>

                
                <VictoryPie
                    height={180}
                    innerRadius={20}
                    labelPlacement={"parallel"}
                    labelRadius={45}
                    padAngle={2}
                    data={[
                        { x: "Matheus", y: 33 },
                        { x: "Mat", y: 30 },
                        { x: "Mmb", y: 17 },
                        { x: "Matths", y: 20 }
                    ]}
                    style={{ labels: { fill: "black", fontSize: 5, fontWeight: "bold" } }}
                />
            </div>
        </div>
    )
}
