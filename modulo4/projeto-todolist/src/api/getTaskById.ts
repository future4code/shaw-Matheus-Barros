import connection from "../data/connection";
import { app } from "../index";
import { Request, Response } from "express";

app.get("/task/:id", async (req: Request, res: Response) => {
    try {
        if(!req.params.id){
            res.statusCode = 422
            throw new Error("O campo 'id' é obrigatório.")
        }
  
        const result = await connection('ToDoListTask')
        .select( 
            'ToDoListTask.id as taskId', 
            'title', 
            'description',
            'status', 
            'limit_date as limitDate', 
            'creator_user_id as creatorUserId', 
            'nickname as creatorUserNickname'
        )
        .join('ToDoListUser', 'ToDoListUser.id', 'ToDoListTask.creator_user_id')
        .where({ 'ToDoListTask.id': req.params.id })
        
        res.send(result[0])
        
    } catch (error: any) {
        res.send(error.messagem || error.sqlMessage)
    }
})