import { Request, Response } from "express";
import connection from "../data/connection";

export const getUserByName = async (req: Request, res: Response): Promise<void> => {
    try {
        const name = req.query.name

        const result = await connection('aula48_exercicio')
        .select('*')
        .where("name", "like", `%${name}%`)

        if (result.length < 1) {
            res.statusCode = 404
            throw new Error("User not found.")
        }

        res.status(200).send(result)
        
    } catch (error: any) {
        res.send(error.message || error.sqlMessage)
    }
}