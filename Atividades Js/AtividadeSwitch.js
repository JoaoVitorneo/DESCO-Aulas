
let bebidas = ["cafe", "leite", "cha"];
let valor;

console.log("Fala meu grande, qual vai ser a de hoje?")

const rl = require('readline-sync');
bebidas.forEach(i => console.log(i));
let escolha = rl.question("Você que manda, chefe! ");
let x = escolha;

switch(x) {
    case bebidas[0]:
        valor =  5.00;
        valorPago = valor.toFixed(2);
        console.log("Uma " + bebidas[0] + " quentinho pra meu amigo aqui. Pra você ta saindo a R$" + valorPago);
        break;
    case bebidas[1]:
        valor = 3.00;
        console.log("Um " + bebidas,[1] + " quentinho pra meu amigo aqui. Pra você ta saindo a R$" + valorPago);
        break;
    case bebidas[2]:
        valor = 3.50;
        console.log("Uma " + bebidas[2] + " quentinho pra meu amigo aqui. Pra você ta saindo a R$" + valorPago);
        break;
    default:
        console.log("Não temos isso disponível patrão. Você sabe que aqui a gente so vende coisa das boas.");
        console.log("Escolhe outra coisa ai chefe ");

}
  