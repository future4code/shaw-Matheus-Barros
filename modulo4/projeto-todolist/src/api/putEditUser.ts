import connection from "../data/connection";
import { app } from "../index";
import { Request, Response } from "express";

app.put("/user/edit/:id", async (req: Request, res: Response) => {
    try {
        if(!req.body.name || !req.body.nickname){
            res.statusCode = 422
            throw new Error("O campo 'name' e 'nickname' são obrigatórios.")
        }

        await connection('ToDoListUser')
        .update({
            name: req.body.name,
            nickname: req.body.nickname
        })
        .where({ id: req.params.id })

        res.status(200).send("Usuário editado com sucesso!")
  
    } catch (error: any) {
        res.send(error.messagem || error.sqlMessage)
    }
})