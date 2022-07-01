export class UserModel {
    
    private recipes: string[] = [];
    
    constructor(
        private id: string,
        private name: string,
        private email: string,
        private password: string
    ){ };

    public getId(){
        return this.id
    };

    public getName(){
        return this.name
    };

    public getEmail(){
        return this.email
    };

    public getPassword(){
        return this.password
    };

    public getRecipes(){
        return this.recipes
    };
}
