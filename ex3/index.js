class Livro {
    constructor(titulo, autor, anoPublicacao) {
        this.titulo = titulo;
        this.autor = autor;
        this.anoPublicacao = anoPublicacao;
    }

    obterInformacoes() {
        return `Título: ${this.titulo}, Autor: ${this.autor}, Ano de Publicação: ${this.anoPublicacao}`;
    }
}

const livro1 = new Livro("Dom Quixote", "Miguel de Cervantes", 1605);
const livro2 = new Livro("Dom Casmurro", "Machado de Assis", 1899);
const livro3 = new Livro("Harry Potter e a Pedra Filosofal", "J.K. Rowling", 1997); // Criando os objetos da classe Livro

console.log(livro1.obterInformacoes());
console.log(livro2.obterInformacoes());
console.log(livro3.obterInformacoes()); // Exibindo as informações de cada livro
