import FormDB from "../data/FormDB";
import IdGenerator from "../services/IdGenerator";
import { PostFormDTO } from "../model/DTOs/PostFormDTO";
import { BadRequestError } from "../errors/BadRequestError";
import { InsertFormDTO } from "../model/DTOs/InsertFormDTO";
import { FormModel } from "../model/FormModel";
import { InternalError } from "../errors/InternalError";
import { FormData } from "../model/Types/FormData";

export class FormBusiness {
    constructor(
        private formDataBase: FormDB,
        private idGenerator: IdGenerator
    ){}

    public postForm = async (form: PostFormDTO): Promise<void> => {
        try {
            const { firstName, lastName, participation } = form

            if(!firstName || !lastName || !participation){
                throw new BadRequestError("All fields are mandatory.");
            }

            if(typeof firstName !== "string" || typeof lastName !== "string"){
                throw new BadRequestError("First name and last name must be of type STRING.");
            }

            if(typeof participation !== "number"){
                throw new BadRequestError("Participation must be of type NUMBER.");
            }

            if(participation < 0 || participation > 100){
                throw new BadRequestError("Participation cannot have a value less than 0 and greater than 100.");
            }

            const sumParticipation: number = await this.formDataBase.selectSumParticipation()

            if(sumParticipation + participation > 100){
                throw new BadRequestError("Participation cannot exceed 100%.");
            }

            const id = this.idGenerator.idGenerator()

            const newForm: InsertFormDTO = new FormModel(id, firstName, lastName, participation)  
            
            await this.formDataBase.insertForm(newForm)

        } catch (error: any) {
            if(error instanceof BadRequestError){
                throw new BadRequestError(error.message)
            } else {
                throw new InternalError(error.sqlMessage || error.message)
            }
        }
    }

    public getFormData = async (): Promise<FormData[]> => {
        try {
            const formData: FormData[] = await this.formDataBase.selectFormData()

            if(formData.length === 0) {
                throw new BadRequestError("No data found.")
            }

            return formData

        } catch (error: any) {
            if(error instanceof BadRequestError){
                throw new BadRequestError(error.message)
            } else {
                throw new InternalError(error.sqlMessage || error.message)
            }
        }
    }
}