

export class HashGeneratorMock {

   public generateHash = (password: string) => {
      return "senha_hash"
   }

   public compare = (password: string, hash: string) => {
      return password === hash
   }
}
