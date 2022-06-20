import { Request, Response } from "express"
import axios from "axios"
import connection from "../data/connection"

type FullAddress = {
    cep: number,
    logradouro: string,
    numero: number,
    complemento: string,
    bairro: string,
    cidade: string,
    estado: string
}

const postAddress = async (cep: string, numero: number, complemento: string): Promise<FullAddress | undefined> => {
    try {
        const result = await axios.get(`https://viacep.com.br/ws/${cep}/json/`)

        const address: FullAddress = {
            cep: result.data.cep,
            logradouro: result.data.logradouro,
            numero,
            complemento,
            bairro: result.data.bairro,
            cidade: result.data.localidade,
            estado: result.data.uf
        }

        return(address)

    } catch (error: any) {
        return undefined
    }
}

async function insertAddressDB(address: FullAddress) {
    const { 
        cep,
        logradouro,
        numero,
        complemento,
        bairro,
        cidade,
        estado 
    } = address

    await connection('address')
    .insert({
        cep,
        logradouro,
        numero,
        complemento,
        bairro,
        cidade,
        estado 
    })
}

export const insertAddress = async (req: Request, res: Response) => {
    try {
        const cep = req.params.cep
        const { numero, complemento } = req.query
       
        const address = await postAddress(cep, Number(numero), complemento as string)

        if(!address) {
            res.statusCode = 422
            throw new Error("CEP inválido.");
        }

        await insertAddressDB(address) 
        
        res.status(201).send('Endereço registrado com sucesso!')

    } catch (error: any) {
        res.send(error.message || error.sqlMessage)
    }
}
