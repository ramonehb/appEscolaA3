export class Usuario {
    id: number;
    nome: string;
    email: string;
    senha: string;
    senhaConfirmacao: string;
    img: string;

    constructor(id: number, nome: string, email: string, senha: string, senhaConfirmacao: string, img: string) {
        this.id = 1;
        this.nome = nome;
        this.email = email;
        this.senha = senha;
        this.senhaConfirmacao = senhaConfirmacao;
        this.img = img;
      }
}