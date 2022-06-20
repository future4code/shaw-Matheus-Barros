// EXERCÍCIO 1 //
 
/*
    Crie um função que receba uma `string` com o nome e outra `string` com uma data de nascimento (ex.: “24/04/1993”). A função deve separar o dia, o mês e ano e retornar uma `string` no seguinte formato:

    "Olá me chamo {NOME}, nasci no dia {DIA} do mês de {MÊS} do ano de {ANO}"
*/ 

function nameAndBirthday(name: String, birthday: String): String {
    
    const result: string[] = birthday.split("/")
    
    return(`Olá me chamo ${name}, nasci no dia ${result[0]} do mês ${result[1]} do ano ${result[2]}`)
}

console.log(nameAndBirthday("Matheus", "08/06/2000"))