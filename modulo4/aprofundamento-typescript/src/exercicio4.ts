// EXERCÍCIO 4 //
    
/*    
    Na aula de ontem, vimos que os arquivos escritos em Typescript, com sua extensão `.ts` passam por um processo de conversão de typescript para Javascript para que possam ser lidos e executados. Este processo é chamado de **transpilação**. 
    
    Com a biblioteca `typescript` instalada, temos acesso ao comando `tsc` no terminal. O `tsc` é o comando responsável por fazer a transpilação dos arquivos.
    
    Abaixo, há um exemplo de código escrito em Typescript.
    Crie um arquivo chamado `exercicio-4.ts` , cole o código abaixo e use comentários para responder as questões.
*/ 

/*
    type pokemon = {
        name: string,
        types: string,
        healthPoints: number
    }

    const pokemon1: pokemon = {
        name: "Charmander",
        types: "Fire",
        healthPoints: 28
    }

    const pokemon2: pokemon = {
        name: "Bulbasaur",
        types: "Grass/Poison",
        healthPoints: 31
    }

    const pokemon3: pokemon = {
        name: "Squirtle",
        types: "Water",
        healthPoints: 35
    }
*/

/*    a) Como você faria, já com a extensão instalada, para transpilar(converter) esse arquivo typescript em um arquivo javascript?
    R:
        No meu terminal rodando o seguinte comando 'npm run exercicio4', tendo em mente que teria um objeto script dentro do meu package.json com a seguinte propriedade e valor: "exercicio4": "tsc && node ./build/exercicio4.js",
*/

/*    b) E se este arquivo estivesse dentro de uma pasta chamada src. O processo seria diferente? Se sim, descreva as diferenças.
    R:
        A única diferença é que o valor precisaria mudar, de "tsc && node ./build/exercicio4.js" para "tsc && node ./src/exercicio4.js", para poder dizer onde estaria sendo executado tal comando.
*/

/*    c) Existe alguma maneira de transpilar múltilplos arquivos de uma vez só? Caso conheça, explique como fazer.
    R:
        Basta informar os demais arquivos os separando com espaço estando na mesma pasta dos arquivos, 'tsc arquivo1.ts arquivo2.ts arquivo3.ts'.
*/  

type pokemon = {
    name: string,
    types: string,
    healthPoints: number
}

const pokemon1: pokemon = {
    name: "Charmander",
    types: "Fire",
    healthPoints: 28
}

const pokemon2: pokemon = {
    name: "Bulbasaur",
    types: "Grass/Poison",
    healthPoints: 31
}

const pokemon3: pokemon = {
    name: "Squirtle",
    types: "Water",
    healthPoints: 35
}