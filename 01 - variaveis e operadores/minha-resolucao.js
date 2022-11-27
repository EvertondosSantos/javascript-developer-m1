var combustivelPreco = 1.69;
var consumoKm_L = 14;
var distanciaKm = 256;

var gasto_viagem = distanciaKm / consumoKm_L * combustivelPreco;
console.log("Valor do combustível (Reais): R$ "+combustivelPreco +" ,00");
console.log("Consumo do veículo (Km/L): "+consumoKm_L);
console.log("Distância a ser percorrida (Km): "+distanciaKm);
console.log("O valor gasto com essa viagem será de: R$ " + gasto_viagem.toFixed(2));
// toFixed faz com que o numero vire uma string, e fique com duas casas decimais