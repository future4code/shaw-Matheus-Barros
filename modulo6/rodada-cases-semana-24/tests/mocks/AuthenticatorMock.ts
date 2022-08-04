

export class AuthenticatorMock {

    public generateToken(){
        return "TOKEN"
    }

    public getTokenData(token: string){
        
        const data = { id: "id_mock" }

        return data
    }
}
