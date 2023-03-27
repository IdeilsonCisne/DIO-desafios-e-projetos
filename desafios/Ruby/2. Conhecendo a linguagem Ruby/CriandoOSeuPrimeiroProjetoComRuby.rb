=begin
Você precisa criar um programa simples de acesso a leitores
em uma biblioteca e para isso o usuário deverá digitar seu
nome e o sobrenome, além de sua idade que é um dado
relevante para o departamento de marketing daquele local.
Tudo isso, impresso, em uma única frase.
=end

puts "*" * 50
puts "Criando o seu primeiro projeto com Ruby"
puts "*" * 50

print "Digite seu nome: "
nome = gets.chomp

print "Digite seu sobrenome: "
sobrenome = gets.chomp

print "Digite sua idade: "
idade = gets.chomp.to_i

puts "Olá #{nome} #{sobrenome}! Seja bem vindo! Sua idade é #{idade} anos."