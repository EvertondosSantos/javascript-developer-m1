function combustivel(){
    var valor = 0;
    var combustivelTipo=prompt("Escolha gasolina, alcool ou gnv:");

    if (combustivelTipo === "gasolina"){
        valor = 5;
        viagem(valor);
    } else if (combustivelTipo === "alcool") {
        valor = 4;
        viagem(valor);
    } else if (combustivelTipo === "gnv") {
        valor =3;
        viagem(valor);
    } else{
        console.log("Combustivel inválido");
        combustivel();
    }

    function viagem(valor){
        var combustivelPreco = valor;
        var consumoKm_L = 14;
        var distanciaKm = 256;

        var gasto_viagem = distanciaKm / consumoKm_L * combustivelPreco;
        console.log("Valor do combustível (Reais): R$ "+combustivelPreco +" ,00");
        console.log("Consumo do veículo (Km/L): "+consumoKm_L);
        console.log("Distância a ser percorrida (Km): "+distanciaKm);
        console.log("O valor gasto com essa viagem será de: R$ " + gasto_viagem.toFixed(2));
    }
}
combustivel();