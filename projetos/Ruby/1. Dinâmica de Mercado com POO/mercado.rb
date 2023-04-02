class Mercado
    def initialize  obj_produto
        @obj_produto = obj_produto
    end

    def comprar
        puts "Você comprou o produto #{@obj_produto.nome} no valor de #{@obj_produto.preco}"
    end
end