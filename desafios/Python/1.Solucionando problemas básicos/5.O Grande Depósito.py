"""
Desafio
Você foi contratado por um banco para desenvolver um programa que auxilie seus clientes a realizar depósitos em suas contas. 
O programa deve solicitar ao cliente o valor do depósito e verificar se o valor é válido. Se o valor for maior do que zero, 
o programa deve adicionar o valor ao saldo da conta. Caso contrário, o programa deve exibir uma mensagem de erro. 
O programa deve soliticar apenas uma vez o valor de depósito.

Entrada
O programa deve utilizar o Scanner para receber o valor de depósito digitado pelo cliente. 
Os valor pode ser decimal, representando valor em reais.

Saída
O programa deve exibir uma mensagem de sucesso quando um valor de depósito válido for informado e o 
saldo da conta for atualizado. Se o valor for "0", deverá imprimir uma mensagem encerrando o programa. 
Caso um valor inválido seja digitado, o programa deve exibir uma mensagem de erro solicitando um novo valor.

Exemplos
A tabela abaixo apresenta exemplos com alguns dados de entrada e suas respectivas saídas esperadas. 
Certifique-se de testar seu programa com esses exemplos e com outros casos possíveis.
"""

valor = float(input())

if valor > 0:
    saldo_atual = valor  # Substitua isso pelo cálculo do saldo atual
    print("Deposito realizado com sucesso!")
    print(f"Saldo atual: R$ {saldo_atual:.2f}")
elif valor == 0:
    print("Encerrando o programa...")
else:
    print("Valor invalido! Digite um valor maior que zero.")
   