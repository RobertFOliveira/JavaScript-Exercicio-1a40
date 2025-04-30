
//1. A imobiliária Imóbilis vende apenas terrenos retangulares. Faça um algoritmo para ler as dimensões de um terreno e depois exibir a área do terreno.

// Função para calcular a área
function calcularAreaTerreno(largura, comprimento) {
    return largura * comprimento;
}
// Entradas (dimensões do terreno)
let largura = parseFloat(prompt("Digite a largura do terreno (em metros):"));
let comprimento = parseFloat(prompt("Digite o comprimento do terreno (em metros):"));

// Cálculo da área
let area = calcularAreaTerreno(largura, comprimento);

// Exibição do resultado
alert(`A área do terreno é ${area.toFixed(2)} metros quadrados.`);


//2. Faça um algoritmo para calcular quantas ferraduras são necessárias para equipar todos os cavalos comprados para um haras.

// Função para calcular o número total de ferraduras necessárias
function calcularFerraduras(numeroCavalos) {
    const ferradurasPorCavalo = 4; // Cada cavalo necessita de 4 ferraduras
    return numeroCavalos * ferradurasPorCavalo;
}

// Solicitar ao usuário o número de cavalos comprados
const numeroCavalos = parseInt(prompt("Digite o número de cavalos comprados para o haras:"));

// Validar a entrada e exibir o resultado
if (isNaN(numeroCavalos) || numeroCavalos <= 0) {
    console.log("Por favor, insira um número válido e maior que zero para o número de cavalos.");
} else {
    const totalFerraduras = calcularFerraduras(numeroCavalos);
    console.log(`Você precisará de ${totalFerraduras} ferraduras para equipar todos os cavalos.`);
}





//10.
/*Usando Number()*/
console.log("Usando Number - 8")
var a = "5";
var b = 3;
var resultado = Number(a) + b;
console.log(resultado); // 8


//Modelo Usando parseInt
/*Usando parseInt() ou parseFloat()*/
console.log("Usando parseInt() ou parseFloat() - 8.5")
a = "5";
b = "3.5";

let resultado1 = parseInt(a) + parseInt(b);   // 8
console.log(resultado1)
let resultado2 = parseFloat(a) + parseFloat(b); // 8.5
console.log(resultado2)

/*Usando o operador unário + (atalho esperto)*/
console.log("Usando o operador unário + (atalho esperto) - 8")
a = "5";
b = "3";
resultado = +a + +b; // 8
console.log(resultado)

function calcularDistancia(x1, y1, x2,y2) {
    const deltax = x2 - x1;
    const deltax = y2 - y1;
    const distancia = Math.sqrt(deltax ** 2 + deltay ** 2)
}


