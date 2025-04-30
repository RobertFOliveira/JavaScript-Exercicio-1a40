function calcularPadaria(quantidadePaes, quantidadeBroas){
    const precoPao = 0.12;
    const precoBroa = 1.50;
//calcular o total arrecadado
const totalPaes = quantidadePaes * precoPao;
const totalBroas = quantidadeBroas * precoBroa;
const totalArrecadado = totalPaes + totalBroas;

//calcular o valor a ser guardado na poupan~ca (10%)
const valorPoupanca = totalArrecadado * 0.10;

return{ totalArrecadado, valorPoupanca };
}
// Entradas (quantidade de pães e bras vendidas no dia)
let quantidadePaes = parseInt(prompt("Digite a quantidade de pães vendidos: "));
let quantidadeBroas = parseInt(prompt("Digite a quantidade de broas vendidas: "));
// Cálculos
let resultados = calcularPadaria(quantidadePaes, quantidadeBroas);
// Exibição dos resultados
alert(`Total arrecadado: R$ ${resultados.totalArrecado.toFixed(2)}`);
alert(`Valor a guardar na poupança: R$ ${resultados.valorPoupanca.toFixed(2)}`);


