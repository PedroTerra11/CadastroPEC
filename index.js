
const lerIndice = (mensagem) => parseInt(prompt(mensagem));

const nomeInvalido = (nome) => nome == "";

const indiceInvalido = (indice) =>
  indice < 0 || indice >= jogos.length || isNaN(indice);

const paises = [
    {
        nome: "Paraguai",
    },
    {
        nome: "Brasil"
    }
]

const regioes = [{
    nome: "Sul"
}]

const estados = [{
    nome: "Paraná",
    uf: "PR",
    regiao: 0,
    pais: 1,
}]

const cidades = [{
    nome: "Ponta Grossa"
}]

const remover = () => {
    while (true) {
      const indice =
        lerIndice("Qual é o indice do jogo que deseja remover? ") - 1;
  
      if (indiceInvalido(indice)) {
        console.log("Indice inválido");
      } else {
        jogos.splice(indice, 1);
        console.log("Removido com sucesso");
        break;
      }
    }
  };

estados.forEach(estado => {
    console.log(paises[estado.pais])
})

modules.exports = {
    paises, regioes, estados, cidades
}