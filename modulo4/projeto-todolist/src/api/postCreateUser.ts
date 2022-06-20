import connection from "../data/connection";
import { app } from "../index";
import { Request, Response } from "express";

async function createUser(name: string, nickname: string, email: string): Promise<any> {
    await connection('ToDoListUser')
    .insert({
        id: Date.now().toString(),
        name,
        nickname,
        email
    })
}

app.post("/users", async (req: Request, res: Response) => {
    try {
        const { name, nickname, email } = req.body

        if(!name || !nickname || !email){
            res.statusCode = 422
            throw new Error("Os campos 'name', 'nickname' e 'email' são obrigatórios.")
        }

        await createUser(name, nickname, email)

        res.status(201).send("Conta criada com sucesso!")

    } catch (error: any) {
        res.send(error.messagem || error.sqlMessage)
    }
})