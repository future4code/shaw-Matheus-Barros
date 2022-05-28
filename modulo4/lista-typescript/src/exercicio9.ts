// EXERCÍCIO 9 //

/*
    Uma operação matemática bastante utilizada em probabilidade e estatística é o **fatorial**, representado por um **!** (ponto de exclamação). Ele consiste em realizar a multiplicação de todos os números (a partir de 1) até aquele colocado na operação. Veja os exemplos abaixo:
    
    - `3! = 3*2*1 = 6`
    - `4! = 4*3*2*1 = 24`
    - `5! = 5*4*3*2*1 = 120`
    - `6! = 6*5*4*3*2*1 = 720`
    
    Isso vale para todos os números inteiros não negativos (também chamados de "números naturais"). Dois valores para se tomar cuidado são:  `1! = 1` e `0! = 1` (uma exceção da regra!).
    
    Uma aplicação interessante do fatorial é o cálculo de anagramas de uma palavra. Anagrama é uma outra palavra (não precisa existir em português) com as mesmas letras da anterior em ordem diferentes. Por exemplo, anagramas da palavra `mesa` são: `ames`, `maes`, `meas`, `emsa`, `smea` e muitos outros.
    
    A quantidade de anagramas de uma palavra sem nenhuma letra repetida é o fatorial da quantidade de letras. Para `mesa`, a quantidade é `4! = 24`
    
    Considerando tudo o que foi mencionado, escreva uma função que receba uma `palavra` (sem letras repetidas) e devolva a quantidade de anagramas que ela possui.
*/

function anagram(palavra: string): number {
    
    const splits: string[] = palavra.toLocaleLowerCase().split('')
    let result: number = splits.length
    let count: number = 0

    if(palavra.includes(' ')){
        return undefined
    } else if(palavra === ''){
        return null
    } else if(splits.length === 1){
        return 1
    } else {

        while(count < splits.length){
            let map: string[] = splits.filter((element) => {
                return element === splits[count]
            })
            console.log(map)

            if(map.length !== 1){
                return undefined
            } else {
                count++
            }
        }

        for(let i: number = 1; i < splits.length; i++){
            result = result * i
        }

        return result        
    }
}

//Exemplo com Epaço
console.table(anagram(" ")) //undefined
console.table(anagram("Olá Mund@")) //undefined

//EXemplo Vazio
console.table(anagram("")) //null

//Exemplo com Um
console.table(anagram(".")) // !1 = 1
console.table(anagram("1")) // !1 = 1
console.table(anagram("A")) // !1 = 1

//Exemplo com Dois Diferentes e Iguais
console.table(anagram(".,")) // !2 = 2
console.table(anagram("Oi")) // !2 = 2
console.table(anagram("11")) //undeifned
console.table(anagram("Aa")) //undefined

//Exemplo com Mais de Dois Diferentes e Iguais
console.table(anagram("Olá")) // !3 = 6
console.table(anagram("mundo")) // !5 = 120
console.table(anagram("aaaaa")) //undeifned
console.table(anagram("AAAAA")) //undefined


// ------------------------------------------------------------


function anagramasResumido(palavra: string): number {
    
    //Variável com funcionalidade para dividir cada caractere.
    const palavraDividida: string[] = palavra.split('')
    
    //Variável que irá armazenar a quantia de anagramas possíveis da palavra;
    //Iniciamos a variável com 1 pois é a própria palavra.  
    let anagramas: number = 1

    //Laço de repetição para fazer o fatorial;
    //Iniciamos a variável i com 1 pois 0 não é usado em fatorial. 
    for(let i: number = 1; i < palavraDividida.length; i++){
        anagramas = palavraDividida.length * i
    }
   
    return anagramas
}

console.log(anagramasResumido("")) // !1 = 1
console.log(anagramasResumido(" ")) // !1 = 1
console.log(anagramasResumido("o ")) // !2 = 2
console.log(anagramasResumido("Aa ")) // !3 = 6
console.log(anagramasResumido(" . ")) // !3 = 6