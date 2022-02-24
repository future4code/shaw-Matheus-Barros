//Exercícios de interpretação de código

/*1.
const filme = {
	nome: "Auto da Compadecida", 
	ano: 2000, 
	elenco: [
		"Matheus Nachtergaele", "Selton Mello", "Denise Fraga", 
		"Virginia Cavendish"
		], 
	transmissoesHoje: [
		{canal: "Telecine", horario: "21h"}, 
		{canal: "Canal Brasil", horario: "19h"}, 
		{canal: "Globo", horario: "14h"}
		]
}

console.log(filme.elenco[0])
console.log(filme.elenco[filme.elenco.length - 1])
console.log(filme.transmissoesHoje[2])


a)
Matheus Nachtergaele
Virginia Cavendish
canal: "Globo", horario: "14h"


2.
const cachorro = {
	nome: "Juca", 
	idade: 3, 
	raca: "SRD"
}

const gato = {...cachorro, nome: "Juba"}

const tartaruga = {...gato, nome: gato.nome.replaceAll("a", "o")}

console.log(cachorro)
console.log(gato)
console.log(tartaruga)

a)
nome: Juca, idade: 3, raca: SRD
nome: Juba, idade: 3, raca: SRD
nome: Jubo, idade: 3, raca: SRD

b)
Ele trás todo o conteúdo daquele objeto dentro de onde está alocando.


3.
function minhaFuncao(objeto, propriedade) {
	return objeto[propriedade]
}

const pessoa = {
  nome: "Caio", 
  idade: 23, 
  backender: false
}

console.log(minhaFuncao(pessoa, "backender"))
console.log(minhaFuncao(pessoa, "altura"))
console.log(pessoa)

a)
false
undefined

b)
O primeiro console imprimiu false pois é o valor armazenado na propriedade backender.
O segundo console deu undefined pois altura não existe.
*/

//Exercícios de escrita de código

//1.
//a)
let usuario = {
    nome: "Matheus",
    apelidos: ["Mat", "Theus", "Theteus"]
}

function apresentarApelidos (objeto){
    console.log(`Eu sou ${objeto.nome}, mas pode me chamar de: ${objeto.apelidos[0]}, ${objeto.apelidos[1]} ou ${objeto.apelidos[2]}.`) 
}

apresentarApelidos(usuario)

//b)
let usuario2 = {
    ...usuario,
    apelidos: ["Mah", "Matths", "Matheuzinho"]
}

apresentarApelidos(usuario2)

//2.
//a)
let usuario3 = {
    nome: "Kaio",
    idade: 23,
    profissao: "Técnico de segurança" 
}

let usuario4 = {
    nome: "Cartan",
    idade: 24,
    profissao: "Engenheiro civil" 
}

//b)
function apresentarProfissao(objeto){
    let listaUsuario = [objeto.nome, objeto.nome.length, objeto.idade, objeto.profissao, objeto.profissao.length]
    return listaUsuario
}

console.log(apresentarProfissao(usuario3))
console.log(apresentarProfissao(usuario4))

//3.
//a)
let carrinho = []

//b)
let banana = {nome: "Banana", disponivel: true}
let morango = {...banana, nome: "Morango"}
let uva = {...morango, nome: "Uva"}

//c)
function botarNaSacola(fruta){
    carrinho.push(fruta)
    return carrinho
}

botarNaSacola(banana)
botarNaSacola(morango)
botarNaSacola(uva)

//d)
console.log(carrinho)