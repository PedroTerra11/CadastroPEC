const prompt = require("prompt-sync")();
const { criar, listagem } = require("./main.js");

while (true) {
    console.log(`
          1 - Inserir país
          2 - Listar países
          3 - Atualizar
          4- Sair
          `);
  
    const opcao = +prompt("Qual opção deseja?");

switch (opcao) {
    case 1:
        criar()
        break;

    case 2:
        listagem()
        break;

    case 3:
        
    break;
        
    case 4:
        process.exit()
        
        break;

    default:
        console.log("Opção inválida")
        break;
}
}