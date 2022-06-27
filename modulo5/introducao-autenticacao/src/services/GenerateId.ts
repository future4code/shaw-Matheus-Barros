import { v4 } from "uuid";

class GenerateId{
    public generation(): string{
        return v4()
    }
}

export default GenerateId