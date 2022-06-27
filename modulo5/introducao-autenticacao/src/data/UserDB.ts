import { UserModel } from "../model/UserModel";
import { User } from "../types";
import { BaseDB } from "./BaseDB";

export class UserDB extends BaseDB {

    createUser = async (newUser: UserModel) => {
        await BaseDB.connection('User')
        .insert({
            id: newUser.getId(),
            email: newUser.getEmail(),
            password: newUser.getPassword(),
        })
    };

    getUserByEmail = async (email: string): Promise<User | null> => {
        
        const user: User[] = await BaseDB.connection('User')
        .select('*')
        .where({ email })

        if(user.length > 0){
            return {
                id: user[0].id, 
                email: user[0].email, 
                password: user[0].password
            }
        } else {
            return null
        }
    };
}
