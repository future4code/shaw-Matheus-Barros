import { Request, Response } from "express";
import connection from "../data/connection";

export const getUsers = async (req: Request, res: Response): Promise<void> => {
    try {
        const { name, type } = req.query

        let { sort, order } = req.query
        
        let page = Number(req.query.page)
        const size = 5

        let result

        if(sort !== "email" && sort !== "type") {
            sort = "name"
        }

        if(order !== "ASC" && order !== "DESC") {
            order = "DESC"
        }

        if(!page || page < 1 || isNaN(page)) {
            page = 1
        }

        const offset = (page - 1) * size

        if(!name && !type) {
            result = await connection('aula48_exercicio')
            .select('*')
            .orderBy(sort, order)
            .limit(size)
            .offset(offset)

        } else {
            result = await connection('aula48_exercicio')
            .select('*')
            .where("name", "like", `%${name}%`)
            .where('type', 'like', `%${type}%`)
            .orderBy(sort, order)
            .limit(size)
            .offset(offset)
        }

        if (result.length < 1) {
            res.statusCode = 404
            throw new Error("User not found.")
        }

        res.status(200).send(result)
        
    } catch (error: any) {
        res.send(error.message || error.sqlMessage)
    }
}