import { Request, Response } from "express";
import { UserDB } from "../data/UserDB";
import { UserModel } from "../model/UserModel";
import { Authenticator } from "../services/Authenticator";
import GenerateId from "../services/GenerateId";

export class UserController{

    // Criar usuário
    async postCreateUser(req: Request, res: Response){
        try {
            const { email, password } = req.body

            if(!email){
                res.statusCode = 422
                throw new Error("Email é obrigatório.");
            }

            if(!password){
                res.statusCode = 422
                throw new Error("Senha é obrigatória");
                
            }

            if(typeof email !== "string"){
                res.statusCode = 422
                throw new Error("Email deve ser do tipo string.");
            }

            if(typeof password !== "string"){
                res.statusCode = 422
                throw new Error("Senha deve ser do tipo string.");
            }

            if(!email.includes("@")){
                res.statusCode = 422
                throw new Error("Email inválido.");
            }

            if(password.length < 6){
                res.statusCode = 422
                throw new Error("Senha deve conter no mínimo 6 caracteres.");
            }

            const newId = new GenerateId()
            const id = newId.generation()

            const newUser = new UserModel(id, email, password)

            const userDB = new UserDB()
            await userDB.createUser(newUser)

            const authenticator = new Authenticator()
            const token = authenticator.generateToken({id})

            res.status(201).send({token})

        } catch (error: any) {
            res.send(error.slqMessage || error.message)
        }
    }

    // Buscar informações de usuário a partir do Email
    async postLogin(req: Request, res: Response){
        try {
            const { email, password } = req.body

            if(!email){
                res.statusCode = 422
                throw new Error("Email é obrigatório.");
            }

            if(!password){
                res.statusCode = 422
                throw new Error("Senha é obrigatória");
            }

            if(typeof email !== "string"){
                res.statusCode = 422
                throw new Error("Email deve ser do tipo string.");
            }

            if(typeof password !== "string"){
                res.statusCode = 422
                throw new Error("Senha deve ser do tipo string.");
            }

            if(!email.includes("@")){
                res.statusCode = 422
                throw new Error("Email inválido.");
            }

            const userDB = new UserDB()
            const checkEmail = await userDB.getUserByEmail(email)

            if(!checkEmail){
                res.statusCode = 409
                throw new Error("Email não encontrado.");
            }

            if(password.length < 6){
                res.statusCode = 422
                throw new Error("Senha deve conter no mínimo 6 caracteres.");
            }

            const authenticator = new Authenticator()
            const token = authenticator.generateToken({id: checkEmail.id})

            res.status(200).send({token})

        } catch (error: any) {
            res.send(error.slqMessage || error.message)
        }
    }
}