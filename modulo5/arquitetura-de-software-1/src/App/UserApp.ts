import { UserDB } from "../Data/UserDB";
import { UserModel } from "../Model/UserModel";
import { Authenticator } from "../Resource/Authenticator";
import { HashManage } from "../Resource/HashManage";
import IdGenerator from "../Resource/IdGenerator";
import { User, UserLogin } from "../Types/UserTypes";

export class UserApp {

    async signup(user: User) {
        const { name, email, password, role } = user

        // Validações
        if (!name || !email || !password || !role) {
            throw new Error("Os campos 'Name', 'Email', 'Password' e 'Role' são obrigatórios.")
        }
        if(typeof name !== "string" || typeof email !== "string" || typeof password !== "string") {
            throw new Error("Os campos 'Name', 'Email' e 'Password' devem ser do tipo String.")
        }
        if(!email.includes("@")) {
            throw new Error("Email inválido.")
        }
        if(password.length < 6) {
            throw new Error("'Password' deve conter no mínimo 6 caracteres.")
        }
        if(role !== "NORMAL" && role !== "ADMIN") {
            throw new Error("'Role' deve receber apenas 'NORMAL' ou 'ADMIN' como valor.")
        }

        const userDB = new UserDB()
        const checkEmail = await userDB.selectEmail(email)

        if(checkEmail !== null) {
            throw new Error("Email já cadastrado.")
        }

        // Gerando ID
        const newId = new IdGenerator()
        const id: string = newId.idGenerator()

        // Criptografando senha
        const newPassword = new HashManage()
        const hashPassword = await newPassword.generateHash(password)

        // Guardando as infos do novo usuário
        const newUser = new UserModel(id, name, email, hashPassword, role)

        // Inserindo usuário no banco de dados
        await userDB.insertUser(newUser)

        // Gerando Token
        const newToken = new Authenticator()
        const token = newToken.generateToken({ id, role })

        return token
    }

    async login(user: UserLogin) {

        const { email, password } = user

        if(!email){
            throw new Error("Email é obrigatório.");
        }

        if(!password){
            throw new Error("Senha é obrigatória");
        }

        if(typeof email !== "string"){
            throw new Error("Email deve ser do tipo string.");
        }

        if(typeof password !== "string"){
            throw new Error("Senha deve ser do tipo string.");
        }

        if(!email.includes("@")){
            throw new Error("Email inválido.");
        }

        if(password.length < 6){
            throw new Error("Senha inválida.");
        }

        const userDB = new UserDB()
        const checkEmail = await userDB.selectEmail(email)

        if(!checkEmail){
            throw new Error("Email não cadastrado.");
        }

        const newToken = new Authenticator()
        const token = newToken.generateToken({ id: checkEmail.id, role: checkEmail.role })

        return token
    } 
}
