import express from "express";
import cors from "cors";
import { AddressInfo } from "net";
import { products } from "./data";

const app = express();

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

app.get("/test", (req, res) => {          
    res.send("Sua API está funcionando!")
})

app.get("/products", (req, res) => {          
    res.send(products)
})

app.post("/products/new_product", (req, res) => {
    try {
        const { name, price } = req.body
        const id: string = Date.now().toString()
        const checkProduct: number = products.findIndex(product => product.name === name)

        if(!name && !price) {
            throw new Error("'Name' e 'Price' são obrigatórios.")
        }
        if(!name) {
            throw new Error("'Name' é obrigatório.")
        }
        if(typeof name !== "string") {
            throw new Error("'Name' precisa ser do tipo 'string'.")
        }
        if(price <= 0) {
            throw new Error("'Price' precisa ter um valor maior que '0'.")
        }
        if(!price) {
            throw new Error("'Price' é obrigatório.")
        }
        if(typeof price !== "number") {
            throw new Error("'Price' precisa ser do tipo 'number'.")
        }
        if(checkProduct !== -1) {
            throw new Error("Produto já cadastrado.")
        }

        const new_product = {
            id,
            name, 
            price
        }

        products.push(new_product)
        res.send(products)

    } catch (error: any) {
        switch (error.message) {
            case "'Name' e 'Price' são obrigatórios.":
                res.status(422) // status unprocessable entity (entidade não processável)
                break
            case "'Name' é obrigatório.":
                res.status(422) // status unprocessable entity (entidade não processável)
                break
            case "'Name' precisa ser do tipo 'string'.":
                res.status(422) // status unprocessable entity (entidade não processável)
                break
            case "'Price' precisa ter um valor maior que '0'.":
                res.status(422) // status unprocessable entity (entidade não processável)
                break
            case "'Price' é obrigatório.":
                res.status(422) // status unprocessable entity (entidade não processável)
                break
            case "'Price' precisa ser do tipo 'number'.":
                res.status(422) // status unprocessable entity (entidade não processável)
                break
            case "Produto já cadastrado.":
                res.status(409) // status conflict (conflito)
                break
            default:
                res.status(500) // status internal server error (Erro do Servidor Interno)
                error.message = "Erro inesperado de servidor."
                break
        }

        res.send(error.message)   
    }
})

app.put("/products", (req, res) => {

    const price = req.body.price
    const productId = req.query.productId
    const indexProduct = products.findIndex(product => product.id === productId) 

    try {
        if(!productId) {
            throw new Error("Produto não informado.")
        }
        if(price <= 0) {
            throw new Error("'Price' precisa ter um valor maior que '0'.")
        }
        if(!price) {
            throw new Error("'Price' é obrigatório.")
        }
        if(typeof price !== "number") {
            throw new Error("'Price' precisa ser do tipo 'number'.")
        }
        if(indexProduct === -1) {
            throw new Error("Produto não encontrado.")
        }
        if(products[indexProduct].price === price) {
            throw new Error(`'Price' de '${products[indexProduct].name}' já tinha o valor '${price}'.`)
        } else {
            products[indexProduct] = { ...products[indexProduct], price: price }
        }

        res.send(products)

    } catch (error: any) {
        switch (error.message) {
            case "Produto não informado.":
                res.status(422) // status unprocessable entity (entidade não processável)
                break
            case "'Price' precisa ter um valor maior que '0'.":
                res.status(422) // status unprocessable entity (entidade não processável)
                break
            case "'Price' é obrigatório.":
                res.status(422) // status unprocessable entity (entidade não processável)
                break
            case "'Price' precisa ser do tipo 'number'.":
                res.status(422) // status unprocessable entity (entidade não processável)
                break
            case `'Price' de '${products[indexProduct].name}' já tinha o valor '${price}'.`:
                res.status(409) // status conflict (conflito)
                break
            case "Produto não encontrado.":
                res.status(404) // status not found (não encontrado)
                break
            default:
                res.status(500) // status internal server error (Erro do Servidor Interno)
                error.message = "Erro inesperado de servidor."
                break
        }

        res.send(error.message)   
    }
})

app.delete("/products/:productId", (req, res) => {

    const productId = req.params.productId
    const indexProduct = products.findIndex(product => product.id === productId)

    try {
        if(indexProduct === -1) {
            throw new Error(`O produto com id '${productId}' não foi encontrado.`)
        }

        products.splice(indexProduct, 1)

        res.send(products)

    } catch (error: any) {
        switch (error.message) {
            case `O produto com id '${productId}' não foi encontrado.`:
                res.status(404) // status not found (não encontrado)
                break
            default:
                res.status(500) // status internal server error (Erro do Servidor Interno)
                error.message = "Erro inesperado de servidor."
                break
        }

        res.send(error.message) 
    }
})