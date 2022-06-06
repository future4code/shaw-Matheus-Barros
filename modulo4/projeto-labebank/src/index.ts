import express, { Express, Request, Response } from "express";
import cors from "cors";
import { AddressInfo } from "net";
import { users } from "./users";

const app: Express = express();

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

app.get("/users", (req: Request, res: Response) => {
    try {
        if(!users.length) {
            res.statusCode = 404
            throw new Error("Nenhuma conta encontrada.")
        }

        res.status(200).send(users)

    } catch (error: any) {
        res.send(error.message)
    }
})

app.post("/users/create", (req: Request, res: Response) => {
    try {
        const { name, CPF, dateOfBirthString } = req.body

        const [day, month, year] = dateOfBirthString.split("/")
        const dateOfBirth: Date = new Date(`${year}-${month}-${day}`)

        if(!name || !CPF || !dateOfBirthString) {
            res.statusCode = 422
            throw new Error("Os campos 'Name', 'CPF' e 'DateOfBirthString' são obrigatórios.");
        }

        if(typeof name !== "string") {
            res.statusCode = 422
            throw new Error("'Name' deve ser do tipo 'string'.");
        }

        if(typeof CPF !== "string") {
            res.statusCode = 422
            throw new Error("'CPF' deve ser do tipo 'string'.");
        }

        if(!Date.parse(dateOfBirthString)) {
            res.statusCode = 422
            throw new Error("'dateOfBirthString' deve ser do tipo 'date'.");
        }

        const ageMilisseconds: number = Date.now() - dateOfBirth.getTime()
        const ageInYears: number = ageMilisseconds / 1000 / 60 / 60 / 24 / 365
        if(ageInYears < 18) {
            res.statusCode = 406
            throw new Error("A idade mínima para criar uma conta deve ser 18 anos.");
        }

        if(users.some(user => user.CPF === CPF)) {
            res.statusCode = 409
            throw new Error(`O CPF '${CPF}' já tem um cadastro.`);
        }

        users.push({ name, CPF, dateOfBirth, balance: 0, extracts: [] })

        res.status(201).send("Conta criada com sucesso!")

    } catch (error: any) {
        res.send(error.message)
    }
})