import { RecipeController } from "./api/RecipeController";
import { UserController } from "./api/UserController";
import { app } from "./app";

// Usuário
const userController = new UserController()

app.post('/signup', userController.postSignup)
app.post('/login', userController.postLogin)
app.get('/user/profile', userController.getProfile)
app.get('/user/:id', userController.getOtherProfile)

// Receita
const recipeController = new RecipeController()

app.post('/recipe', recipeController.postRecipe)
app.get('/recipes/:id', recipeController.getRecipe)