/*
2) O IMC é um critário da OMS para dar uma indicação sobre a condição de peso de uma pessoa adulta.

Formula do IMC:
IMC = peso / (altura * altura)

Elabore um algoritmo que dado o peso de um adulto mostre sua condição de acordo com a tabela abaixo.

IMC em adultos Condição:
 - Abaixo de 18.5 Abaixo do peso;
 - Entre 18.5 e 25 Peso normal;
 - Entre 25 e 30 Acima do peso;
 - Entre 30 e 40 Obeso;
 - Acima de 40 Obessidade Grave;
*/

const peso = 50.0;
const altura = 1.62;

//Math.pow(altura, 2) potenciação (no caso sera x²)
const imc = peso / Math.pow(altura, 2);
console.log(imc);

if (imc < 18.5) {
  console.log('Abaixo do peso');
} else if (imc >= 18.5 && imc < 25) {
  console.log('Peso normal');
} else if (imc >= 25 && imc < 30) {
  console.log('Acima do peso');
} else if (imc >= 30 && imc < 40) {
  console.log('Obeso');
} else {
  console.log('Obessidade Grave');
}
