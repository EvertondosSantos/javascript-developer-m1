// Exercício1

console.log("EXERCÍCIO 1");
var nota1 = 6;
var nota2 = 8;
var nota3 = 7.5;
var media_notas = (nota1+nota2+nota3)/3
console.log("Sua média é: "+media_notas.toFixed(2))
if (media_notas >= 7){
    console.log("Sua situação é: Aprovado");
}else if (media_notas >= 5 && media_notas < 7){
    console.log("Sua situação é: Recuperação");
}else{
    console.log("Sua situação é: Reprovado");
}
console.log();

// Exercício 2

console.log("EXERCÍCIO 2")
var peso = 88.5;
var altura = 1.85;
var imc = peso / (altura * altura)
if (imc<18.5){
    console.log("Seu imc: "+imc+"\nAbaixo de 18.5 Abaixo do peso");
} else if (imc >= 18.5 && imc < 25){
    console.log("Seu imc: "+imc+"\nEntre 18.5 e 25 Peso normal");
} else if(imc >= 25 && imc < 30){
    console.log("Seu imc: "+imc+ "\nEntre 25 e 30 Acima do peso");
}else if(imc >= 30 && imc < 40){
    console.log("Seu imc: "+imc+ "\nEntre 30 e 40 Obeso");
}else if(imc >= 40){
    console.log("Seu imc: "+imc+ "\nAcima de 40 Obsesidade Grave");
}
console.log();

// Exercício 3

console.log("EXERCÍCIO 3");

var preco_prod = 100.00;
var forma_pagamento = "cartao de credito";
var parcelamento = 3;
var corre_preco_prod = 0;

if (forma_pagamento==="debito"){
    corre_preco_prod = preco_prod * 0.9;
    parcelamento = 0;

}else if(forma_pagamento==="dinheiro" || forma_pagamento==="pix"){
    corre_preco_prod = preco_prod * 0.85;
    parcelamento = 0;

}else if(forma_pagamento==="cartao de credito"){

    if(parcelamento<=2){
        corre_preco_prod=preco_prod;

    }else{
        corre_preco_prod=preco_prod*1.1;
    }
}
console.log("Preço do produto: " + corre_preco_prod.toFixed(2) + " pago em " + forma_pagamento + " com "+parcelamento+" parcelas.");


