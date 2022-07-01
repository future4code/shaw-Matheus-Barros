import { Request, Response } from "express";
import { UserDB } from "../data/UserDB";
import { UserModel } from "../model/UserModel";
import { Authenticator } from "../services/Authenticator";
import { HashManage } from "../services/HashManage";
import IdGenerator from "../services/IdGenerator";

export class UserController{

    // Cadastro de usuário
    async postSignup(req: Request, res: Response){
        try {
            const { name, email, password } = req.body

            if(!name || !email || !password){
                res.statusCode = 422
                throw new Error("Os campos 'name', 'email', 'password' são obrigatórios.");
            }

            if(typeof name !== "string"){
                res.statusCode = 422
                throw new Error("Nome deve ser do tipo string.");
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

            const userDB = new UserDB()
            const checkEmail = await userDB.checkEmail(email)

            if(checkEmail.length > 0){
                res.statusCode = 409
                throw new Error("Email já cadastrado.");
            }

            const newId = new IdGenerator()
            const id = newId.idGenerator()

            const hashManage = new HashManage()
            const hashPassword = await hashManage.generateHash(password)

            const newUser = new UserModel(id, name, email, hashPassword)
            userDB.signup(newUser)
            
            const authenticator = new Authenticator()
            const token = authenticator.generateToken({ id, email })

            res.status(201).send({ acess_token: token })

        } catch (error: any) {
            res.send(error.slqMessage || error.message)
        }
    }
}