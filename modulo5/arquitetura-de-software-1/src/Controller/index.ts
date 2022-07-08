import { app } from "./app";
import { UserController } from "./UserController";

const userController = new UserController()

app.post("/signup", userController.postSignup)
app.post("/login", userController.postLogin)
