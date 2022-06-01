import express from "express";
import cors from "cors";
import { AddressInfo } from "net";

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

type Afazer = {
    userId: number,
    id: number,
    title: string,
    completed: boolean
}

const afazeres: Afazer[] = [
    {
        userId: 1,
        id: 1,
        title: "Fazer warmup",
        completed: true
    },
    {
        userId: 2,
        id: 2,
        title: "Assistir a aula",
        completed: true
    },
    {
        userId: 3,
        id: 3,
        title: "Entregar atividade do dia",
        completed: false
    }
]   

app.get("/ping", (req, res) => {          
    res.send("Pong! 🏓")
})

app.get("/afazeres", (req, res) => {
    const status = req.query.status

    if(status === "completo" || status === "incompleto") {
        
        const mapAfazeres = afazeres.filter((afazer) => {
            if(status === "completo"){
                return afazer.completed === true
            } else {
                return afazer.completed === false
            }    
        })

        res.send(mapAfazeres)
    } else {
        res.status(400).send(`'${status}' não é um status válido`)
    }
})

app.get("/usuarios/:userId/afazeres", (req, res) => {
    const userId: number = Number(req.params.userId)

    const mapAfazeres = afazeres.filter(element => element.userId === userId)

    if(mapAfazeres.length > 0){
        res.send(mapAfazeres)
    } else {
        res.status(404).send(`Usuário com id '${userId}' não existe`)
    }
})

app.post("/afazeres/:userId/criar-afazer", (req, res) => {
    const userId: number = Number(req.params.userId)
    const title = req.body.title

    if(typeof title === "string"  && afazeres.some(element => element.userId === userId)) {
        
        const novo_afazer = {
            userId: userId,
            id: afazeres.length > 0 ? afazeres[afazeres.length - 1].id + 1 : 1,
            title: title,
            completed: false
        }

        afazeres.push(novo_afazer)
        
        res.send(afazeres)
    } else {
        if(typeof title !== "string"){
            res.status(400).send(`'${title}' não corresponde ao tipo string`)
        } else {
            res.status(404).send(`Usuário com id '${userId}' não existe`)
        }
    }
})

app.put("/usuarios/:userId/afazeres/:afazerId", (req, res) => {
    const userId: number = Number(req.params.userId)
    const afazerId: number = Number(req.params.afazerId)
    const indexAfazer: number = afazeres.findIndex(element => element.id === afazerId)
    
    if(afazeres.some(element => element.userId === userId) && indexAfazer !== -1) {
        
        if(userId === afazeres[indexAfazer].userId) {
            afazeres[indexAfazer] = {
                ...afazeres[indexAfazer], completed: !afazeres[indexAfazer].completed
            }

            res.send(afazeres)
        } else {
            res.status(401).send("O afazer pertence a outro usuário")
        }
    } else {

        if(afazeres.some(element => element.userId === userId)) {
            res.status(404).send(`O afazer com id '${afazerId}' não existe`)
        } else {
            res.status(404).send(`Usuário com id '${userId}' não existe`)
        }
    }
})

app.delete("/usuarios/:userId/afazeres/:afazerId", (req, res) => {
    const userId: number = Number(req.params.userId)
    const afazerId: number = Number(req.params.afazerId)
    const indexAfazer: number = afazeres.findIndex(element => element.id === afazerId)
    
    if(afazeres.some(element => element.userId === userId) && indexAfazer !== -1) {
        
        if(userId === afazeres[indexAfazer].userId) {
            afazeres.splice(indexAfazer, 1)

            res.send(afazeres)
        } else {
            res.status(401).send("O afazer pertence a outro usuário")
        }
    } else {

        if(afazeres.some(element => element.userId === userId)) {
            res.status(404).send(`O afazer com id '${afazerId}' não existe`)
        } else {
            res.status(404).send(`Usuário com id '${userId}' não existe`)
        }
    }
})