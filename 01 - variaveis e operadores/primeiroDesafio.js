const precoCombustivel = 3.79;
const mediaKmPorLitro = 8;
const distanciaEmKm = 100;

const consumo = distanciaEmKm / mediaKmPorLitro;
const valor = consumo * precoCombustivel;

//.toFixed(2) = arredonda o número
console.log(valor.toFixed(2));