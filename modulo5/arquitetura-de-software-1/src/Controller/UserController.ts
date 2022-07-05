import { Request, Response } from "express";
import { UserApp } from "../App/UserApp";
import { User, UserLogin } from "../Types/UserTypes";

export class UserController {

    // Exercício 1 - Endpoint de Cadastro de Usuário
    async postSignup(req: Request, res: Response){
        try {
            const { name, email, password, role } = req.body

            const newUser: User = { name, email, password, role }

            const userApp = new UserApp()
            
            const token = await userApp.signup(newUser)

            res.status(201).send({ token })

        } catch (error: any) {
            res.send(error.slqMessage || error.message)
        }
    }

    async postLogin(req: Request, res: Response){
        try {
            const { email, password } = req.body

            const userLogin: UserLogin = { email, password }

            const userApp = new UserApp()

            const token = await userApp.login(userLogin)

            res.status(200).send({ token })

        } catch (error: any) {
            res.send(error.slqMessage || error.message)
        }
    }
}
