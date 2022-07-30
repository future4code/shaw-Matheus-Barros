import { FormBusiness } from "../business/FormBusiness";
import { Request, Response } from  "express"
import { PostFormDTO } from "../model/DTOs/PostFormDTO";
import { CustomError } from "../errors/CustomError";

export class FormController {
    constructor(
        private formBusiness: FormBusiness
    ){}

    public postForm = async (req: Request, res: Response) => {
        try {
            const { firstName, lastName, participation } = req.body

            const form: PostFormDTO = { firstName, lastName, participation } 

            await this.formBusiness.postForm(form)

            res.status(200).send({ message: "Info save." })

        } catch (error: any) {
            if(error instanceof CustomError){
                res.status(error.statusCode).send({ error: error.message })
            } else {
                res.status(400).send({ error: error.message })
            }
        }
    }

    public getFormData = async (req: Request, res: Response) => {
        try {
            const formData = await this.formBusiness.getFormData()

            res.status(200).send({ formData })

        } catch (error: any) {
            if(error instanceof CustomError){
                res.status(error.statusCode).send({ error: error.message })
            } else {
                res.status(400).send({ error: error.message })
            }
        }
    }
}