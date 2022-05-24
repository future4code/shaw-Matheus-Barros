// Exercício 1 //

/*a) Como fazemos para acessar os parâmetros passados na linha de comando para o Node?
    R: Através do process.argv.*/

/*b) Crie um programa que receba seu nome e sua idade. Após receber estes valores, imprima no console uma mensagem que siga a seguinte estrutura:

 "Olá, (Nome)! Você tem (sua idade) anos."*/  
   
    /*R:*/ 
        const user = process.argv[2];
        let age = Number(process.argv[3]);

        if(user && age){
            console.log(`Olá, ${user}! Você tem ${age} anos.`)
        } else {
            console.log("Algo deu errado, tente novamente, informe seu nome e sua idade.")
        }

/*c) Altere o programa acima para que mostre também a sua idade daqui a sete anos.

 "Olá, (Nome)! Você tem (sua idade) anos. Em sete anos você terá (nova idade)"*/ 

    /*R:*/ 
        const nome = process.argv[2];
        let idade = Number(process.argv[3]);
        let novaIdade = idade + 7;
        
        if(user && age){
            console.log(`Olá, ${nome}! Você tem ${idade} anos. Em sete anos você terá ${novaIdade}.`)
        } else {
            console.log("Algo deu errado, tente novamente, informe seu nome e sua idade.")
        }