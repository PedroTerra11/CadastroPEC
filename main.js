const prompt = require("prompt-sync")();
let cadastros = []

const nomeInvalido = (nome) => nome == "";

const modelo = () => {
    while(1){
        let paises = {}

        paises.pais = prompt("Digite o país")

        if(paisInvalido(paises.pais)){
            console.log("Nome inválido")
        }else
            break;
    }

    while(1){
        paises.estado = prompt("Digite o nome de um estado")
        if(nomeInvalido(paises.estado)){
            console.log("Nome inválido")
        }else
            break;
    }

    while(1){
        paises.cidade = prompt("Digite o nome de uma cidade:")
        if(nomeInvalido(paises.cidade)){
            console.log("Nome inválido")
        }else
            break;
    }

    return paises
}

const listagem = () => {
    for(let i = 0; i < cadastros.length; i++){
        console.log(cadastros[i])
    }
}

const criar = () => {
    const paises = modelo();
  
    cadastros.push(paises);
  
    console.log("Jogo criado com sucesso");
  };

  modules.exports = {
    criar, listagem
  }