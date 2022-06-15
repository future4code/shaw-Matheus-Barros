import { app } from "./app";
import { getAddress } from "./api/getAddress";
import { insertAddress } from "./api/postAddress";

app.get("/endereco/:cep", getAddress)

app.post("/user/:cep", insertAddress)
