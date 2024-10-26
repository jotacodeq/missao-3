import { Livro } from "../modelo/Livro";

export class ControleLivros {
    private livros: { codigo: number; codEditora: number; titulo: string; resumo: string; autores: string[] }[];
  
    constructor() {
      
      this.livros = [
        { codigo: 1, codEditora: 1, titulo: 'Livro-Jogo RPG - O Maligno Mágico de Oz', resumo: 'otó, tenho a impressão de que não estamos mais no Kansas. A Maravilhosa Terra de Oz está em perigo! Um vendaval mágico carrega a fazenda dos tios de Dorothy de volta para o mundo encantando de Oz. Macacos voadores, insetos gigantes e criações robóticas são alguns dos perigos que Dorothy e seus amigos precisarão enfrentar para impedir os planos perversos da poderosa inteligência artificial conhecida como o Maligno Mágico de Oz. Ambientado no mundo clássico de L. Frank Baum, O Maligno Mágico de Oz é um livro diferente: aqui, você é o protagonista. Escolha seu personagem, entre Dorothy, o Espantalho, o Leão, o Homem de Lata, a Bruxa Malvada do Oeste ou o Mágico, e embarque nessa nova aventura! É a sua vez de desbravar o mundo de Oz! Mais informações O Maligno Mágico de Oz é um livro-jogo independente, com início, meio e fim neste volume. A obra resgata elementos da história original de Oz e transforma o universo de L..', autores: ["JONATHAN GREEN"] },
        { codigo: 2, codEditora: 1, titulo: 'Livro-Jogo - Sangue de Zumbis', resumo: 'arte história, parte jogo, este é um tipo diferente de livro — aqui, você é o herói! Você precisa apenas de um lápis, uma borracha e dois dados para embarcar nesta fantástica aventura.', autores: ["Kevin Crossley"] },
        { codigo: 3, codEditora: 2, titulo: 'Livro-Jogo - Viver ou Morrer - vol. 1 - 3ª edição', resumo: 'Viver ou Morrer é um livro-jogo em que você é o herói. Esta edição, revisada e expandida, traz dez histórias de fantasia — incluindo a inédita Rasga-Magos — em que você deverá desbravar masmorras, enfrentar monstros e sobreviver a armadilhas', autores: ["Athos Beuren"] },
      ];
    }
  
  
    getLivros(): { codigo: number; codEditora: number; titulo: string; resumo: string; autores: string[] }[] {
      return this.livros;
    }

    
    incluir(livro: Livro):void {
      livro.codigo = this.livros.length > 0 ? Math.max(...this.livros.map(l => l.codigo)) + 1 : 1;
      this.livros.push(livro);
      console.log('Livro a ser incluído:', livro);
    }

    
    excluir(codigo: number): void {
        const indice = this.livros.findIndex(livro => livro.codigo === codigo);
        if (indice !== -1) {
            this.livros.splice(indice, 1);
        }
    }
}