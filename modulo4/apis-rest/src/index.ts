import express, { Request, Response } from "express";
import cors from "cors";
import { AddressInfo } from "net";
import { users } from "./data";

const app = express();

app.use(express.json());
app.use(cors());

const server = app.listen(process.env.PORT || 3003, () => {
  if (server) {
    const address = server.address() as AddressInfo;
    console.log(`Server is running in http://localhost:${address.port}`);
  } else {
    console.error(`Failure upon starting server.`);
  }
});

//--------------------------------------------------------------------------

/* 
    1)

    a. GET para buscar os usuários.
    b. /users para deixar claro o objetivo da requisição, pegar usuarios (GET, /users).
*/

/* 
    2)

    a. Usando Query parameters para armazenar o tipo de usuário desejado, e caso type não seja passado a requisição retorna a lista inteira de usuários.
    b. Com validação pra saber se type passado for diferente de "ADMIN" e "NORMAL".
*/

/* 
    3)

    a. Query parameters como o próprio nome já diz, para fazer uma busca.
    b. OK.
*/

app.get("/users", (req: Request, res: Response) => {          
    let errorCode: number = 400;
    
    try {
        const type: string = req.query.type as string;
        const search: string = req.query.search as string;
        const filterTypeUsers = users.filter(user => user.type === type);
        const filterNameUsers = users.filter(user => user.name === search);
        const filterTypeNameUsers = users.filter(user => user.name === search && user.type === type);

        if(!type && !search) {
            res.status(200).send(users);
        } 

        if(type && type !== "ADMIN" && type !== "NORMAL") {
            errorCode = 404;
            throw new Error(`Type '${type}' does not exist, only 'NORMAL' or 'ADMIN'.`);
        } 
        if(type && !search) {
            res.status(200).send(filterTypeUsers);
        }

        if(search && filterNameUsers.length === 0) {
            errorCode = 404;
            throw new Error(`The name '${search}' was not found.`);
        }
        if(!type && search) {
            res.status(200).send(filterNameUsers);
        }

        if(filterTypeNameUsers.length === 0) {
            errorCode = 404;
            throw new Error("User does not exist.");
        }
        res.status(200).send(filterTypeNameUsers)

    } catch (error: any) {
        res.status(errorCode).send({message: error.message});
    }
})

/*
    4)

    a. Nada...
    b. Sim. Pois o PUT normalmente será usado para atualizar algo, diferente do POST que é pra criar, logo, como estamos mexendo em uma coisa já existente, no caso uma lista de usuários, o PUT é completamente aceitável.
*/

app.put("/users/new_user", (req: Request, res: Response) => {
    let errorCode: number = 400;
    const { name, email, type, age } = req.body;

    try {
        if(!name || !email || !type || !age) {
            errorCode = 422;
            throw new Error("Name, Email, Type and Age are required fields.");
        }

        if(typeof name !== "string") {
            errorCode = 422;
            throw new Error("The 'name' field must be of type string.");
        }

        if(typeof email !== "string") {
            errorCode = 422;
            throw new Error("The 'email' field must be of type string.");
        }

        const checkEmail = users.find(user => user.email === email);    
        if(checkEmail) {
            errorCode = 409;
            throw new Error(`E-mail '${email}' already registered.`);
        }

        if(typeof type !== "string") {
            errorCode = 422;
            throw new Error("The 'type' field must be of type string.");
        }

        if(type !== "ADMIN" && type !== "NORMAL") {
            errorCode = 409;
            throw new Error(`Type '${type}' does not exist, only 'NORMAL' or 'ADMIN'.`);
        }

        if(typeof age !== "number") {
            errorCode = 422;
            throw new Error("The 'age' field must be of type number.");
        }

        const new_user = { id: users[users.length-1].id + 1, name, email, type, age };
        users.push(new_user);

        res.status(201).send(users);

    } catch (error: any) {
        res.status(errorCode).send({message: error.message});
    }
})