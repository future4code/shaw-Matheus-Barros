import { Request, Response } from "express";
import connection from "../data/connection";

export const getUserByOrdenation = async (req: Request, res: Response): Promise<void> => {
    try {
        let { sort, order } = req.query

        if(sort !== "name" && sort !== "type") {
            sort = "email"
        }

        if(order !== "ASC" && order !== "DESC") {
            order = "ASC"
        }

        const result = await connection('aula48_exercicio')
        .select('*')
        .orderBy(sort, order)

        res.status(200).send(result)
        
    } catch (error: any) {
        res.send(error.message || error.sqlMessage)
    }
}