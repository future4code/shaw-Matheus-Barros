import { PropsHeader } from "../types/PropsHeader"
import { DivHeader, Form } from "./styled"

export default function Header(props: PropsHeader){
    
    const { form, onChange, onSubmit } = props

    return(
        <DivHeader>
            <Form onSubmit={ onSubmit }>
                <input placeholder="First name"
                    name="firstName"
                    value={form.firstName}
                    type={"text"}
                    onChange={ onChange }
                />
                <input placeholder="Last name"
                    name="lastName"
                    value={form.lastName}
                    type={"text"}
                    onChange={ onChange }
                />
                <input placeholder="Participation"
                    name="participation"
                    value={form.participation}
                    type={"text"}
                    onChange={ onChange }
                    pattern={"^[1-9]$|^[1-9][0-9]$|^(100)$"}
                    title={"Invalid value. Enter a number between 1-100"}
                />

                <button type="submit"> SEND </button>
            </Form>
        </DivHeader>
    )
}
