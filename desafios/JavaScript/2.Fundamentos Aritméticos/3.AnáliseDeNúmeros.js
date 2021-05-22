/**
 * Análise de Números
 * 
 * Desafio
 *    Você deve fazer a leitura de 5 valores inteiros. Em seguida mostre quantos valores informados 
 * são pares, quantos valores informados são ímpares, quantos valores informados são positivos e 
 * quantos valores informados são negativos.
 * 
 * Entrada
 *    Você receberá 5 valores inteiros.
 * 
 * Saída
 *    Exiba a mensagem conforme o exemplo de saída abaixo, sendo uma mensagem por linha e não 
 * esquecendo o final de linha após cada uma.
 */

let value = 4;
let number;
let count_even = 0;
let count_odd = 0;
let count_positive = 0;
let count_negative = 0;

for(i = 0; i <= value; i++){
  number = parseInt(gets());
  
  if(number % 2 == 0){
    count_even++;
  }
  
  if(number % 2 != 0){
    count_odd++;
  }
  
  if(number > 0 ){
    count_positive++;
  }
  
  if(number < 0){
    count_negative++;
  }
}

console.log(count_even + " valor(es) par(es)")
console.log(count_odd + " valor(es) impar(es)")
console.log(count_positive + " valor(es) positivo(s)")
console.log(count_negative + " valor(es) negativo(s)")