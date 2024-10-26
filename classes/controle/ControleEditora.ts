import { Editora } from "../modelo/Editora";

export class ControleEditora {
    private editoras: { codEditora: number; nome: string }[];
  
    constructor() {
     
      this.editoras = [
        { codEditora: 1, nome: 'RED' },
        { codEditora: 2, nome: 'BLUE' },
        { codEditora: 3, nome: 'GREEN' },
      ];
    }

    
    getNomeEditora(codEditora: number): string | undefined {
        const editora = this.editoras
        .filter(e => e.codEditora === codEditora)
        .map(e => e.nome)[0]; 

        return editora; 
    }
  
    
    getEditoras(): { codEditora: number; nome: string }[] {
      return this.editoras;
    }
}