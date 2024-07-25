const prompt = require("prompt-sync")();
const {paises} = require("./index.js");

const nomeInvalido = (nome) => nome == "";

const modelo = () => {
    while(1){

        paises.pais = prompt("Digite o país")

        if(nomeInvalido(paises.pais)){
            console.log("Nome inválido")
        }else
            break;
    }

    return paises
}

const criar = () => {
    const paises = modelo();
  
    cadastros.push(paises);
  
    console.log("Pais criado com sucesso");
  };

  modules.exports = {
    criar,
  }