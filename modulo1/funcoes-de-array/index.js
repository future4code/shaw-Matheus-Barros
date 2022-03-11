/*Exercícios de interpretação de código

1.
  a)
  Todo o conteúdo de cada índice, além de mostrar qual é o índice do elemento, 
  além de repetir o processo 3 vezes, ou seja, imprimir 3 arrays iguais.
  
2.
  a)
  Os nomes de cada elemento(objeto) dentro de um array. Amanda Rangel, Laís Petra, Letícia Chijo.

3.
  a)
  Os elementos que tiverem apelidos que forem diferentes de Chijo dentro de um array.

*/

//Exercícios de escrita de código

//1.
const pets = [
    { nome: "Lupin", raca: "Salsicha"},
    { nome: "Polly", raca: "Lhasa Apso"},
    { nome: "Madame", raca: "Poodle"},
    { nome: "Quentinho", raca: "Salsicha"},
    { nome: "Fluffy", raca: "Poodle"},
    { nome: "Caramelo", raca: "Vira-lata"},
]

//a)
let nomesPets = pets.map((elemento) => elemento.nome)

//b)
let petsSalsicha = pets.filter((elemento) => elemento.raca === "Salsicha")

//c)
let poodleUser = pets.filter((elemento) => elemento.raca === "Poodle").map((elemento) => {
    return `Você ganhou um cupom de desconto de 10% para tosar o/a ${elemento.nome}!`
})

//2.
const produtos = [
    { nome: "Alface Lavada", categoria: "Hortifruti", preco: 2.5 },
    { nome: "Guaraná 2l", categoria: "Bebidas", preco: 7.8 },
    { nome: "Veja Multiuso", categoria: "Limpeza", preco: 12.6 },
    { nome: "Dúzia de Banana", categoria: "Hortifruti", preco: 5.7 },
    { nome: "Leite", categoria: "Bebidas", preco: 2.99 },
    { nome: "Cândida", categoria: "Limpeza", preco: 3.30 },
    { nome: "Detergente Ypê", categoria: "Limpeza", preco: 2.2 },
    { nome: "Vinho Tinto", categoria: "Bebidas", preco: 55 },
    { nome: "Berinjela kg", categoria: "Hortifruti", preco: 8.99 },
    { nome: "Sabão em Pó Ypê", categoria: "Limpeza", preco: 10.80 }
]

//a)
let nomesProdutos = produtos.map((elemento) => elemento.nome)

//b)
let descontoProdutos = produtos.map((elemento) => {
    return{
       nome: elemento.nome,
       preco: elemento.preco * 0.95
    }
})

//c)
let bebidas = produtos.filter((elemento) => elemento.categoria === "Bebidas")

//d)
let arrayYpe = produtos.filter((elemento) => elemento.nome.includes("Ypê"))

//e)
let fraseYpe = produtos.filter((elemento) => elemento.nome.includes("Ypê")).map((elemento) => {
    return `Compre ${elemento.nome} por ${elemento.preco}`
})