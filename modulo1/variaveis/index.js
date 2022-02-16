/*
Exercícios de interpretação de código

1) 10 5

2) 10 10 10

3) horasTrabalhadasPorDia salarioPorDia
*/

//Exercícios de escrita de código

//1)
let nome 
let idade

console.log(typeof nome)
console.log(typeof idade)
//Pois não sabemos o tipo da variável.

nome = prompt("Qual é o seu nome?")
idade = prompt ("Qual é a sua idade?")

console.log(typeof nome)
console.log(typeof idade)
//Foram definidas como strings.

console.log("Olá", nome, "você tem", idade, "anos.")

//2
const pergunta1 = "Você nasceu no Brasil?"
const pergunta2 = "Gosta de injustiça?"
const pergunta3 = "Tem ensino médio completo?"
let resposta1 = "Sim"
let resposta2 = "Não"
let resposta3 = "Sim"

console.log(pergunta1, resposta1)
console.log(pergunta2, resposta2)
console.log(pergunta3, resposta3)

//3
let a = 10
let b = 20
let c = a //10

a = b //Variável a agora tem o valor 20.
b = c //Variável b agora tem o valor 10, que foi o valor armazenado na variável c.

console.log("O novo valor de a agora é:", a) //a = 20
console.log("O novo valor de b agora é:", b) //b = 10

//DESAFIO

let numero1 = Number(prompt ("Digite um número qualquer:"))
let numero2 = Number(prompt ("Digite novamente um número qualquer:"))
let soma = numero1 + numero2
let multiplicacao = numero1 * numero2

console.log("A soma dos números é:", soma)
console.log("A multiplicação dos número é:", multiplicacao)