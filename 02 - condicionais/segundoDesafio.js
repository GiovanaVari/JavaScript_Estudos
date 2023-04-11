const precoEtanol = 3.79;
const precoGasolina = 5.79;
const mediaKmPorLitro = 10;
const distanciaEmKm = 100;
const tipoCombustivel = 'Etanol';

const consumo = distanciaEmKm / mediaKmPorLitro;

if (tipoCombustivel === 'Etanol') {
    const valor = consumo * precoEtanol;
    //.toFixed(2) = arredonda o número
    console.log(valor.toFixed(2));
} else {
    const valor = consumo * precoGasolina;
    //.toFixed(2) = arredonda o número
    console.log(valor.toFixed(2));
}


