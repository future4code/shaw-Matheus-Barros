//Exercícios de interpretação de código
/*
1.

a)
Ele testa se o número digitado pelo usuário é divisível por 2.

b)
Qualquer número divisível por 2.

c)
Qualquer número não divisível por 2.

2.

a)
Para ser impresso uma mensagem dizendo o nome e o valor da fruta respectiva mencionada pelo usuário.

b)
O preço da fruta Maçã é R$ 2.25

c)
O preço da fruta Pêra é R$ 5
No caso ele foi para o default pois o código não parou de ser executado já que não tinha o break.

3.

a)
Uma interação com o usuário digitar um número, e por haver o comando Number, 
após digitar o número a variável vai ser do tipo Number.

b)
Caso o número seja 10: Esse número passou no teste
Caso o número seja 10: 

c)
Hávera erro no console.log(mensagem), pois 'mensagem' é uma variável da função (de um escopo local)que não pode ser usada fora.
*/

//Exercícios de escrita de código

//1.

//a)
let idade = prompt("Qual a sua idade?")

//b)
idade = Number(idade)

//c)
if(idade >= 18){
  console.log("Você pode dirigir.")
}else{
  console.log("Você não pode dirigir.")
}

//2.
function msgTurno (turnoAluno){
  turnoAluno = prompt("Digite a letra correspondente ao seu turno, M (matutino), V (vespertino) ou N (noturno):")
  turnoAluno = turnoAluno.toUpperCase()

  if(turnoAluno === "M"){
    console.log("Bom dia!")
  }else if(turnoAluno === "V"){
    console.log("Boa tarde!")
  }else{
    console.log("Boa noite!")
  }
}

//3.
function msgTurno (turnoAluno){
  turnoAluno = prompt("Digite a letra correspondente ao seu turno, M (matutino), V (vespertino) ou N (noturno):")
  turnoAluno = turnoAluno.toUpperCase()

  switch(turnoAluno){
    case "M":
      console.log("Bom dia!")
      break
    case "V":
      console.log("Boa tarde!")
      break
    default:
      console.log("Boa noite!")
      break
  }
}

//4.
let genero = prompt("Qual o gênero de filme?")
genero = genero.toLowerCase()
let ingresso = Number(prompt("Qual o valor do ingresso?"))

if((genero === "fantasia") && (ingresso < 15)){
  console.log("Bom filme!")
}else{
  console.log("Escolha outro filme :(")
}

//DESAFIO

//1.
let genero = prompt("Qual o gênero de filme?")
genero = genero.toLowerCase()
let ingresso = Number(prompt("Qual o valor do ingresso?"))

if((genero === "fantasia") && (ingresso < 15)){
  let lanchinho = prompt("Qual lanchinho você vai comprar?")
  lanchinho = lanchinho.toLowerCase()
  console.log("Bom filme!")
  console.log(`Aproveite o seu ${lanchinho}.`)
}else{
  console.log("Escolha outro filme :(")
}

//2.
//Só depois que percebi que ia precisar fazer várias condições para cada etapa e categoria...
//Infelizmente não deu tempo de continuar o exercício.

function comprarIngresso(compraIngresso){

  compraIngresso = {
    nomeCompleto: prompt("Digite o seu nome completo: "),
    tipoDoJogo: prompt("Digite o tipo de jogo, IN (internacional) ou DO (doméstico):"),
    etapaDoJogo: prompt("Digite a etapa do jogo, SF (semi-final), DT (decisão de terceiro lugar) ou FI (final):"),
    categoria: prompt("Digite a categoria, 1, 2, 3 ou 4:"),
    qntIngressos: Number(prompt("Digite a quantia de ingressos:"))
  }

  compraIngresso.tipoDoJogo = compraIngresso.tipoDoJogo.toUpperCase() 
  compraIngresso.etapaDoJogo = compraIngresso.etapaDoJogo.toUpperCase()

  if(compraIngresso.tipoDoJogo === "DO"){
    console.log(`---Dados da Compra--- 
    Nome do cliente: ${compraIngresso.nomeCompleto}
    Tipo do jogo: ${compraIngresso.tipoDoJogo}
    Etapa do jogo: ${compraIngresso.etapaDoJogo} 
    Categoria: ${compraIngresso.categoria}
    Quantidade de ingressos: ${compraIngresso.qntIngressos} ingressos.

    ---Valores---
    Valor do ingresso: R$${compraIngresso.categoria}
    Valor total: R$${compraIngresso.categoria * compraIngresso.qntIngressos}`)
  }else{
    console.log(`---Dados da Compra--- 
    Nome do cliente: ${compraIngresso.nomeCompleto}
    Tipo do jogo: ${compraIngresso.tipoDoJogo} 
    Etapa do jogo: ${compraIngresso.etapaDoJogo}
    Categoria: ${compraIngresso.categoria}
    Quantidade de ingressos: ${compraIngresso.qntIngressos} ingressos.

    ---Valores---
    Valor do ingresso: U$${compraIngresso.categoria / 4.1}
    Valor total: U$${compraIngresso.categoria / 4.1 * compraIngresso.qntIngressos}`)
  }
}

let matheus 
console.log(comprarIngresso(matheus))