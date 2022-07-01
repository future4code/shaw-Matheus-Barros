import { UserController } from "./api/UserController";
import { app } from "./app";


const userController = new UserController()

app.post('/signup', userController.postSignup)