
var nome = "Maria"
let valor = 2.3
let idade = 15
let casado = false
let pessoa = {nome: "Lucia", idade: 12}
let cores = ["amarelo", "vemelho", "verde"]

document.writeln(nome + "<br>") // Adiciona uma quebra de linha após cada valor 
document.writeln(valor + "<br>")
document.writeln(casado + "<br>")
document.writeln(JSON.stringify(pessoa) + "<br>") // Para exibir o objeto de forma legível
document.writeln(cores + "<br>") // Para exibir o array de forma legível

document.writeln("<br><hr><br>")

document.writeln("<hr><br>Operadores  Aritméticos<br>")
document.writeln(3+2 + "<br>")
document.writeln(8*2 + "<br>")
document.writeln(10/4 + "<br>")
document.writeln(9-5 + "<br>")
document.writeln("<br>" + "9"+"5 <br>")

var count = 0;  // Define uma variável
document.writeln(count + "<br>")

count++;     // Incrementa a variãvel
document.writeln(count + "<br>")

count--; // Decrementa a variável
document.writeln(count+ "<br>")

count += 2; // Soma 2 o mesmo que count = count + 2
document.writeln(count+ "<br>")

count *= 3; // Multiplica por 3, o mesmo que cout = cont *3,
document.writeln(count+ "<br>")

count // => 6: nomes de variáveis tambem são expressões
document.writeln(count+ "<br>")