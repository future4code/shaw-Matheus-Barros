import { app } from "./app";
import { productRouter } from "../routes/productRouter";

app.use('/products', productRouter)
