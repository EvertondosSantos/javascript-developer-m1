// 1) Faça um programa que receba a média de um aluno.
// Caso a média seja < 5 imprima "Reprovado"
// Caso a média seja >= 5 e < 7 imprima "Recuperação"
// Caso a média seja >= 7 imprima "Aprovado"

//     Exemplo:
//         Entrada:
//             5.5
//         Saída:
//             Recuperação

const { gets, print } = require('./funcoes-auxiliares-ex1');

var mediaAluno = gets();
print("Média do Aluno: "+mediaAluno);
print("Condição: ");
if (mediaAluno >=5 && mediaAluno < 7){
    print("Recuperação");
} else if (mediaAluno > 7) {
    print("Aprovado");
} else {
    print("Reprovado");
}