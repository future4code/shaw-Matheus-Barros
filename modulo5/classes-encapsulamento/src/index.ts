import { app } from "./app";

// Exercício 1.

// a) Para certas ações serem executadas ao iniciar o uso da classe. Com a palavra-chave this.

// b) & parte da 2.

class Transaction {
    private date: string
    private value: number
    private description: string

    constructor(date: string, value: number, description: string) {
        this.date = date;
        this.value = value;
        this.description = description
    }

    public getDate() {
        return this.date
    }

    public getValue() {
        return this.value
    }

    public getDescription() {
        return this.description
    }

}

class UserAccount {
    private cpf: string;
    private name: string;
    private age: number;
    private balance: number = 0;
    private transactions: Transaction[] = [];

    constructor(cpf: string, name: string, age: number) {
        console.log("Chamando o construtor da classe UserAccount")
        this.cpf = cpf;
        this.name = name;
        this.age = age;
    }

    public getCpf() {
        return this.cpf
    }

    public getName() {
        return this.name
    }

    public getAge() {
        return this.age
    }

    public getBalance() {
        return this.balance
    }

    public getTransactions() {
        return this.transactions
    }

    public setTransaction(newTransaction: Transaction): void {
        this.transactions = [...this.transactions, newTransaction]
        console.log("Transação registrada.")
    }
    
} 

const user1 = new UserAccount("111.111.111-11", "Matheus", 20)
const user2 = new UserAccount("222.222.222-22", "Lay", 30)

// R: Foi impreso a frase "Chamando o construtor da classe UserAccount" 1 vez.

// c) Com Getters e Setters.

// Exercício 2.

const transactionUser1 = new Transaction("30/06/2022", 1000, "Pagar boleto.")
const transactionUser2 = new Transaction("01/12/2022", 1, "Comprar bala.")

user1.setTransaction(transactionUser1)
user2.setTransaction(transactionUser2)

console.log(user1.getTransactions())
console.log(user2.getTransactions())

// Exercício 3.

class Bank {
    private accounts: UserAccount[];

    constructor(accounts: UserAccount[]) {
        this.accounts = accounts;
    }

    public getAccounts() {
        return this.accounts
    }

    public setAccounts(newAccount: UserAccount) {
        this.accounts = [...this.accounts, newAccount]
    }

}

const accounts = [user1]
const accountsBank = new Bank(accounts)
accountsBank.setAccounts(user2)
console.log(accountsBank.getAccounts())