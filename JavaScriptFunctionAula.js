function encontreAssasino() {
    var contador = 0;
    var opcao = prompt("Você telefonou para a vítima?\n1 - Sim \n2 - Não")
    if (opcao == 1) {
        contador++
    }
    opcao = prompt("Esteve no local do crime?\n1 - Sim \n2 - Não")
    if (opcao == 1) {
        contador++
    }
    opcao = prompt("Mora perto da vítima? \n1 - Sim \n2 - Não")
    if (opcao == 1) {
        contador++
    }
    opcao = prompt("Devia para a vítima? \n1 - Sim \n2 - Não")
    if (opcao == 1) {
        contador++
    }
    opcao = prompt("Já trabalho com a vítima? \n1 - Sim \n2 - Não")
    if (opcao == 1) {
        contador++
    }
    if (contador < 2) {
        alert("Você é inocente!")
    } else if (contador == 2) {
        alert("Você é suspeito!")
    } else if (contador >= 3 && contador <=4) {
        alert("Você é Cúmplice!")
    } else {
        alert("Você é o Assassino!!!")
    }

}
function estoqueMedio() {
    let estoque = parseInt(prompt("Qual o estoque atual do produto"))
    let estoquemin = parseInt(prompt("Qual o estoque mínimo do produto"))
    let estoquemax = parseInt(prompt("Qual o estoque máximo do produto"))


   
    let estoqueMedio = Number( (estoquemax + +estoquemin) / 2);

    if (estoque >= estoquemin && estoque <= estoquemax) {
        alert("O seu estoque está dentro do limite.")
        alert('O estoque médio é: ',estoqueMedio)
    } else if (estoque < estoquemin) {
        alert("O seu estoque está abaixo do estoque mínimo, você precisa efetuar a compra do produto.")
        alert('O estoque médio é: ',estoqueMedio)
    } else if (estoque > estoquemax) {
        alert("O seu estoque está acima dos limintes, não precisa de efetuar compras.")
        alert('O estoque médio é: ',estoqueMedio)
    }

}
