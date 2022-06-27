Exercício 1
===========

**1.** 

a) R: Acredito que as strings possibilitam mais opções de ID, tornando ela mais eficaz do que apenas números.

<br>

b) R: 
```
import { v4 } from "uuid";

class generateId{
    public generation(): string{
        return v4()
    }
}

export default generateId
```

<br>

Exercício 2
===========

a) R: Começando pela criação da variável **`userTableName`** para guardar o nome da tabela que iremos nos conectar no banco de dados, dessa forma fica mais rápido para podermos alterar o nome da tabela quando houver necessidade em alterar em diversos chamados da mesma tabela. Seguindo da variável **`connection`** para guardar a conexão com o knex. E finalizando com a função **`createUser`** de criação de usuário dentro do nosso banco de dados.

<br>

b) R: 
```
CREATE TABLE User (
	id VARCHAR(255) PRIMARY KEY,
    email VARCHAR(255) UNIQUE NOT NULL,
    password VARCHAR(255) NOT NULL,
    CHECK (LENGTH(password) >= 6)
);
```

<br>

c) R:
```
export class UserDB extends BaseDB {

    createUser = async (id: string, email: string, password: string) => {
        await BaseDB.connection('User')
        .insert({
            id,
            email,
            password,
        })
    };
}
```

<br>

Exercício 3
===========

a) R: A linha **`as string`** diz que aquela propriedade sempre será uma **`string`**. Pois precisamos garantir essa informação, caso contrário ela pode vir **`undefined`**.

<br>

b) R: 
```
export type AuthenticationData = {
    id: string;
}

const expiresIn = "1min"

export const generateToken = (id: AuthenticationData): string => {
    const token = jwt.sign(
        {id: id.id}, process.env.JWT_KEY as string, {expiresIn}
    );

    return token;
}
```

<br>

Exercício 4
===========

a), b), c)
```
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
}
```

<br>

Exercício 5 
===========

a) R:
```
export class UserDB extends BaseDB {

    getUserByEmail = async (email: string): Promise<User | null> => {
        
        const user: User[] = await BaseDB.connection('User')
        .select('*')
        .where({ email })

        if(user.length > 0){
            return {
                id: user[0].id, 
                email: user[0].email, 
                password: user[0].password
            }
        } else {
            return null
        }
    };
}
```

<br>

Exercício 6
===========

a), b)
```
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
```

<br>

Exercício 7
===========

a) R: //

<br>

b) R: 
```
export class Authenticator {

    public getTokenData = (token: string): AuthenticationData | null => {
        try {
            const { id } = jwt.verify(
                token, String(process.env.JWT_KEY)
            ) as AuthenticationData;
        
            return { id };
        
        } catch (error) {       
            return null 
        }
    }
}
```

<br>

Exercício 8
===========

