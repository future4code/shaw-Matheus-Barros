// ATENÇÃO!!!
//    -> NÃO COMENTE NENHUMA DAS FUNÇÕES DECLARADAS!!! 
//    -> NÃO MODIFIQUE OS PARÂMETROS DAS FUNÇÕES!!! ()


// EXERCÍCIO 01
function retornaTamanhoArray(array) {
   return array.length
}

// EXERCÍCIO 02
function retornaArrayInvertido(array) {
  return array.reverse()
}

// EXERCÍCIO 03
function retornaArrayOrdenado(array) {
    return array.sort((a, b) => a - b)
}

// EXERCÍCIO 04
function retornaNumerosPares(array) {

    let arrayPares = array.filter((elemento) => {
        if (elemento % 2 === 0){
            return elemento
    }   
  })

  return arrayPares
}

// EXERCÍCIO 05
function retornaNumerosParesElevadosADois(array) {

    arrayParesElevados = []

    for(let i = 0; i <= array.length; i++){
        if(array[i] % 2 === 0){
            arrayParesElevados.push(array[i] * array[i])
        }
    }

    return arrayParesElevados
}

// EXERCÍCIO 06
function retornaMaiorNumero(array) {

    let maiorNumero = 0

    for(let i = 0; i <= array.length; i++){
        if(array[i] > maiorNumero){
            maiorNumero = array[i]
        }
    }

    return maiorNumero
}

// EXERCÍCIO 07
function retornaObjetoEntreDoisNumeros(num1, num2) {
    
    let maiorNum
    let menorNum
    
    if(num1 > num2){
        maiorNum = num1
        menorNum = num2
    }else{
        menorNum = num1
        maiorNum = num2
    }

    let comparaDoisNumeros = {
        maiorNumero: maiorNum,
        maiorDivisivelPorMenor: maiorNum % menorNum === 0,
        diferenca: maiorNum - menorNum
    }

    return comparaDoisNumeros
}

// EXERCÍCIO 08
function retornaNPrimeirosPares(n) {

    let numerosPares = [];
    for (let i = 0; n > numerosPares.length; i++) {
        if (i % 2 == 0){
            numerosPares.push(i);
        }
    }

    return numerosPares;
}

// EXERCÍCIO 09
function classificaTriangulo(ladoA, ladoB, ladoC) {

    if((ladoA === ladoB) && (ladoB === ladoC) && (ladoC === ladoA)){
        return "Equilátero"
    }else if((ladoA !== ladoB) && (ladoB !== ladoC) && (ladoC !== ladoA)){
        return "Escaleno"
    }else{
        return "Isósceles"
    }
}

// EXERCÍCIO 10
function retornaSegundoMaiorESegundoMenor(array) {
    
    array.sort((a, b) => a - b)

    let segundoMaiorMenor = []

    segundoMaiorMenor.push(array[array.length-2])
    segundoMaiorMenor.push(array[1])

    return segundoMaiorMenor
}

// EXERCÍCIO 11
function retornaChamadaDeFilme(filme) {

    let atores = {
        ...filme,
        atores: ['Meryl Streep', ' Anne Hathaway', ' Emily Blunt', ' Stanley Tucci']
    }

    return `Venha assistir ao filme ${filme.nome}, de ${filme.ano}, dirigido por ${filme.diretor} e estrelado por ${atores.atores}.`
}

// EXERCÍCIO 12
function retornaPessoaAnonimizada(pessoa) {

    let objetoNovo = {
        ...pessoa,
        nome: "ANÔNIMO"
    }

    return objetoNovo
}

// EXERCÍCIO 13A
function retornaPessoasAutorizadas(pessoas) {

    let permitidos = pessoas.filter((elemento) => {
        if ((elemento.altura >= 1.5) && (elemento.idade > 14) && (elemento.idade < 60)){
            return elemento
        }
    })

    return permitidos
}

// EXERCÍCIO 13B
function retornaPessoasNaoAutorizadas(pessoas) {

    let naoPermitidos = pessoas.filter((elemento) => {
        if (((elemento.altura >= 1.5) && (elemento.idade > 14) && (elemento.idade < 60)) === false){
            return elemento
        }
    })

    return naoPermitidos 
}

// EXERCÍCIO 14
function retornaContasComSaldoAtualizado(contas){
    
    for(let i = 0; i < contas.length; i++){
        
        for(let x = 0; x < contas[i].compras.length; x++){
            contas[i].saldoTotal = contas[i].saldoTotal - contas[i].compras[x]
        }

        contas[i].compras = []
    }

    return contas
}

// EXERCÍCIO 15A
function retornaArrayOrdenadoAlfabeticamente(consultas) {

    function ordenar (a,b) {
        if(a.nome < b.nome) {
            return -1
        } else {
            return true
        }
    }

   let novoArray = consultas.sort(ordenar)
   return novoArray
}

// EXERCÍCIO 15B
function retornaArrayOrdenadoPorData(consultas) {
   
}