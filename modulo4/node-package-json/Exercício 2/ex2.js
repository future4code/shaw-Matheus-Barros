// Exercício 2 //

// Crie uma aplicação Node que recebe uma string representando uma operação matemática e dois valores numéricos. O retorno deverá ser o resultado da operação selecionada utilizando os 2 valores fornecidos.

    /*R:*/  
        let n1 = Number(process.argv[3]);
        let n2 = Number(process.argv[4]);
        let operacao = process.argv[2];
        
        switch(operacao){
            case "add":
                console.log(`Resultado: ${n1 + n2}`)
                break;
            case "sub":
                console.log(`Resultado: ${n1 - n2}`)
                break;
            case "mult":
                console.log(`Resultado: ${n1 * n2}`)
                break;
            case "div":
                console.log(`Resultado: ${n1 / n2}`)
                break;
            default:
                console.log("Não foi possível fazer este tipo de operação, informe dois números e tente os seguintes valores: add, sub, mult ou div. Ex.: add 10 25");
        }