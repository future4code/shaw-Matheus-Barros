import { BaseDB } from "./BaseDB";
import { UserModel } from "../model/UserModel";


export class UserDB extends BaseDB {

    signup = async (newUser: UserModel) => {
        await BaseDB.connection('cookenu_user')
        .insert({
            id: newUser.getId(),
            name: newUser.getName(),
            email: newUser.getEmail(),
            password: newUser.getPassword(),
        })
    };

    selectUserByEmail = async (email: string) => {
        const check = await BaseDB.connection('cookenu_user')
        .select('*')
        .where({ email })

        return check
    }
}