/* -Desafio

Crie um programa que leia 6 valores. Você poderá receber valores negativos e/ou positivos como entrada, devendo desconsiderar os valores nulos. 
Em seguida, apresente a quantidade de valores positivos digitados.

-Entrada
Você receberá seis valores, negativos e/ou positivos.

-Saida
Exiba uma mensagem dizendo quantos valores positivos foram lidos assim como é exibido abaixo no exemplo de saída. 
Não esqueça da mensagem "valores positivos" ao final.

-Exemplo de Entrada:
7
-5
6
-3.4
4.6
12

-Exemplo de Saída:
4 valores positivos

*/

let num = [];
let cont = 0;
for(i=0; i < 6; i++){
    num[i]=parseFloat(gets());
    if(num[i] > 0){
        cont = cont + 1;
    }
}
console.log(`${cont} valores positivos`);