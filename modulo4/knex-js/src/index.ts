import app from "./app";
import { Request, Response } from "express";
import connection from "./connection";

// O que é Promise<any> e pq precisamos usar na linha 7 e não precisamos na linha 15 também?

/* Functions */

// Pega atores por nome. 
const getActorByName = async (name: string): Promise<any> => {
    const result = await connection.raw(`
        SELECT * FROM Actor WHERE name LIKE '%${name}%';
    `);

    return result[0];
}

// Pega quantidade de atores de acordo com o gênero.
const getCountActorsByGender = async (gender: string): Promise<any> => {
    const result = await connection.raw(`
        SELECT COUNT(*) as count FROM Actor WHERE gender = "${gender}";
    `);

    console.log(result)

    const count = `There are '${result[0][0].count}' actors of the gender '${gender}'.`;

    return count;
};


//-------------------------------------------------------------


/* EndPoints */ 

// Pega todos atores.
app.get("/actors", async (req: Request, res: Response) => {
    const result = await connection.raw(`
        SELECT * FROM Actor;
    `);

    res.send(result[0]);
})


// Pega atores por nome. 
app.get("/actors/:name", async (req: Request, res: Response) => {
    try {
        const { name } = req.params

        res.send(await getActorByName(name))

    } catch (error: any) {
        console.log(error.message)
        res.status(500).send("Unexpected error")
    }
})

// Pega quantidade de atores de acordo com o gênero.
app.get("/actors/count/:gender", async (req: Request, res: Response) => {
    try {
        const { gender } = req.params

        res.send(await getCountActorsByGender(gender))

    } catch (error: any) {
        console.log(error.message)
        res.status(500).send("Unexpected error")
    }
})