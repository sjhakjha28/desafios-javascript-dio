/* -Desafio

Você receberá dois valores inteiros. Faça a leitura e em seguida calcule o produto entre estes dois valores. 
Atribua esta operação à variável PROD, mostrando esta de acordo com a mensagem de saída esperada (exemplo abaixo).   

-Entrada
A entrada contém 2 valores inteiros.

-Saida
Exiba a variável PROD conforme exemplo abaixo, tendo obrigatoriamente um espaço em branco antes e depois da igualdade.

-Exemplo de Entrada:
3
9

-Exemplo de Saída: 
PROD = 27

*/

let valor1 = parseInt(gets());
let valor2 = parseInt(gets());
let total = valor1 * valor2; // Altere o valor da variável com o cálculo esperado 
console.log("PROD = " + total);