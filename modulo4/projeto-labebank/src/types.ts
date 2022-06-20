export type Transaction = {
    value: number,
    date: Date,
    description: string
}

export type UserAccount = {
    name: string,
    CPF: string,
    dateOfBirth: Date,
    balance: number,
    extracts: Transaction[]
}