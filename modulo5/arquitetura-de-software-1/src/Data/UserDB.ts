import { UserModel } from "../Model/UserModel";
import { UserId } from "../Types/UserTypes";
import { BaseDB } from "./BaseDB";

export class UserDB extends BaseDB {

    insertUser = async (newUser: UserModel) => {

        await BaseDB.connection('User_Arq')
        .insert({
            id: newUser.getId(),
            name: newUser.getName(),
            email: newUser.getEmail(),
            password: newUser.getPassword(),
            role: newUser.getRole()
        })
    };

    selectEmail = async (email: string): Promise<UserId | null> => {

        const user: UserId[] = await BaseDB.connection('User_Arq')
        .select('*')
        .where({ email })

        if(user.length > 0){
            return {
                id: user[0].id,
                name: user[0].name, 
                email: user[0].email, 
                password: user[0].password,
                role: user[0].role
            }
        } else {
            return null
        }
    };
}
