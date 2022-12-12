// 1) Crie um programa que dado um número imprima a sua tabuada.
console.log("Exercicio 1");
var tabuada = 5;
for (let i = 0; i < 10; i++) {
    let calculo = tabuada * i;
    console.log(tabuada + " x " + i + " = " + calculo)   
};
console.log();
// 2) Crie um programa que seja capaz de percorrer uma lista de números e imprima cada número Par encontrado.
console.log("Exercicio 2");
var lista1 = [1,2,3,4,5,6,7,8,9,10,11,12,13,14];
for (let numero of lista1) {
    if (numero % 2 === 0) {
        console.log(numero);
    };
}
console.log();
// 3) Faça um programa que dado uma lista de nomes imprima os nomes que começem com a letra "V".
console.log("Exercicio 3");
var listaPalavras = ["João","Miguel","Mateus","Julio","Vitor","Vitória","Amanda"];

for (let palavra of listaPalavras) {
    for (let letra of palavra) {
        if (letra[0]==="V") {
            console.log(palavra);            
        }
    }
}
console.log();

// 4) Faça um programa que preencha uma lista com todos os números pares contidos no intervalo de 10 a 50;
console.log("Exercico 4");
var listaPar = [];
for (let i = 10; i < 51; i++) {
    if (i % 2 === 0) {
        listaPar.push(i);        
    }
}
console.log(listaPar);
console.log();

// 5) Dado uma lista com as médias tiradas pelos alunos. Imprima todas as médias que ficaram de recuperação (média < 5).
//    Ex de lista = [2, 7, 3, 8, 10, 4]
console.log("Exercicio 5");
function media() {
    let listaMedias = [2,7,3,8,10,4];
    for (let i = 0; i < listaMedias.length; i++) {
        if (listaMedias[i] < 5) {
            console.log("Aluno"+i+" Está de recuperação com média: "+listaMedias[i]);
        }
    }
}
media();
console.log();

// 6) Dado uma lista com as notas tiradas pelos alunos. imprima a maior nota.
//    Ex de lista de notas = [2, 7, 3, 8, 10, 4]
console.log("Exercicio 6");
function maiorNota() {
    let listaNotas = [2, 7, 3, 8, 10, 4];
    let notaNova = 0;
    for (let nota of listaNotas) {
        if (notaNova < nota) {
            notaNova = nota;
        }
    }
    console.log("A maior nota é: " + notaNova);
}
maiorNota();