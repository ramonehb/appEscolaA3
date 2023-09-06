export class TokenRetorno {
    
    usuario: string;
    validoAte: Date;
    token: string;

    constructor(userName: string, validoAte: Date, token: string) {
        
        this.usuario = userName;
        this.validoAte = validoAte;
        this.token = token;
      }
}