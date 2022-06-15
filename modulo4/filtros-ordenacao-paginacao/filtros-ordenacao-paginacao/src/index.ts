// import { getAllUsers } from "./api/getAllUsers ";
import { getUserByName } from "./api/getUsersByName";
import { getUserByOrdenation } from "./api/getUsersByOrdenation";
import { getUserByType } from "./api/getUserByType";
import { getUserByPage } from "./api/getUsersByPage";
import { app } from "./app";
import { getUsers } from "./api/getUsers";

// app.get("/users", getAllUsers)

app.get("/user", getUsers)

app.get("/users", getUserByName)

app.get("/users/ordenation", getUserByOrdenation)

app.get("/users/pagination", getUserByPage)

app.get("/users/:type", getUserByType)