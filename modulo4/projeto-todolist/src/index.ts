import express, { Express, Request, Response } from "express";
import cors from "cors";
import { AddressInfo } from "net";
import connection from "./data/connection";

export const app: Express = express();

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

async function createUser(name: string, nickname: string, email: string): Promise<any> {
  await connection('ToDoListUser')
  .insert({
    id: Date.now().toString(),
    name,
    nickname,
    email
  })
}

app.post("/users", async (req: Request, res: Response) => {
  try {
    const { name, nickname, email } = req.body

    if(!name || !nickname || !email){
      res.statusCode = 422
      throw new Error("Os campos 'name', 'nickname' e 'email' são obrigatórios.")
    }

    await createUser(name, nickname, email)

    res.status(201).send("Conta criada com sucesso!")

  } catch (error: any) {
    res.send(error.message || error.sqlMessage)
  }
})

//////////////////////////////////////////////////////////////////////////

app.get("/users/:id", async (req: Request, res: Response) => {
  try {
    if(!req.params.id){
      res.statusCode = 422
      throw new Error("O campo 'id' é obrigatório.")
    }

    const result = await connection('ToDoListUser')
    .select( 'id', 'nickname' )
    .where({ id: req.params.id })

    res.status(200).send(result[0])

  } catch (error: any) {
    res.send(error.messagem || error.sqlMessage)
  }
})

/////////////////////////////////////////////////////////////////////////////

app.put("/user/edit/:id", async (req: Request, res: Response) => {
  try {
    if(!req.body.name || !req.body.nickname){
      res.statusCode = 422
      throw new Error("O campo 'name' e 'nickname' são obrigatórios.")
    }

    await connection('ToDoListUser')
    .update({
      name: req.body.name,
      nickname: req.body.nickname
    })
    .where({ id: req.params.id })

    res.status(200).send("Usuário editado com sucesso!")

  } catch (error: any) {
    res.send(error.messagem || error.sqlMessage)
  }
})

//////////////////////////////////////////////////////////////////////////////

app.post("/task", async (req: Request, res: Response) => {
  try {
    if(!req.body.title || !req.body.description || !req.body.limit_date || !req.body.creator_user_id){
      res.statusCode = 422
      throw new Error("Os campos 'title', 'description', 'limit_date', 'creator_user_id' são obrigatórios.");
    }

    await connection('ToDoListTask')
    .insert({
      id: Date.now().toString(),
      title: req.body.title,
      description: req.body.description,
      limit_date: req.body.limit_date.split('/').reverse().join("-"),
      creator_user_id: req.body.creator_user_id
    })
      
    res.status(201).send("Tarefa criada com sucesso!")

  } catch (error: any) {
    res.send(error.messagem || error.sqlMessage)
  }
})

///////////////////////////////////////////////////////////////////////////////

app.get("/task/:id", async (req: Request, res: Response) => {
  try {
      if(!req.params.id){
          res.statusCode = 422
          throw new Error("O campo 'id' é obrigatório.")
      }

      const result = await connection('ToDoListTask')
      .select( 
          'ToDoListTask.id as taskId', 
          'title', 
          'description',
          'status', 
          'limit_date as limitDate', 
          'creator_user_id as creatorUserId', 
          'nickname as creatorUserNickname'
      )
      .join('ToDoListUser', 'ToDoListUser.id', 'ToDoListTask.creator_user_id')
      .where({ 'ToDoListTask.id': req.params.id })
      
      res.send(result[0])
      
  } catch (error: any) {
      res.send(error.messagem || error.sqlMessage)
  }
})