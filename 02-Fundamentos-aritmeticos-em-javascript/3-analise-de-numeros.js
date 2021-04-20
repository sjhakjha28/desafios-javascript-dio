/* -Desafio

Você deve fazer a leitura de 5 valores inteiros.
Em seguida mostre quantos valores informados são pares, quantos valores informados são ímpares, quantos valores informados são positivos e quantos valores informados são negativos.

-Entrada
Você receberá 5 valores inteiros.

-Saída
Exiba a mensagem conforme o exemplo de saída abaixo, sendo uma mensagem por linha e não esquecendo o final de linha após cada uma.

-Exemplo de Entrada:
-5
0
-3
-4
12

-Exemplo de Saída:
3 valor(es) par(es)
2 valor(es) impar(es)
1 valor(es) positivo(s)
3 valor(es) negativo(s)

*/

let num = [];
let par = 0;
let impar = 0;
let pos = 0;
let neg = 0;
for(i=0; i < 5; i++){
    num[i]=gets();
    if(num[i]%2 == 0) par++
    else impar++
    if(num[i] > 0) pos++
    else if(num[i] < 0) neg++
}

console.log(`${par} valor(es) par(es)`);
console.log(`${impar} valor(es) impar(es)`);
console.log(`${pos} valor(es) positivo(s)`);
console.log(`${neg} valor(es) negativo(s)`);