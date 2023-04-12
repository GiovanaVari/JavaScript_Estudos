/*
3) Elabore um algoritmo que calcule o que deve ser pago por um produto, considerando o preço normal de etiqueta
e a escolha da condição de pagamento.
Utilize os códigos da tabela a seguir para ler qual a condição de pagamento escolhida e efetuar o cálculo adequado.

Código condição de pagamento:
 - Á vista débito, recebe 10% de desconto;
 - Á vista no Dinheiro ou PIX, recebe 15% de desconto;
 - Em duas vezes, preço normal de etiqueta sem juros;
 - Acima de duas vezes, preço normal de etiqueta mais juros de 10%;
*/

const precoEtiqueta = 100;
const formaDePagamento = 4;

if (formaDePagamento === 1){
    const valor = precoEtiqueta - (precoEtiqueta*0.10);
    console.log('R$ ' + valor);
} else if (formaDePagamento === 2){
    const valor = precoEtiqueta - (precoEtiqueta*0.15);
    console.log('R$ ' + valor);
} else if (formaDePagamento === 3){
    const valor = precoEtiqueta;
    console.log('R$ ' + valor);
} else {
    const valor = precoEtiqueta + (precoEtiqueta*0.10);
    console.log('R$ ' + valor);
}