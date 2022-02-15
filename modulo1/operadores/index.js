/*Exercícios de interpretação de código

1.
const bool1 = true
const bool2 = false
const bool3 = !bool2

let resultado = bool1 && bool2
console.log("a. ", resultado) //a. false

resultado = bool1 && bool2 && bool3 
console.log("b. ", resultado) //b. false

resultado = !resultado && (bool1 || bool2) 
console.log("c. ", resultado) // c. true

console.log("d. ", typeof resultado) d. boolean

2.
let primeiroNumero = prompt("Digite um numero!")
let segundoNumero = prompt("Digite outro numero!")

const soma = primeiroNumero + segundoNumero

console.log(soma) 
//O problema é que haverá a concatenação ao invés da soma das variáveis primeiroNumero e segundoNumero. 

3.
Para haver a soma ao invés da concatenação, precisa colocar Number() antes de prompt.
Desta forma, ao usuário interagir, o que seria String, vai se transformar em Number.
let primeiroNumero = Number(prompt("Digite um numero!"))
let segundoNumero = Number(prompt("Digite outro numero!"))
*/ 

//Exercícios de escrita de código

//1.
//a)
let minhaIdade = Number(prompt("Digite a sua idade:"))
//b)
let idadeAmigo = Number(prompt("Digite a idade do seu/sua melhor amigo/amiga:"))
//c)
console.log("Sua idade é maior do que a do seu/sua melhor amigo/amiga?", (minhaIdade>idadeAmigo))
//d)
console.log("A diferença da sua idade para a do seu/sua melhor amigo/amiga é de:", minhaIdade-idadeAmigo, "anos.")

//2.
//a)
let numeroPar = Number(prompt("Digite um número par:"))
//b)
console.log("O resto da divisão deste número por 2 é:", (numeroPar % 2))
//c)
//Todos os números pares restam 0, pois todo número par é divisível por 2.
//d)
//Sempre retornará 1.

//3.
let idadeAnos = Number(prompt("Digite a sua idade em anos inteiros:"))
//a)
console.log("Sua idade em meses é:", (idadeAnos*12))
//b)
console.log("Sua idade em dias é:", (idadeAnos*365))
//c)
console.log("Sua idade em horas é;", (idadeAnos*8760))

//4.
let primeiroNumero = Number(prompt("Digite um número:"))
let segundoNumero = Number(prompt("Digite outro número:"))

console.log("O primeiro numero é maior que segundo?", (primeiroNumero>segundoNumero))
console.log("O primeiro numero é igual ao segundo?", (primeiroNumero===segundoNumero))
console.log("O primeiro numero é divisível pelo segundo?", ((primeiroNumero%segundoNumero)===0))
console.log("O segundo numero é divisível pelo primeiro?", ((segundoNumero%primeiroNumero)===0))