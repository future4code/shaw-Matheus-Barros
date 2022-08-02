import { PropsHeader } from "../types/PropsHeader"

export default function Header(props: PropsHeader){
    
    const { form, onChange, onSubmit } = props

    return(
        <div>
            <form onSubmit={ onSubmit }>
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
                    type={"number"}
                    onChange={ onChange }
                />

                <button type="submit"> SEND </button>
            </form>
        </div>
    )
}
