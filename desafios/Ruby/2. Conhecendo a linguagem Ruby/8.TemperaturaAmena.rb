=begin
Desafio
Podemos dizer que até 25°C a temperatura está amena e gostosa e após esse valor já consideramos calor. 
Faça um programa que verifique se a temperatura é maior que 25°C e print no console a seguinte frase: “Está calor!”.

OBS: Para verificarmos se um número é maior ou menor que outro podemos usar os operadores > e <

Entrada
As entradas de teste serão números inteiros NUNCA IGUAIS a constante.

Saída
A saída deverá ser a frase descrita no desafio sem as aspas.
=end

number = gets.to_i
num = 25
if number > num
  puts "Está calor!"
end