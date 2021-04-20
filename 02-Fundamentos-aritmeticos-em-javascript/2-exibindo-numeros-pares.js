/* -Desafio

Crie um programa que leia um número e mostre os números pares até esse número, inclusive ele mesmo.

-Entrada
Você receberá 1 valor inteiro N, onde N > 0.

-Saída
Exiba todos os números pares até o valor de entrada, sendo um em cada linha. 

-Exemplo de Entrada:
6

-Exemplo de Saída:
2
4
6

*/

let num = gets();
let result = 0;
if (num%2 == 0){
    for(i=1;result != num;i++){
        result = i * 2;
        console.log(result)
    }
}
else{
    for(i=1;result < num-1;i++){
        result = i * 2;
        console.log(result)
    }
}