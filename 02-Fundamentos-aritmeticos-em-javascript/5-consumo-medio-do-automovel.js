/* -Desafio

Você deve calcular o consumo médio de um automóvel onde será informada a distância total percorrida (em Km) e o total de combustível consumido (em litros).

-Entrada
Você receberá dois valores: um valor inteiro X com a distância total percorrida (em Km), e um valor real Y que representa o total de combustível consumido, com um dígito após o ponto decimal.

-Saída
Exiba o valor que representa o consumo médio do automóvel (3 casas após a vírgula), incluindo no final a mensagem "km/l".

-Exemplo de Entrada:
500
35.0

-Exemplo de Saída:
14.286 km/l

*/

let num = gets();
let num2 = gets();

console.log(`${(num/num2).toFixed(3)} km/l`)