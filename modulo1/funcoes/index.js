/*Exercícios de interpretação de código

1.
a)
10 50
b)
Não apareceria nada. Apenas o erro.

2.
a)
Colocará a string em letra minúscula e em seguida retornar true se houver "cenoura" na string, caso contrário, retorna false.
Ótimo para poder achar a palavra em uma string e também para transformar as strings em minúsculo.
b)
i. true ii. true  iii. true
*/

//Exercícios de escrita de código

//1.
//a)
function apresentacao(){
    console.log("Eu sou Matheus, tenho 21 anos, moro no Espírito Santo e sou estudante.")
}

//b)
const nome = prompt("Digite seu nome:")
let idade = Number(prompt("Digite a sua idade:"))
let cidade = prompt("Digite a sua cidade:")
let profissao = prompt("Digite a sua profissão:")

function apresentar(nome, idade, cidade, profissao){
    let infUsuario = `Eu sou ${nome}, tenho ${idade} anos, moro em ${cidade}, e sou ${profissao}`
    return infUsuario
}

let mostraTela = apresentar(nome, idade, cidade, profissao)
console.log(mostraTela)

//2.
//a)
function somarNumeros(x, y) {
    return x + y
}

let soma = somarNumeros(10, 20)
console.log(soma)

//b) 
function maiorOuIgual(n1, n2) {
    let compara = n1 >= n2
    let inf = "O primeiro número é maior ou igual ao segundo: "
    return inf+compara
}

let resposta = maiorOuIgual(5, 10)
console.log(resposta)

//c) 
function ehPar (n) {
    let divisivel = n % 2 === 0
    let info = "O número é par: "
    return info+divisivel
}

const resultado = ehPar(10)
console.log(resultado)

//d) 
let mensagem = "Olá, tudo bem?"

function maiusculoEtamanho(mensagem) {
    let tamanhoMensagem = mensagem.length
    let maiusculoMensagem = mensagem.toUpperCase()
    console.log(tamanhoMensagem, maiusculoMensagem)
}

maiusculoEtamanho(mensagem)

//3. 
function somaNumeros(x1, x2) {
    let soma = x1 + x2

    console.log(soma)
    return soma
}

function subtracaoNumeros(y1, y2) {
    let subtracao = y1 - y2

    console.log(subtracao)
    return subtracao
}

function multiplicacaoNumeros (z1, z2) {
    let multiplicacao = z1 * z2 

    console.log(multiplicacao)
    return multiplicacao
}

function divisaoNumeros (p1, p2) {
    let divisao = p1 / p2

    console.log(divisao)
    return divisao
}

let numero1 = Number(prompt("Digite um número: "))
let numero2 = Number(prompt("Digite outro número: "))

somaNumeros(numero1, numero2)
subtracaoNumeros(numero1, numero2)
multiplicacaoNumeros(numero1, numero2)
divisaoNumeros(numero1, numero2)