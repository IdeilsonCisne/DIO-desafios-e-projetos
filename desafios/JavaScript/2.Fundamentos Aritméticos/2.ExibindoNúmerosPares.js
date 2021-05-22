/**
 * Exibindo Números Pares
 * 
 * Desafio
 *    Crie um programa que leia um número e mostre os números pares até esse número, inclusive ele mesmo.
 * 
 * Entrada
 *    Você receberá 1 valor inteiro N, onde N > 0.
 * 
 * Saída
 *    Exiba todos os números pares até o valor de entrada, sendo um em cada linha. 
 */

let valor = parseInt(gets());

for(i = 1; i <= valor; i++){
  if(i % 2 == 0){
    console.log(i)
  }
}