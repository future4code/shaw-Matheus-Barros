import connection from "../data/connection";
import { app } from "../index";
import { Request, Response } from "express";

app.get("/users/:id", async (req: Request, res: Response) => {
    try {
        if(!req.params.id){
            res.statusCode = 422
            throw new Error("O campo 'id' é obrigatório.")
        }

        const result = await connection("ToDoListUser")
        .select( 'id', 'nickname' )
        .where({ id: req.params.id })
  
        res.status(200).send(result[0])
  
    } catch (error: any) {
        res.send(error.messagem || error.sqlMessage)
    }
})