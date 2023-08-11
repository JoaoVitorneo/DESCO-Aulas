var arr = [1, 2, 3, 4, 5, 6, 7];

//retira elementos do array. primeiro paramento indica a posição, segundo parametro indica a quantidade.
arr.splice(1, 1);

console.log(arr);

var nomes = ["Maria", "Joao", "Lucas", "Pedro"];

//retira um elemento do array e o substitui por um novo
var novosNomes = nomes.splice(1, 1, "Luiz");

console.log(novosNomes);

var pais = ["Brasil", "Turquia", "Japao", "Alemanha"];
//adciona um novo elemento ao inicio do array.
pais.unshift("Uruguai");
console.log(pais);

var pessoa = ["Eduarda", "Joana", "Wallace", "Rosana"];
var gerente = ["Davi", "Manoela"];
var pessoas1 = pessoa.slice(1, 3);

console.log(pessoa);
console.log(pessoas1);

var empresa = pessoa.concat(gerente);

console.log(empresa);

//FILTER!!
var num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

var result = num.filter(x => x % 2 == 0);
console.log(result);

var numFilter = num.filter(
    function(value){
        return value > 5;
    }
)

console.log(numFilter);

