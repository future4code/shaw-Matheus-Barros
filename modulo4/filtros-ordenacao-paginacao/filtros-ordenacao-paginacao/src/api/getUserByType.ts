import { Request, Response } from "express";
import connection from "../data/connection";

export const getUserByType = async (req: Request, res: Response): Promise<void> => {
    try {
        const { type } = req.params

        const result = await connection('aula48_exercicio')
        .select('*')
        .where('type', 'like', `%${type}%`)

        if(!type) {
            res.statusCode = 422
            throw new Error("Type is mandatory.")
        }

        if(type !== "CX" && type !== "Operations" && type !== "Teacher") {
            res.statusCode = 404
            throw new Error("Type not found.")
        }

        res.status(200).send(result)
        
    } catch (error: any) {
        res.send(error.message || error.sqlMessage)
    }
}