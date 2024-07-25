const prompt = require("prompt-sync")();
const {cidades} = require("./index.js");

const nomeInvalido = (nome) => nome == "";

const modelo = () => {
    while(1){

        cidades.pais = prompt("Digite a cidade")

        if(nomeInvalido(cidades.pais)){
            console.log("Nome inválido")
        }else
            break;
    }

    return cidades
}

const criar = () => {
    const cidade = modelo();
  
    cadastros.push(cidade);
  
    console.log("Cidade adicionada com sucesso.");
  };