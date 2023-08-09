var valores = [8, 1, 7, 2, 9];

//console.log(valores[3]);

for(var i = 0; i < valores.length; i++ ){
    console.log(valores[i])
}

var carros = [];
carros[0] = "BMW";
carros[1] = "Eclipse"

var motos = new Array("Yamaha", "Honda");

/*código em java
    int[] valores = {8, 1, 7, 2, 9};
    for(int i = 0; i < valores.length; i++){
        Sysem.ou.println(valores[i])
    }
*/

//Calcular a média de todos os numeros de um array

var soma = 0;
for(var i = 0; i < valores.length; i++){
    soma += valores[i];
}

var media = soma/valores.length;

console.log(media);