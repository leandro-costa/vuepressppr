---
sidebar: auto
prev: /03_GOF
---
# {Prototype_Wanderson} (GOF) 

## Intenção

Especificar os tipos de objetos a serem criados usando uma instância-protótipo e criar novos objetivos pela cópia desse protótipo.

## Também conhecido como

## Motivação

Pensando em um desafio de gerenciar frotas de veículos, em que existem muitos veículos com atributos semelhantes, podemos utilizar um Sistema de controle de frotas. Nesse sistema, os usuários poderão criar frotas e configurá-las de acordo com as suas necessidades e especificar suas diferenças (placas, cor e etc.). 
Os usuários geralmente criam frotas com veículos de configurações extremamente parecidas. Diante disso, seria interessante que o sistema tivesse a capacidade de criar um veículo a partir de um outro veículo já criado anteriormente, para que as configurações pudessem ser aproveitadas. 

<figure>

```plantuml

!!!include(diagram/estrutura.puml)!!!

```
<figcaption>Estrutura do Exemplo prático {Prototype} Fonte (Próprio Autor).</figcaption>
</figure>

## Aplicabilidade

•	Utilize o padrão Prototype quando seu código não deve depender de classes concretas de objetos que você precisa copiar.
Isso acontece muito quando seu código funciona com objetos passados para você de um código de terceiros através de alguma interface. As classes concretas desses objetos são desconhecidas, e você não pode depender delas mesmo que quisesse.
O padrão Prototype fornece o código cliente com uma interface geral para trabalhar com todos os objetos que suportam clonagem. Essa interface faz o código do cliente ser independente das classes concretas dos objetos que ele clona.
•	Utilize o padrão quando você precisa reduzir o número de subclasses que somente diferem na forma que inicializam seus respectivos objetos. Alguém pode ter criado essas subclasses para ser capaz de criar objetos com uma configuração específica.
O padrão Prototype permite que você use um conjunto de objetos pré construídos, configurados de diversas formas, como protótipos.
Ao invés de instanciar uma subclasse que coincide com alguma configuração, o cliente pode simplesmente procurar por um protótipo apropriado e cloná-lo.


## Estrutura

<figure>

```plantuml

!!!include(diagram/estrutura1.puml)!!!

```

<figcaption>Estrutura do {Prototype} GOF.</figcaption>
</figure>

## Participantes

•	A interface Protótipo declara os métodos de clonagem. Na maioria dos casos é apenas um método clonar.
(FrotaPrototype) 

•	A classe Protótipo Concreta implementa o método de clonagem. Além de copiar os dados do objeto original para o clone, esse método também pode lidar com alguns casos específicos do processo de clonagem relacionados a clonar objetos ligados, desfazendo dependências recursivas, etc.
(PrototypeCarro, PrototypeMoto, PrototypeOnibus)

•	O Cliente pode produzir uma cópia de qualquer objeto que segue a interface do protótipo.


## Colaborações

Um cliente solicita a um protótipo que clone a si próprio.

## Consequências

Prós

Você pode clonar objetos sem acoplá-los a suas classes concretas.
Você pode se livrar de códigos de inicialização repetidos em troca de clonar protótipos pré-construídos.
Você pode produzir objetos complexos mais convenientemente.
Você tem uma alternativa para herança quando lidar com configurações pré determinadas para objetos complexos.

Contras

Clonar objetos complexos que têm referências circulares pode ser bem complicado.

## Implementação

<code-group>
<code-block title="C++">

!!!include(code/Code1.cpp)!!!


</code-block>

<code-block title="Java">

!!!include(code/Cliente.java)!!!

!!!include(code/FrotaPrototype.java)!!!

!!!include(code/PrototypeCarro.java)!!!

!!!include(code/PrototypeMoto.java)!!!

!!!include(code/PrototypeOnibus.java)!!!

</code-block>
</code-group>

## Padrão relacionados

Muitos projetos começam usando o Factory Method (menos complicado e mais customizável através de subclasses) e evoluem para o Abstract Factory, Prototype, ou Builder.
Classes Abstract Factory são quase sempre baseadas em um conjunto de métodos fábrica, mas você também pode usar o Prototype para compor métodos dessas classes.
Projetos que fazem um uso pesado de Composite e do Decorator podem se beneficiar com frequência do uso do Prototype. Aplicando o padrão permite que você clone estruturas complexas ao invés de reconstruí-las do zero (Prototype, 2022). 


## Referências

GAMMA, Erich et al. Padrões de Projeto: Soluções reutilizáveis de software orientado a objetos. Porto Alegre. 2000.
Prototype. Refactoring Guru. Disponível em: https://refactoring.guru/pt-br/design-patterns/prototype. Acesso em: 07 de abril de 2022.
K19. Design Patterns em Java. 2012


!!!include(../../ref.md)!!!
