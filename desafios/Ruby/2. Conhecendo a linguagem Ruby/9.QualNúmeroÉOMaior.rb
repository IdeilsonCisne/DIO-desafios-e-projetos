=begin

Desafio
Crie um programa que verifique, entre duas entradas, qual número é o maior e qual é o menor e 
print eles no console dizendo “O número X é o maior e o Y é o menor” substituindo X e Y pelas entradas.

Entradas
As entradas serão dois números inteiros NUNCA iguais.

Saída
A saída deverá ser a frase indicando qual número é o maior e qual é o menor.

=end

number1 = gets.to_i
number2 = gets.to_i
if number1 > number2
  puts "O número #{number1} é o maior e o #{number2} é o menor"
else
  puts "O número #{number2} é o maior e o #{number1} é o menor"
end