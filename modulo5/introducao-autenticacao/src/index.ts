import { UserController } from "./api/UserController";
import { app } from "./app";

const userController = new UserController()

app.post("/user/signup", userController.postCreateUser)
app.post("/user/login", userController.postLogin)
