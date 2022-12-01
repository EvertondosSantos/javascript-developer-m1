// 1) Crie uma classe para representar carros. 
// Os carros possuem uma marca, uma cor e um gasto médio de combustível por Kilômetro rodado.
// Crie um método que dado a quantidade de quilómetros e o preço do combustível nos dê o valor 
// gasto em reais para realizar este percurso.

class Carro{
    marca;
    cor;
    consumo;

    constructor(marca,cor,consumo){
        this.marca= marca;
        this.cor= cor;
        this.consumo = consumo;
    }

}

const car1 = new Carro("Ford","Azul",16);
const car2 = new Carro("Fiat","Branco",17);
console.log(car1);
console.log(car2);



function custo_viagem(distancia,valor_combustivel){
    var custo = distancia/car1.consumo*valor_combustivel;
    console.log(`O ${car1.marca} terá um gasto de ${custo} dinheiros`);
    var custo = distancia/car2.consumo*valor_combustivel;
    console.log(`O ${car2.marca} terá um gasto de ${custo} dinheiros.`);
}
custo_viagem(300,2.5);



// 2) Crie uma classe para representar pessoas.
// Para cada pessoa teremos os atributos nome, peso e altura.
// As pessoas devem ter a capacidade de dizer o valor do seu IMC (IMC = peso / (altura * altura));
// Instancie uma pessoa chamada José que tenha 70kg de peso e 1,75 de altura e peça ao José para dizer o valor
// do seu IMC;

class Pessoa{
    nome;
    peso;
    altura;
    constructor(nome,peso,altura){
        this.nome = nome;
        this.peso = peso;
        this.altura = altura;
    }
    valor_imc() {
        return this.peso / (this.altura * this.altura);
    }
}

const jose = new Pessoa("José",83,1.82);

console.log(jose.valor_imc());
