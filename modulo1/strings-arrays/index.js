/*Exercícios de interpretação de código

1)Indique os console.log:
let array
console.log('a. ', array) //a. undefined

array = null
console.log('b. ', array) //b. null

array = [3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]
console.log('c. ', array.length) //c. 11

let i = 0
console.log('d. ', array[i]) //d. 3

array[i+1] = 19
console.log('e. ', array) //e. 3, 19, 5, 6, 7, 8, 9, 10, 11, 12, 13

const valor = array[i+6]
console.log('f. ', valor) //f. 9

2)Qual será o valor impresso no console se a entrada do usuário for: "Subi num ônibus em Marrocos"?
const frase = prompt("Digite uma frase")
console.log(frase.toUpperCase().replaceAll("A", "I"), frase.length)
//SUBI NUM ÔNIBUS EM MIRROCOS, 27
*/

//Exercícios de escrita de código

//1)
const nome = prompt("Digite o seu nome:")
let email = prompt("Digite o seu e-mail:")
console.log(`O e-mail ${email} foi cadastrado com sucesso. Seja bem-vinda(o), ${nome}!`)

//2) 
let lista = ["Hambúrguer", "Batata frita", "M&M", "Churrasco", "Kinder ovo"]
//a.
console.log(lista)
//b.
console.log(`Essas são as minhas comidas preferidas: 
${lista[0]}
${lista[1]}
${lista[2]}
${lista[3]}
${lista[4]}`)
//c.
const comidaUsuario = prompt("Digite uma comida favorita sua:")
lista[1] = comidaUsuario
console.log(lista)

//3)
//a.
let testeLista = []
let listaDeTarefas = testeLista
//b.
const p1 = prompt("Digite uma tarefa do dia:")
listaDeTarefas[0] = p1 
const p2 = prompt("Digite uma segunda tarefa do dia:")
listaDeTarefas[1] = p2 
const p3 = prompt("Digite uma terceira tarefa do dia:")
listaDeTarefas[2] = p3
//c.
console.log(testeLista)
//d.
const tarefa = prompt("Digite 1, 2 ou 3 de acordo com a tarefa que já foi realizada:")
//e.
testeLista.splice((tarefa-1), 1)
//f.
console.log(testeLista)