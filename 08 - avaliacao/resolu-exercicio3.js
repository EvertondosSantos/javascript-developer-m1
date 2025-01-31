
// 3) Faça um programa que calcule e imprima o salário salário a ser transferido para um funcionário.
// Para realizar o calculo receba o valor bruto do salário e o adicional dos benefícios.
// O salário salário a ser transferido é calculado da seguinte maneira: 
   
//    valor bruto do salário - percentual de imposto mediante a faixa salarial + adicional dos benefícios

// Para calcular o percentual de imposto segue as aliquotas:

//     De R$ 0.00 a R$ 1100.00 = 5.00%
//     De R$ 1100.01 a R$ 2500.00 = 10.00%
//     Maior que R$ 2500.00 = 15.00%

//     Exemplo:
//         Entrada:
//             2000
//             250

//         Saída:
//             2050.00

const { gets, print } = require('./funcoes-auxiliares-ex3');

// var salarioBruto = gets();
// var adicional = gets();

function calcSalario(salarioValor,adicionalValor){
    var percentual = 0;
    if (salarioValor > 0 && salarioValor <= 1100) {
        percentual = 0.95;
    } else if (salarioValor > 1100 && salarioValor <= 2500){
        percentual = 0.90;
    } else {
        percentual = 0.85;
    };

    return ((salarioValor*percentual)+adicionalValor);
}
print(calcSalario(gets(),gets()));