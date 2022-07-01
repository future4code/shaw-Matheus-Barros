import { UserController } from "./api/UserController";
import { app } from "./app";

const userController = new UserController()

app.post('/signup', userController.postSignup)
app.post('/login', userController.postLogin)

app.get('/user/profile', userController.getProfile)
app.get('/user/:id', userController.getOtherProfile)