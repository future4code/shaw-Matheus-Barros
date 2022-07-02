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
            const checkEmail = await userDB.selectUserByEmail(email)

            if(checkEmail.length > 0){
                res.statusCode = 409
                throw new Error("Email já cadastrado.");
            }

            const newId = new IdGenerator()
            const id = newId.idGenerator()

            const hashManage = new HashManage()
            const hashPassword = await hashManage.generateHash(password)

            const newUser = new UserModel(id, name, email, hashPassword)
            userDB.insertSignup(newUser)
            
            const authenticator = new Authenticator()
            const token = authenticator.generateToken({ id, email })

            res.status(201).send({ acess_token: token })

        } catch (error: any) {
            res.send(error.slqMessage || error.message)
        }
    }

    // Logar na conta
    async postLogin(req: Request, res: Response){
        try {
            const { email, password } = req.body

            if(!email || !password){
                res.statusCode = 422
                throw new Error("Os campos 'email' e 'password' são obrigatórios.");
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
                throw new Error("Senha inválida.");
            }

            const userDB = new UserDB()
            const checkEmail = await userDB.selectUserByEmail(email)

            if(checkEmail.length === 0){
                res.statusCode = 409
                throw new Error("Email não cadastrado.");
            }

            const hashManage = new HashManage()
            const checkPassword: boolean = await hashManage.compare(password, checkEmail[0].password)

            if (!checkPassword) {
                res.statusCode = 409
                throw new Error("Senha inválida.")
            }

            const authenticator = new Authenticator()
            const token = authenticator.generateToken({ id: checkEmail[0].id, email })

            res.status(200).send({ acess_token: token })

        } catch (error: any) {
            res.send(error.slqMessage || error.message)
        }
    }

    // Pegar perfil
    async getProfile(req: Request, res: Response){
        try {
            const token = req.headers.authorization

            if(!token){
                res.statusCode = 401
                throw new Error("É necessário um 'authorization'.");
            }

            if(typeof token !== "string"){
                res.statusCode = 422
                throw new Error("Authorization deve ser do tipo string.");
            }

            const authenticator = new Authenticator()
            const userInfo = authenticator.getTokenData(token)

            if(!userInfo){
                res.statusCode = 401
                throw new Error("Token expirado ou inválido.");
            }

            const userDB = new UserDB()
            const userProfile = await userDB.selectUserByEmail(userInfo.email)

            res.status(200).send({ id: userProfile[0].id, name: userProfile[0].name, email: userProfile[0].email})
            
        } catch (error: any) {
            res.send(error.slqMessage || error.message)
        }
    }

    // Pegar outro perfil
    async getOtherProfile(req: Request, res: Response){
        try {
            const id = req.params.id
            const token = req.headers.authorization

            if(!token){
                res.statusCode = 401
                throw new Error("É necessário um 'authorization'.");
            }

            if(typeof token !== "string"){
                res.statusCode = 422
                throw new Error("Authorization deve ser do tipo string.");
            }

            const authenticator = new Authenticator()
            const userData = authenticator.getTokenData(token)

            if(!userData){
                res.statusCode = 401
                throw new Error("Token expirado ou inválido.");
            }

            const userDB = new UserDB()
            const userProfile = await userDB.selectUserById(id)

            if(userProfile.length === 0){
                res.statusCode = 404
                throw new Error("Usuário não encontrado.");
            }

            res.status(200).send({ id: userProfile[0].id, name: userProfile[0].name, email: userProfile[0].email })
            
        } catch (error: any) {
            res.send(error.slqMessage || error.message)
        }
    }
}