# Prototype 

## Intenção (GOF)

Especificar os tipos de objetos a serem criados usando uma instância-protótipo e criar novos objetivos pela cópia desse protótipo.

## Exemplo prático

Pensando em um desafio de gerenciar frotas de veículos, em que existem muitos veículos com atributos semelhantes, podemos utilizar um Sistema de controle de frotas. Nesse sistema, os usuários poderão criar frotas e configurá-las de acordo com as suas necessidades e especificar suas diferenças (placas, cor e etc.). 
Os usuários geralmente criam frotas com veículos de configurações extremamente parecidas. Diante disso, seria interessante que o sistema tivesse a capacidade de criar um veículo a partir de um outro veículo já criado anteriormente, para que as configurações pudessem ser aproveitadas. 

