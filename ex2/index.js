const alunos = [
  { nome: "Ana", nota1: 5, nota2: 7 },
  { nome: "Maria", nota1: 9, nota2: 8 },
  { nome: "Carolina", nota1: 5, nota2: 9 },
  { nome: "Pedro", nota1: 6, nota2: 7 },
]; //alunos com suas notas

const calcularMedia = aluno => (aluno.nota1 + aluno.nota2) / 2; //média das notas de um aluno

const alunosComMedia = alunos.map(aluno => ({
  nome: aluno.nome,
  media: calcularMedia(aluno),
})); //média das notas de cada aluno e criando um novo array com nome e média

alunosComMedia.sort((a, b) => b.media - a.media); //ordem decrescente

console.log(alunosComMedia);