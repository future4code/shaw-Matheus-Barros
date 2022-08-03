export type PropsHeader = {
    form: {
        firstName: string,
        lastName: string,
        participation: string
    },
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void,
    onSubmit: (event: any) => void
}