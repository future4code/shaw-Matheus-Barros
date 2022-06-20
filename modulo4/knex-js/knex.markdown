**Atividade - Knex**
===============================

<br>

### **EXERCÍCIO 1** 

> Utilize os raws para criar funções de Typescript que realizem as operações abaixo. Tente prestar atenção nos tipos das variáveis de entrada e de saída.

<br>

a) *Explique como é a resposta que temos quando usamos o `raw`.* 

R: Ele retorna exatamente o que o banco MySQL retornou. Ou seja, sem especificar as posições (`result[0][0]`) ele traria mais informações do que precisariamos.

<br>

b) *Faça uma função que busque um ator pelo nome.*

R:
```s
const getActorByName = async (name: string): Promise<any> => {
    const result = await connection.raw(`
        SELECT * FROM Actor 
            WHERE name LIKE '%${name}%';
    `)

    return result[0]
}






app.get("/actors/:name", async (req: Request, res: Response) => {
    try {
        const { name } = req.params

        res.send(await getActorByName(name))

    } catch (error: any) {
        console.log(error.message)
        res.status(500).send("Unexpected error")
    }
})
```

<br>

c) *Faça uma função que receba um `gender` e retorne a quantidade de itens na tabela Actor com esse `gender`. Para atrizes, `female` e para atores `male`.*

R:
```
const getCountActorsByGender = async (gender: string): Promise<any> => {
    const result = await connection.raw(`
        SELECT COUNT(*) as count 
            FROM Actor WHERE gender = "${gender}";
    `);

    const count = `There are '${result[0][0].count}' actors of the gender '${gender}'.`;

    return count;
};





app.get("/actors/count/:gender", async (req: Request, res: Response) => {
    try {
        const { gender } = req.params

        res.send(await getCountActorsByGender(gender))

    } catch (error: any) {
        console.log(error.message)
        res.status(500).send("Unexpected error")
    }
})
```