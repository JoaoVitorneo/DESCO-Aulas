var arr = [1, 2, 3, 4, 5, 6, 7];

//retira elementos do array. primeiro paramento indica a posição, segundo parametro indica a quantidade.
arr.splice(1, 1);

console.log(arr);

var nomes = ["Maria", "Joao", "Lucas", "Pedro"];

//retira um elemento do array e o substitui por um novo
var novosNomes = nomes.splice(1, 1, "Luiz");

console.log(novosNomes);

