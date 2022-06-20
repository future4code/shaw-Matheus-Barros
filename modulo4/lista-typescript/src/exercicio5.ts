// EXERCÍCIO 5 //

/*
    Considerando o `array` de usuários abaixo, crie uma função que receba este `array` como parâmetro e retorne uma lista com apenas os emails dos usuários “admin”.

    [
        {name: "Rogério", email: "roger@email.com", role: "user"},
        {name: "Ademir", email: "ademir@email.com", role: "admin"},
        {name: "Aline", email: "aline@email.com", role: "user"},
        {name: "Jéssica", email: "jessica@email.com", role: "user"},  
        {name: "Adilson", email: "adilson@email.com", role: "user"},  
        {name: "Carina", email: "carina@email.com", role: "admin"}      
    ] 
*/

type Usuario = {
    name: String,
    email: String,
    role: String
}

const listaUsuarios: Usuario[] = [
    {name: "Rogério", email: "roger@email.com", role: "user"},
    {name: "Ademir", email: "ademir@email.com", role: "admin"},
    {name: "Aline", email: "aline@email.com", role: "user"},
    {name: "Jéssica", email: "jessica@email.com", role: "user"},  
    {name: "Adilson", email: "adilson@email.com", role: "user"},  
    {name: "Carina", email: "carina@email.com", role: "admin"}      
]

function listADM(listaUsuarios: Usuario[]): String[] {
    const filterADM: Usuario[] = listaUsuarios.filter((usuario) => {
        return (usuario.role === "admin")    
    })

    const mapADM: String[] = filterADM.map((user) => {
        return user.email
    })

    return mapADM
}

console.table(listADM(listaUsuarios))