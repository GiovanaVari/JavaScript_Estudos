function sayMyName(name) {
    console.log('Your name is: ' + name);
}

console.log('-----Teste função sayMyName-----')
console.log('Zé\n');



function quadrado(valor) {
    return valor * valor;
}

console.log('-----Teste função quadrado-----')
console.log('10² x 10² = ' + (quadrado(10) + quadrado(10))+'\n');



function incrementarJuros(valor, percentualJuros){
    const valorDeAcrecimo = (percentualJuros / 100) * valor;
    return valor + valorDeAcrecimo;
}

console.log('-----Teste função incrementarJuros-----')
console.log(incrementarJuros(100, 10));
console.log(incrementarJuros(100, 15));
console.log(incrementarJuros(100, 20));

/*
function main() {
    console.log('Programa principal');
}

main()
*/