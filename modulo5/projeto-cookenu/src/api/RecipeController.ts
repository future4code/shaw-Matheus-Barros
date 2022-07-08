import { Request, Response } from "express";
import { RecipeDB } from "../data/RecipeDB";
import { RecipeModel } from "../model/RecipeModel";
import { Authenticator } from "../services/Authenticator";
import IdGenerator from "../services/IdGenerator";

export class RecipeController{

    // Criar Receita
    async postRecipe(req: Request, res: Response){
        try {
            const { title, description } = req.body
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

            if(!title || !description){
                res.statusCode = 422
                throw new Error("Title e Description são obrigatórios.");
            }

            if(typeof title !== "string" || typeof description !== "string"){
                res.statusCode = 422
                throw new Error("Title e Description devem ser do tipo 'string'.");
            }

            const newId = new IdGenerator()
            const id = newId.idGenerator()

            const date = new Date();
            const day = String(date.getDate()).padStart(2, '0');
            const month = String(date.getMonth() + 1).padStart(2, '0'); 
            const year = date.getFullYear();
            const currentDate = year + '-' + month + '-' + day
            console.log(currentDate)

            const newRecipe = new RecipeModel(id, title, description, currentDate)
            
            const recipeDB = new RecipeDB()
            await recipeDB.insertRecipe(newRecipe)

            res.status(201).send('Receita criada com sucesso!')
            
        } catch (error: any) {
            res.send(error.slqMessage || error.message)
        }
    }

    // Pegar receita
    async getRecipe(req: Request, res: Response){
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
            const userInfo = authenticator.getTokenData(token)

            if(!userInfo){
                res.statusCode = 401
                throw new Error("Token expirado ou inválido.");
            }

            const recipeDB = new RecipeDB()
            const recipe = await recipeDB.selectRecipe(id)

            if(recipe.length === 0){
                res.statusCode = 404
                throw new Error("Receita não encontrada.");
            }

            res.status(200).send({ id: recipe[0].id, title: recipe[0].title, description: recipe[0].description, creation_date: recipe[0].creation_date })
            
        } catch (error: any) {
            res.send(error.slqMessage || error.message)
        }
    }
}