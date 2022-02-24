/*Exercícios de interpretação de código

1.
O código faz com que seja adicionado +1 dentro da variável 'valor' a cada vez que o loop é executado, 
quando 'valor' for igual a 5, o loop se encerra e é impresso no console o conteúdo da variável 'valor'.
Será impresso no console o número 5.

2.
a)
Será impresso no console todo número de 'lista' maior que 18. 
19; 21; 23; 25; 27; 30;

b)
Sim. O 'for...of...' faz exatamente isso, ele passa por cada índice do array.
Basta usar 'for...of...', ele passa por cada índice do array que você colocou, como no exemplo dado.
for(let numero of lista){
}

3.
*; **; ***; ****
*/

//Exercícios de escrita de código

//1.
let bichos = Number(prompt("Digite a quantidade de animais de estimação que você tem: "))
//a)
if(bichos === 0){
    console.log("Que pena! Você pode adotar um pet!")
}

//b)
let listaBichos = []

if(bichos > 0){
    for(let i = 0; i < bichos; i++){
        let nomes = prompt("Digite o nome de cada um dos seus pets, um por um: ")
        listaBichos[i] = nomes
        }
}

//c)
console.log(listaBichos)

//2.
let lista = [0, 1, 2, 3, 4, 5]

//a)
function valoresArray (array){
    for(let i of array){
        console.log(i)
    }
}

//b)
function dividirValores (array){
    for(let i of array){
        console.log(i / 10)
    }
}

//c)
function arrayPar (array){
    let novoArray = []

    for(let i of array){
        if(i % 2 === 0){
            novoArray.push(i)
        }
    }

console.log(novoArray)
}

//d)
function arrayString (array){
    let novoArray = []

    for(let i = 0; i < array.length; i++){
        let frase = `O elemento do índex ${i} é: ${array[i]}.`
        novoArray[i] = frase
    }

    console.log(novoArray)
}

//e)
function maiorEmenor (array){
    let maior = 0
    let menor = 0

    for(let i of array){
        if(i > maior){
            maior = i
        }

        if(i < menor){
            menor = i
        }
    }
console.log(`O maior e menor número são respectivamente: ${maior} e ${menor}.`)
}