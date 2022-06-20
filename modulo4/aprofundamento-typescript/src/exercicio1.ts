// EXERCÍCIO 1 //
    
//     O Typescript é uma linguagem um pouco mais criteriosa que o Javascript, então vamos conhecer um pouco desses critérios.
    
/*     a) Crie uma variável **minhaString** do tipo `string` e atribua um valor a ela. Tente atribuir um número a esta variável. O que acontece?
    R:
        let minhaString: string = "Minha string";
        minhaString = 1 (Ele dá o aviso que 'minhaString' não pode receber um valor do tipo number já que foi tipada como string).
*/


/*     b) Crie uma variável **meuNumero** do tipo `number` e atribua um valor numérico. Como fazer para que essa variável também aceite strings? Ou seja, como criamos no typescript uma variável que aceite mais de um tipo de valor?
    R:
        let meuNumero: number | string = 1;
        // Para que uma variável no typescript aceite mais de um tipo de entrada deve-se atribuir na tipagem o union type, que usando | faz com que entenda que os valores podem ser number OU string.
*/


/*     c) Agora crie um novo objeto. Este objeto é uma pessoa, e deve possuir três propriedades:

    `nome`, que é uma string;
    `idade`, que é um número;
    `corFavorita`, que é uma string.

    Crie mais três objetos, que também precisam ter apenas os campos definidos acima. Crie um tipo `Pessoa` para garantir que todos os objetos tenham os mesmos campos.

     R:
        let person: {nome: string, idade: number, corFavorita: string} = {
            nome: "Astrodev",
            idade: 30,
            corFavorita: "Laranja"
        }

        type Pessoa = {
            nome: string, 
            idade: number, 
            corFavorita: CoresArcoIris
        }

        let matheus: Pessoa = {
            nome: "Matheus",
            idade: 21,
            corFavorita: "Azul"
        }

        let lis: Pessoa = {
            nome: "Lis",
            idade: 24,
            corFavorita: "Preto"
        }

        let layane: Pessoa = {
            nome: "Layane",
            idade: 26,
            corFavorita: "Verde"
        }
*/

/*     d) Modifique a propriedade `corFavorita` para que apenas seja possível escolher entre as cores do arco-íris. Utilize um `enum` para isso.
    R:
        enum CoresArcoIris {
            VERMELHO = "Vermelho",
            LARANJA = "Laranja",
            AMARELO = "Amarelo",
            VERDE = "Verde",
            AZUL = "Azul",
            AZUL_ESCURO = "Anil",
            VIOLETA = "Violeta"
        }

        type Pessoa = {
            nome: string, 
            idade: number, 
            corFavorita: CoresArcoIris
        }

        let matheus: Pessoa = {
            nome: "Matheus",
            idade: 21,
            corFavorita: CoresArcoIris.AZUL_ESCURO
        }

        let lis: Pessoa = {
            nome: "Lis",
            idade: 24,
            corFavorita: CoresArcoIris.VIOLETA
        }

        let layane: Pessoa = {
            nome: "Layane",
            idade: 26,
            corFavorita: CoresArcoIris.VERDE
        }    
*/

let minhaString: string = "Minha string";
let meuNumero: number | string = 1;

enum CoresArcoIris {
    VERMELHO = "Vermelho",
    LARANJA = "Laranja",
    AMARELO = "Amarelo",
    VERDE = "Verde",
    AZUL = "Azul",
    AZUL_ESCURO = "Anil",
    VIOLETA = "Violeta"
}

type Pessoa = {
    nome: string, 
    idade: number, 
    corFavorita: CoresArcoIris
}

let matheus: Pessoa = {
    nome: "Matheus",
    idade: 21,
    corFavorita: CoresArcoIris.AZUL_ESCURO
}

let lis: Pessoa = {
    nome: "Lis",
    idade: 24,
    corFavorita: CoresArcoIris.VIOLETA
}

let layane: Pessoa = {
    nome: "Layane",
    idade: 26,
    corFavorita: CoresArcoIris.VERDE
}    
