=begin
    
Necessário instalação da gem
`gem install cpf_cnpj`
    
=end

require 'cpf_cnpj'

def checkar_validade(numero_cpf)
  CPF.valid?(numero_cpf) ? "CPF válido" : "CPF inválido"
end

puts "\\====\\" * 7
puts "  \\====\\\ Desafio Consulta de CPF \\\\====\\"
puts "\\====\\" * 7

print "Digite um número de CPF: "
cpf = gets.chomp
p checkar_validade(cpf)