// EXEMPLOS DE IMPLEMENTAÇÃO ---------------------------------------------------------------

// EXERCÍCIO 0A
function soma(num1, num2) {
  // implemente sua lógica aqui
  return num1 + num2
}

// EXERCÍCIO 0B
function imprimeMensagem() {
  // implemente sua lógica aqui
  const mensagem = prompt('Digite uma mensagem!')

  console.log(mensagem)
}

// EXERCÍCIOS PARA FAZER ------------------------------------------------------------------

// EXERCÍCIO 01
function calculaAreaRetangulo(altura, largura) {
  altura = Number(prompt("Digite a altura do retângulo: "))
  largura = Number(prompt("Digite a largura do retângulo: "))
  let areaRetangulo = largura * altura

  console.log(areaRetangulo)
}

// EXERCÍCIO 02
function imprimeIdade(anoAtual, anoNascimento) {
  anoAtual = Number(prompt("Digite o ano atual: "))
  anoNascimento = Number(prompt("Digite o ano do seu nascimento: "))
  let idade = anoAtual-anoNascimento 

  console.log(idade)
}

// EXERCÍCIO 03
function calculaIMC(peso, altura) {
  let imc = peso / (altura*altura)

  return imc
}

// EXERCÍCIO 04
function imprimeInformacoesUsuario(nome, idade, email) {
  nome = prompt("Digite o seu nome: ")
  idade = Number(prompt("Digite a sua idade: "))
  email = prompt("Digite o seu email: ")
  
  console.log(`Meu nome é ${nome}, tenho ${idade} anos, e o meu email é ${email}.`)
}

// EXERCÍCIO 05
function imprimeTresCoresFavoritas(cor1, cor2, cor3) {
  cor1 = prompt("Digite sua primeria cor favorita: ")
  cor2 = prompt("Digite sua segunda cor favorita: ")
  cor3 = prompt("Digite sua terceira cor favorita: ")
  let coresFavoritas = [cor1, cor2, cor3]
  
  console.log(coresFavoritas)
}

// EXERCÍCIO 06
function retornaStringEmMaiuscula(string) {
  let novaString = string.toUpperCase()
  
  return novaString
}

// EXERCÍCIO 07
function calculaIngressosEspetaculo(custo, valorIngresso) {
  quitarCusto = custo/valorIngresso

  return quitarCusto
}

// EXERCÍCIO 08
function checaStringsMesmoTamanho(string1, string2) {
  let tamanhoIgual = string1.length === string2.length

  return tamanhoIgual
}

// EXERCÍCIO 09
function retornaPrimeiroElemento(array) {
  
  return array[0]
}

// EXERCÍCIO 10
function retornaUltimoElemento(array) {

  return array[array.length-1]
}

// EXERCÍCIO 11
function trocaPrimeiroEUltimo(array) {
  primeiroElemento = array [0]
  array[0] = array[array.length-1]
  array[array.length-1] = primeiroElemento

  return array
}

// EXERCÍCIO 12
function checaIgualdadeDesconsiderandoCase(string1, string2) {
  let s1 = string1.toLowerCase() 
  let s2 = string2.toLowerCase()
  let result = s1 === s2

  return result
}

// EXERCÍCIO 13
function checaRenovacaoRG() {
  let anoAtual = prompt("Digite o ano atual: ")
  const anoNascimento = prompt("Digite o seu ano de nascimento: ")
  const anoRG = prompt("Digite o ano que seu RG foi emitido: ")
  let idade = anoAtual - anoNascimento
  let idadeRG = anoAtual - anoRG

  const idade20 = idade <= 20 && idadeRG >= 5
  const idade50 = idade <= 50 && idadeRG >= 10
  const idade51 = idade > 50 && idadeRG >= 15 

  console.log(idade20 || idade50 || idade51)
}

// EXERCÍCIO 14
function checaAnoBissexto(ano) {
  let multi400 = ano % 400 === 0
  let multi4e100 = (ano % 4 === 0) && (ano % 100 !== 0)
  
  let result = multi400 || multi4e100

  return result
}

// EXERCÍCIO 15
function checaValidadeInscricaoLabenu() {
  let idade = prompt("Você tem mais de 18 anos?") === "sim"
  let em = prompt("Você possui o ensino médio completo?") === "sim"
  let disponibilidade = prompt("Você possui disponibilidade exclusiva durante os horários do curso?") === "sim"

  console.log(idade && em && disponibilidade)
}