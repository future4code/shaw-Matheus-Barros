import { Request, Response } from "express";
import connection from "../data/connection";

export const getUserByPage = async (req: Request, res: Response): Promise<void> => {
    try {
        let page = Number(req.query.page)
        const size = 5
        const offset = (page - 1) * size

        if(page < 1 || isNaN(page)) {
            page = 1
        }

        const result = await connection('aula48_exercicio')
        .select('*')
        .limit(size)
        .offset(offset)

        res.status(200).send(result)
        
    } catch (error: any) {
        res.send(error.message || error.sqlMessage)
    }
}