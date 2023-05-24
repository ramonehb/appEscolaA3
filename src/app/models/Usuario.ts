export class Usuario {
  id: number;
  nome: string;
  login : string;
  email: string;
  senha: string;
  senhaConfirmacao: string;
  img: string;

  constructor(id: number, nome: string, login: string, email: string, senha: string, senhaConfirmacao: string, img: string) {
      this.id = 1;
      this.nome = nome;
      this.login = login;
      this.email = email;
      this.senha = senha;
      this.senhaConfirmacao = senhaConfirmacao;
      this.img = img;
    }
}
