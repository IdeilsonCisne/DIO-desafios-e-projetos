=begin
Desafio
Crie um programa que, dadas duas listas de números inteiros e tamanho igual, 
some os índices pares de cada uma delas e print no console uma nova lista resultante dessa operação.

Entrada
As entradas serão duas listas.

Saída
A saída deverá ser uma nova lista com o resultado da soma dos índices pares das duas primeiras.
=end

lista1 = "20, 21, 22, 23, 24"
lista2 = "2, 3, 4, 5, 6"
lista1 = lista1.split(", ").map{|e| e.to_i}
lista2 = lista2.split(", ").map{|e| e.to_i}

soma = []

lista1.each_with_index do |elemento, index|
  if index.even?
    soma << elemento + lista2[index]
  end
end

soma = soma.join(",")
puts soma
