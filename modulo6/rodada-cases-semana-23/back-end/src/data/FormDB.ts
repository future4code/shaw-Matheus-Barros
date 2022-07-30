import { BaseDB } from "./BaseDB";
import { InsertFormDTO } from "../model/DTOs/InsertFormDTO";
import { InternalError } from "../errors/InternalError";
import { FormData } from "../model/Types/FormData";

export default class FormDB extends BaseDB {

    private static TABLE_NAME = "Form_Case_23"
    
    public insertForm = async (form: InsertFormDTO): Promise<void> => {
        try {
            await BaseDB.connection(FormDB.TABLE_NAME)
                .insert({
                    id: form.getId(),
                    first_name: form.getFirstName(),
                    last_name: form.getLastName(),
                    participation: form.getParticipation()
                })
        } catch (error: any) {
            throw new InternalError(error.sqlMessage || error.message)
        }
    };

    public selectSumParticipation = async (): Promise<number> => {
        try {
            const sumParticipation: Array<{sumParticipation: number}> = await BaseDB.connection(FormDB.TABLE_NAME)
            .sum("participation as sumParticipation")

            return sumParticipation[0].sumParticipation

        } catch (error: any) {
            throw new InternalError(error.sqlMessage || error.message)
        }
    }

    public selectFormData = async (): Promise<FormData[]> => {
        try {
            const formData: FormData[] = await BaseDB.connection(FormDB.TABLE_NAME)
            .select("id", "first_name as firstName", "last_name as lastName", "participation")

            return formData

        } catch (error: any) {
            throw new InternalError(error.sqlMessage || error.message)
        }
    }
}