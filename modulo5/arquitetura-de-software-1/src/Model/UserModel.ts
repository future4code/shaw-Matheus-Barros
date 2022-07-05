import { USER_ROLES } from "../Types/UserTypes"

export class UserModel {
    constructor(
        private id: string,
        private name: string,
        private email: string,
        private password: string,
        private role: USER_ROLES
    ){ }

    getId(){
        return this.id
    }

    getName(){
        return this.name
    }

    getEmail(){
        return this.email
    }

    getPassword(){
        return this.password
    }

    getRole(){
        return this.role
    }
}
