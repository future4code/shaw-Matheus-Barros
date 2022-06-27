import * as jwt from "jsonwebtoken";
import { AuthenticationData } from "../types";

const expiresIn = "1min"

export class Authenticator {

    public generateToken = (id: AuthenticationData): string => {
        const token = jwt.sign(
            { id: id.id }, process.env.JWT_KEY as string, { expiresIn }
        );
    
        return token;
    }
    
    public getTokenData = (token: string): AuthenticationData | null => {
        try {
            const { id } = jwt.verify(
                token, String(process.env.JWT_KEY)
            ) as AuthenticationData;
        
            return { id };
        
        } catch (error) {       
            return null 
        }
    }
}
