const prompt = require("prompt-sync")();
const {estados, paises} = require("./index.js");

const nomeInvalido = (nome) => nome == "";

const modelo = () => {
    while(1){
        if(paises != 0){
            estados.pais = prompt("Digite o estado")
    
            if(nomeInvalido(estados.pais)){
                console.log("Nome inválido")
            }else
                break;
                return estados
        }else
            console.log("Não há países para ser adicionado um estado.")
    
    }
}

const criar = () => {
    const estado = modelo();
  
    cadastros.push(estado);
  
    console.log("Estado adicionado com sucesso.");
  };