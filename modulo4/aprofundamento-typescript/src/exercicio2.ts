// EXERCÍCIO 2 //
    
/*     Observe a função a seguir, escrita em JavaScript:
    
    function obterEstatisticas(numeros) {
    
        const numerosOrdenados = numeros.sort(
            (a, b) => a - b
        )
    
        let soma = 0
    
        for (let num of numeros) {
            soma += num
        }
    
        const estatisticas = {
            maior: numerosOrdenados[numeros.length - 1],
            menor: numerosOrdenados[0],
            media: soma / numeros.length
        }
    
        return estatisticas
    } 
*/
    
/*     a) Quais são as entradas e saídas dessa função? Copie a função para um arquivo.ts e faça a tipagem desses parâmetros.
    R:
*/

    type Result = {
        maior: number,
        menor: number,
        media: number
    }

    function obterEstatisticas(numeros: number[]): Object {
        
        const numerosOrdenados: number[] = numeros.sort(
            (a, b) => a - b
        )

        let soma: number = 0

        for (let num of numeros) {
            soma += num
        }

        const estatisticas: Result = {
            maior: numerosOrdenados[numeros.length - 1],
            menor: numerosOrdenados[0],
            media: soma / numeros.length
        } 

        return estatisticas
    }

/*     b) Quais outras variáveis compõem essa função? Explicite a tipagem de todas elas.
    R:
        As variáveis que compõem na função obterEstatisticas são: numerosOrdenados, soma e estatisticas.
        numerosOrdenados recebe o tipo 'number[]', ou seja, permitindo que a variável receba apenas array de números;
        soma recebe o tipo 'number', ou seja, permitindo que a variável receba apenas números;
        estatisticas recebe o tipo 'Result', ou seja, obrigando que a variável receba 3 parâmetros específicos do tipo number.
*/
    
/*     c) Crie um *type* chamado **amostra** de dados, isto é, um objeto com as propriedades **numeros** e **obterEstatisticas**. Abaixo, temos um exemplo de objeto desse tipo, declarado em JavaScript:
    const amostraDeIdades = {
        numeros: [21, 18, 65, 44, 15, 18],
        obterEstatisticas: (numeros) => {...}
    }

    R:
*/

    type AmostraDeDados = {
        numeros: number[],
        obterEstatisticas: () => {(num: number[]): Result}
    }