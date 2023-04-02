require_relative "produto"
require_relative "mercado"

class App
end

produto = Produto.new
produto.nome = "Produto1"
produto.preco = 12.5

mercado = Mercado.new(produto).comprar
puts mercado