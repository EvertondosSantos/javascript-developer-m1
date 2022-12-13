

const ex1 = 2;
const ex2 = [4,100,150,90,200];
const ex3 = [5,1,3,9,10,12];

let iEx2 = 0;
let iEx3 = 0;

function getEx1() {
    return 2;
}

function getEx2() {
    let index = ex2[iEx2];
    iEx2++;
    return index;    
}

function getEx3() {
    let index = ex3[iEx3];
    iEx3++;
    return index;   
}

function print(texto){
    return console.log(texto);
}


module.exports={print,getEx1,getEx2,getEx3};