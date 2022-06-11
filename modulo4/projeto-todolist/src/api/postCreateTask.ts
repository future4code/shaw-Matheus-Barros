import connection from "../data/connection";
import { app } from "../index";
import { Request, Response } from "express";

app.post("/task", async (req: Request, res: Response) => {
    try {
        if(!req.body.title || !req.body.description || !req.body.limit_date || !req.body.creator_user_id){
            res.statusCode = 422
            throw new Error("Os campos 'title', 'description', 'limit_date', 'creator_user_id' são obrigatórios.");
        }
  
        await connection('ToDoListTask')
        .insert({
            id: Date.now().toString(),
            title: req.body.title,
            description: req.body.description,
            limit_date: req.body.limit_date.split('/').reverse().join("-"),
            creator_user_id: req.body.creator_user_id
        })
            
        res.status(201).send("Tarefa criada com sucesso!")
  
    } catch (error: any) {
        res.send(error.messagem || error.sqlMessage)
    }
})