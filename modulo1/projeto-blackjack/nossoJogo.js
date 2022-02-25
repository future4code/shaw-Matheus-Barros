console.log("Boas vindas ao jogo de Blackjack!")

let cartaUser1 = comprarCarta()
let cartaUser2 = comprarCarta()
let cartaPC1 = comprarCarta()
let cartaPC2 = comprarCarta()
let somaCartasUser = cartaUser1.valor + cartaUser2.valor
let somaCartasPC = cartaPC1.valor + cartaPC2.valor

if(confirm("Quer iniciar uma nova rodada?")){//caso usuário responda sim (ok)

   console.log(`Usuário - cartas: ${cartaUser1.texto} ${cartaUser2.texto}  - pontuação ${somaCartasUser}`)
   console.log(`Computador - cartas: ${cartaPC1.texto} ${cartaPC2.texto}  - pontuação ${somaCartasPC}`)

   if(somaCartasUser > somaCartasPC){
      console.log("O usuário ganhou!")
   }else if(somaCartasPC > somaCartasUser){
      console.log("O computador ganhou!")
   }else{
      console.log("Empate!")
   }

}else{ //caso usuário responda não (cancel)
   console.log("O jogo acabou")
}