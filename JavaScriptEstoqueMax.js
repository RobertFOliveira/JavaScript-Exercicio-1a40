function estoqueMedio() {
    let estoque = parseInt(prompt("Qual o estoque atual do produto"))
    let estoquemin = parseInt(prompt("Qual o estoque mínimo do produto"))
    let estoquemax = parseInt(prompt("Qual o estoque máximo do produto"))


   
    let estoqueMedio =Number( (estoquemax + estoquemin) / 2);

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

function qualoturno(){
    let turno = parseInt(prompt("Qual o turno que você estuda?"))
    
    
    
    if (turno = M)(
        alert("Bom dia!")
    )else if(turno = V){
        alert("Boa tarde!")
    }else if(turno = N){
        alert("Boa noite!")
    }
    
    }
