
// 2) Faça um programa que receba N (quantidade de números) e seus respectivos valores.
// Imprima o maior número par e o menor número impar.

//     Exemplo:
//         Entrada:
//             5
//             3
//             4
//             1
//             10
//             8

//         Saída:
//             Maior número par: 10
//             Menor número impar: 1

const { gets, print } = require('./funcoes-auxiliares-ex2');

var nPar = [];
var nImpar = [];

for (let i = 0; i < 6; i++) {
    valor = gets();
    if (valor % 2 === 0){
        nPar.push(valor);
        var maiorPar = valor; //Para ter um valor que esteja na lista, se eu colocar ZERO pode ser que não esteja na lista e ainda sim seja o maior valor
    } else {
        nImpar.push(valor)
        var menorImpar = valor; //Para ter um valor que esteja na lista, se eu colocar ZERO pode ser que não esteja na lista e ainda sim seja o menor valor
    }
}
for (let elemento of nImpar) {
    if (elemento < menorImpar){
        menorImpar=elemento;
    }
}
for (let elemento of nPar) {
    if (elemento > maiorPar){
        maiorPar=elemento;
    }
}
print("Maior número par: "+maiorPar);
print("Menor número impar: "+menorImpar);