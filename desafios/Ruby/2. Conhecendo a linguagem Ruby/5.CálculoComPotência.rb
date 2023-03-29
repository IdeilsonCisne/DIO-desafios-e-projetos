puts "\\====\\" * 7
puts "\\====\\\ Desafio Cálculo com potência \\\\====\\"
puts "\\====\\" * 7

numeros = []
3.times do 
    print "Digite um número: "
    numero = gets.chomp.to_i
    numeros.push(numero)
end

p "Números digitados: #{numeros}"
numeros.map! do |n|
    n ** 3
end

p "Números elevado a 3ª potência: #{numeros}"