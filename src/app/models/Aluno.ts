export class Aluno {
    id: number;
    nome: string;
    cpf: string;
    dataNascimento: Date;
    sexo: string;
    email: string;
    cursoId: Number;
    img: string;
    ra: number;

    constructor(nome: string, cpf: string, dataNascimento: Date, sexo: string, email: string, cursoId: number, img: string, ra: number) {
        this.id = 1;
        this.nome = nome;
        this.cpf = cpf;
        this.dataNascimento = dataNascimento;
        this.sexo = sexo;
        this.email = email;
        this.cursoId = cursoId;
        this.img = img;
        this.ra = ra;
      }
}