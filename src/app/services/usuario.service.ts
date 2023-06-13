import { Usuario } from "../models/Usuario";

export class UsuarioService {
    private usuario: Usuario[];
    ultimoId: number = 0;
  
    constructor() {
      this.usuario = JSON.parse(localStorage.getItem('usuario') || '[]');
      this.ultimoId = this.usuario.length;
    }
  
    criarUsuario(usuario: Usuario): void {
      usuario.id = this.ultimoId++;
      this.usuario.push(usuario);
      localStorage.setItem('usuario', JSON.stringify(this.usuario));
    }
  
    atualizarUsuario(usuario: Usuario): void {
      console.log(usuario.id);
    
      const index = this.usuario.findIndex(a => a.id === usuario.id);
      if (index !== -1) {
        this.usuario[index] = usuario;
    
        try {
          localStorage.setItem('usuario', JSON.stringify(this.usuario));
          console.log('Registro atualizado com sucesso!');
        } catch (error) {
          console.log('Erro ao atualizar o registro no localStorage:', error);
        }
      } else {
        console.log('Pau no index');
      }
    }
    
  
    excluirUsuario(id: number): void {
      this.usuario = this.usuario.filter(a => a.id !== id);
      localStorage.setItem('usuario', JSON.stringify(this.usuario));
    }
  
    obterUsuario(): Usuario[] {
      return this.usuario;
    }

    selecionarUsuarioPorId(id: string) {    
      return this.usuario.find(usuario => usuario.id === parseInt(id));
    }
  }