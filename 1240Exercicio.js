
// Questão 12
function salario_a(){
    let salario = prompt("Qual o seu salario: ")

    let ajuste_salario = (salario * aumento)/100
    let desconto_salario = (ajuste_salario * 8)/100

}
// Questão 13

function decompor_numero() {
    let numero = prompt("Digite um número até três dígitos:")
    numero = parseInt(numero)

    let centena = Math.floor(numero / 100)
    let dezena = Math.floor((numero % 100) / 10)
    let unidade = numero % 10

    alert("CENTENA = " + centena + "\nDEZENA = " + dezena + "\nUNIDADE = " + unidade)
}


// Questão 14
function area_pizza() {
    let raio = prompt("Digite o raio da pizza:")
    raio = parseFloat(raio)

    let area = 3.14 * raio * raio
    alert("A área da pizza é: " + area.toFixed(2) + " cm²")
}

// Questão 15
function dividir_conta() {
    let total = prompt("Digite o valor total da conta:")
    total = parseFloat(total)

    let carlos = Math.floor(total / 3)
    let andre = Math.floor(total / 3)
    let felipe = total - carlos - andre

    alert("Carlos: R$" + carlos.toFixed(2) +
          "\nAndré: R$" + andre.toFixed(2) +
          "\nFelipe: R$" + felipe.toFixed(2))
}

// Questão 16
function ingredientes_sanduiche() {
    let quantidade = prompt("Digite a quantidade de sanduíches:")
    quantidade = parseInt(quantidade)

    let queijo = (quantidade * 2 * 50) / 1000
    let presunto = (quantidade * 50) / 1000
    let carne = (quantidade * 100) / 1000

    alert("Queijo: " + queijo + " kg\nPresunto: " + presunto + " kg\nCarne: " + carne + " kg")
}

// Questão 17
function celsius_para_f() {
    let celsius = prompt("Digite a temperatura em Celsius:")
    celsius = parseFloat(celsius)

    let fahrenheit = (celsius * 9/5) + 32
    alert("Temperatura em Fahrenheit: " + fahrenheit.toFixed(2))
}

// Questão 18
function salario_total() {
    let h_normais = prompt("Horas normais trabalhadas:")
    let h_extras = prompt("Horas extras trabalhadas:")

    h_normais = parseInt(h_normais)
    h_extras = parseInt(h_extras)

    let bruto = (h_normais * 10) + (h_extras * 15)
    let liquido = bruto * 0.9

    alert("Salário bruto: R$" + bruto.toFixed(2) +
          "\nSalário líquido: R$" + liquido.toFixed(2))
}

// Questão 19
function gasto_aneis() {
    let frangos = prompt("Quantidade de frangos:")
    frangos = parseInt(frangos)

    let gasto = frangos * (4 + 2 * 3.5)
    alert("Gasto total: R$" + gasto.toFixed(2))
}


// Questão 20
function novelos_por_blusa() {
    let total_blusas = prompt("Quantidade de blusas:")
    let total_novelos = prompt("Quantidade total de novelos:")

    let resultado = parseFloat(total_novelos) / parseFloat(total_blusas)
    alert("Novelos por blusa: " + resultado.toFixed(2))
}

// Questão 21
function litros_refrigerante() {
    let latas = prompt("Quantidade de latas (350ml):")
    let garrafas600 = prompt("Quantidade de garrafas (600ml):")
    let garrafas2l = prompt("Quantidade de garrafas (2L):")

    let total = (latas * 0.35) + (garrafas600 * 0.6) + (garrafas2l * 2)
    alert("Total comprado: " + total.toFixed(2) + " litros")
}

// Questão 22
function cofrinho() {
    let m1 = prompt("Moedas de 1 centavo:")
    let m5 = prompt("Moedas de 5 centavos:")
    let m10 = prompt("Moedas de 10 centavos:")
    let m25 = prompt("Moedas de 25 centavos:")
    let m50 = prompt("Moedas de 50 centavos:")
    let m1r = prompt("Moedas de 1 real:")

    let total = m1*0.01 + m5*0.05 + m10*0.10 + m25*0.25 + m50*0.50 + m1r*1.00
    alert("Total economizado: R$" + total.toFixed(2))
}

// Questão 23

function altura_predio() {
    let altura_pessoa = prompt("Sua altura:")
    let sombra_pessoa = prompt("Comprimento da sua sombra:")
    let sombra_predio = prompt("Comprimento da sombra do prédio:")

    let altura = (altura_pessoa / sombra_pessoa) * sombra_predio
    alert("Altura do prédio: " + altura.toFixed(2) + " metros")
}

// Questão 24

function refresco() {
    let total_litros = prompt("Litros de refresco desejado:")
    total_litros = parseFloat(total_litros)

    let agua = (total_litros * 8) / 10
    let suco = (total_litros * 2) / 10

    alert("Água: " + agua + "L\nSuco: " + suco + "L")
}


// Questão 25


function volume_cilindro() {
    let raio = prompt("Digite o raio da base:")
    let altura = prompt("Digite a altura:")

    let volume = 3.14 * raio * raio * altura
    alert("Volume: " + volume.toFixed(2) + " litros")
}

// Questão 26
function multiplicacao() {
    let n1 = prompt("Digite o primeiro número:")
    let n2 = prompt("Digite o segundo número:")
    let n3 = prompt("Digite o terceiro número:")

    let resultado = n1 * n2 * n3
    alert("Resultado: " + resultado)
}

// Questão 27
function divisao() {
    let n1 = prompt("Digite o numerador:")
    let n2 = prompt("Digite o denominador:")

    let resultado = n1 / n2
    alert("Resultado: " + resultado)
}

// Questão 28
function media_ponderada() {
    let n1 = prompt("Nota 1:")
    let n2 = prompt("Nota 2:")

    let media = (n1 * 2 + n2 * 3) / 5
    alert("Média ponderada: " + media.toFixed(2))
}

// Questão 29
function desconto_produto() {
    let preco = prompt("Preço do produto:")
    let novo_preco = preco * 0.9
    alert("Novo preço: R$" + novo_preco.toFixed(2))
}

// Questão 30
function salario_com_comissao() {
    let salario_fixo = prompt("Salário fixo:")
    let vendas = prompt("Valor das vendas:")

    let comissao = vendas * 0.04
    let total = parseFloat(salario_fixo) + comissao

    alert("Comissão: R$" + comissao.toFixed(2) + "\nSalário final: R$" + total.toFixed(2))
}

// Questão 31
function peso_novo() {
    let peso = prompt("Digite seu peso:")

    let engordar = peso * 1.15
    let emagrecer = peso * 0.80

    alert("Se engordar 15%: " + engordar.toFixed(2) + " kg" +
          "\nSe emagrecer 20%: " + emagrecer.toFixed(2) + " kg")
}

// Questão 32
function peso_gramas() {
    let peso = prompt("Peso em kg:")
    let gramas = peso * 1000
    alert("Peso em gramas: " + gramas + "g")
}

// Questão 33
function area_trapezio() {
    let b_maior = prompt("Base maior:")
    let b_menor = prompt("Base menor:")
    let altura = prompt("Altura:")

    let area = ((parseFloat(b_maior) + parseFloat(b_menor)) * altura) / 2
    alert("Área do trapézio: " + area.toFixed(2))
}

// Questão 34
function area_quadrado() {
    let lado = prompt("Lado do quadrado:")
    let area = lado * lado
    alert("Área do quadrado: " + area)
}

// Questão 35
function area_losango() {
    let d_maior = prompt("Diagonal maior:")
    let d_menor = prompt("Diagonal menor:")

    let area = (d_maior * d_menor) / 2
    alert("Área do losango: " + area)
}

// Questão 36
function qtd_salarios() {
    let salario_min = prompt("Valor do salário mínimo:")
    let salario_func = prompt("Salário do funcionário:")

    let qtd = salario_func / salario_min
    alert("Quantidade de salários mínimos: " + qtd.toFixed(2))
}

// Questão 37
function tabuada() {
    let numero = prompt("Digite um número:")
    numero = parseInt(numero)

    let resultado = ""
    for (let i = 1; i <= 10; i++) {
        resultado += numero + " x " + i + " = " + (numero * i) + "\n"
    }
    alert(resultado)
}

// Questão 38
function idade_completa() {
    let nascimento = prompt("Ano de nascimento:")
    let atual = prompt("Ano atual:")

    let anos = atual - nascimento
    let meses = anos * 12
    let dias = anos * 365
    let semanas = Math.floor(dias / 7)

    alert("Anos: " + anos + "\nMeses: " + meses + "\nDias: " + dias + "\nSemanas: " + semanas)
}


// Questão 40

function hipotenusa_() {
    let cat1 = prompt("Cateto 1:")
    let cat2 = prompt("Cateto 2:")

    let h = Math.sqrt(cat1**2 + cat2**2)
    alert("Hipotenusa: " + h.toFixed(2))
}


