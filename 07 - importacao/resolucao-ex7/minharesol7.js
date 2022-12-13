

const{print,getEx1,getEx2,getEx3} = require("./entrada-funcao-auxiliar");


// 1) Faça um programa que receba um número e escreva a sua respectiva tabuada.
//     Exemplo:
//         Entrada:
//             2

//         Saída:
//             2x1 = 2
//             2x2 = 4
//             2x3 = 6
//             2x4 = 8
//             2x5 = 10
//             2x6 = 12
//             2x7 = 14
//             2x8 = 16
//             2x9 = 18
//             2x10 = 20

console.log("Exercício 1");

for (let i = 0; i < 21; i++) {
    let produto = getEx1() * i;
    console.log(getEx1() + " X " + i + " = " + produto);
}

console.log();

// 2) Faça um programa que receba a quantidade de números e seus respectivos valores. 
// Imprima o maior e o menor número deste conjunto.

// Exemplo:
//     Entrada:
//         4
//         100
//         150
//         90
//         200

//     Saída:
//         Maior número: 200
//         Menor número: 90

console.log("Exercício 2");
var valorMinimo =50;
var valorMaximo = 0;
for (let i = 0; i < 5; i++) {
    let valor = getEx2();

    if (valor > valorMaximo) { 
        valorMaximo = valor;
    }
    if (valor < valorMinimo) {
        valorMinimo = valor;
    }
}
print("O maior valor da lista é: "+valorMaximo);
print("O menor valor da lista é: "+valorMinimo); 

console.log();

// 3) Faça um programa que receba a quantidade de números e seus respectivos valores.
// Imprima todos os números pares.
// Exemplo:
//     Entrada:
//         5
//         1
//         3
//         9
//         10
//         12

//     Saída:
//         Números Pares: 10, 12

console.log("Exercício 3");
var numPar = [];
for (let i = 0; i < 6; i++) {
    let valor = getEx3();
    if (valor % 2 === 0){
        numPar.push(valor);
    }
}
print("Números Pares: " + numPar);

console.log();