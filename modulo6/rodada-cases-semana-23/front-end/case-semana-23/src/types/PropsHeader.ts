export type PropsHeader = {
    form: {
        firstName: string,
        lastName: string,
        participation: number
    },
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void,
    onSubmit: () => void
}