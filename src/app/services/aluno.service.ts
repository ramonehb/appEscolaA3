import { Aluno } from "../models/Aluno";

export class AlunoService {
    private alunos: Aluno[];
    ultimoId: number = 0;
  
    constructor() {
      this.alunos = JSON.parse(localStorage.getItem('alunos') || '[]');
      this.ultimoId = this.alunos.length;
    }
  
    criarAluno(aluno: Aluno): void {
      aluno.id = this.ultimoId++;
      this.alunos.push(aluno);
      localStorage.setItem('alunos', JSON.stringify(this.alunos));
    }
  
    atualizarAluno(aluno: Aluno): void {
      const index = this.alunos.findIndex(a => a.id === aluno.id);
      if (index !== -1) {
        this.alunos[index] = aluno;
        localStorage.setItem('alunos', JSON.stringify(this.alunos));
      }
    }
  
    excluirAluno(id: number): void {
      this.alunos = this.alunos.filter(a => a.id !== id);
      localStorage.setItem('alunos', JSON.stringify(this.alunos));
    }
  
    obterAlunos(): Aluno[] {
      return this.alunos;
    }

    selecionarAlunoPorId(id: string) {    
      return this.alunos.find(aluno => aluno.id === parseInt(id));
    }
  }