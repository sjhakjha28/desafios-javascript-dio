/* -Desafio

Crie um programa onde você receberá valores inteiros não negativos como entrada.

Ordene estes valores de acordo com o seguinte critério:
Primeiro os Pares
Depois os Impares
Você deve exibir os pares em ordem crescente e na sequência os ímpares em ordem decrescente.

-Entrada
A primeira linha de entrada contém um único inteiro positivo N (1 < N < 10000) Este é o número de linhas de entrada que vem logo a seguir. As próximas N linhas terão, cada uma delas, um valor inteiro não negativo.

-Saida
Exiba todos os valores lidos na entrada segundo a ordem apresentada acima. Cada número deve ser impresso em uma linha, conforme exemplo de saída abaixo.

-Exemplo de Entrada:
10
4
32
34
543
3456
654
567
87
6789
98


-Exemplo de Saida:
4
32
34
98
654
3456
6789
567
543
87

*/

let totalItems = gets();
let items = [];
let pares = [];
impares = [];

for (let i = 0; i < totalItems; i++) {
    items.push(parseInt(gets()));
    if (items[i] % 2 == 0) pares.push(items[i]);
    else impares.push(items[i]);
}

pares = ordenaArray(pares);
impares = ordenaArray(impares);

for (item of pares) {
    console.log(item);
}

for (item of impares.reverse()) {
    console.log(item);
}

function ordenaArray(array) {
    array = array.sort(function (a, b) {
        return a - b;
    })
    return array;
}

