---
sidebar: auto
prev: /03_GOF
---
# Bridge_Wanderson (GOF) 

## Intenção

“Desacoplar uma abstração da sua implementação, de modo que as duas possam variar independentemente.” (GOF)
“...permite que você divida uma classe grande ou um conjunto de classes intimamente ligadas em duas hierarquias separadas (abstração e implementação) que podem ser desenvolvidas independentemente umas das outras.” (SHVETS, Alexander; 2021)


## Também conhecido como

Handle/Body

## Motivação

Este exemplo ilustra como o padrão Bridge pode ajudar a dividir o código monolítico de uma aplicação que gerencia dispositivos e seus controles remotos. As classes Dispositivo agem como a implementação, enquanto que as classes Controle agem como abstração.

<figure>

```plantuml

!!!include(diagram/bridge.puml)!!!

```
<figcaption>Estrutura do Exemplo prático {Bridge} Fonte (Próprio Autor).</figcaption>
</figure>

A classe de controle remoto base declara um campo de referência que liga ela com um objeto de dispositivo. Todos os controles trabalham com dispositivos através da interface geral de dispositivo, que permite que o mesmo controle suporte múltiplos tipos de dispositivo.
Você pode desenvolver as classes de controle remoto independentemente das classes de dispositivo. Tudo que é necessário é criar uma nova subclasse de controle. Por exemplo, um controle remoto básico pode ter apenas dois botões, mas você pode estendê-lo com funcionalidades adicionais, tais como uma bateria adicional ou touchscreen.
O código cliente liga o tipo de controle remoto desejado com um objeto dispositivo específico através do construtor do controle.

## Aplicabilidade

Use o padrão Bridge quando:
•   desejar evitar um vínculo permanente entre uma abstração e sua implementação. Isso pode ocorrer, por exemplo, quando a implementação deve ser selecionada ou alterada em tempo de execução.
•   tanto as abstrações como suas implementações tiverem de ser extensíveis por meio de subclasses. Neste caso, o padrão Bridge permite combinar as diferentes abstrações e implementações e estendê-las independentemente;
•   mudanças na implementação de uma abstração não puderem ter impacto sobre os clientes; ou seja, quando o código dos mesmos não puder ser recompilado.
•   (C++) você desejar ocultar completamente a implementação de uma abstração dos clientes. Em C++, a representação de uma classe é visível na interface da classe;
•   tiver uma proliferação de classes, como foi mostrado no primeiro diagrama da seção Motivação. Tal hierarquia de classes indica necessidade de separar um objeto em duas partes. Rumbaugh usa o termo “generalizações aninhadas” (nested generalizations) [RPB+91] para se referir às hierarquias de cada classe;
•   desejar compartilhar uma implementação entre múltiplos objetos (talvez usando a contagem de referências) e este fato deve estar oculto do cliente. Um exemplo simples é a classe String mencionada por Coplien [Cop92], na qual múltiplos objetos podem compartilhar a mesma representação de uma string (StringRep).



## Estrutura

<figure>

```plantuml

!!!include(diagram/EstruturaBridge.png)!!!

```

<figcaption>Estrutura padrão Bridge. Fonte: (SHVETS, Alexander. 2021, p.184)</figcaption>
</figure>

## Participantes

1. A Abstração fornece a lógica de controle de alto nível. Ela depende do objeto de implementação para fazer o verdadeiro trabalho de baixo nível.
2. A Implementação declara a interface que é comum para todas as implementações concretas. Um abstração só pode se comunicar com um objeto de implementação através de métodos que são declarados aqui.
A abstração pode listar os mesmos métodos que a implementação, mas geralmente a abstração declara alguns comportamentos complexos que dependem de uma ampla variedade de operações primitivas declaradas pela implementação.
3. Implementações Concretas contém código plataforma-específicos.
4. Abstrações Refinadas fornecem variantes para controle da lógica. Como seu superior, trabalham com diferentes implementações através da interface geral de implementação.
5. Geralmente o Cliente está apenas interessado em trabalhar com a abstração. Contudo, é trabalho do cliente ligar o objeto de abstração com um dos objetos de implementação.


## Colaborações

Abstraction repassa as solicitações dos clientes para o seu objeto Implementor.

## Consequências

Prós

Você pode criar classes e aplicações independentes de plataforma. 
O código cliente trabalha com abstrações em alto nível. Ele não fica exposto a detalhes de plataforma. 
Princípio aberto/fechado. Você pode introduzir novas abstrações e implementações independentemente uma das outras. Princípio de responsabilidade única. 
Você pode focar na lógica de alto nível na abstração e em detalhes de plataforma na implementação. 

Contras

Você pode tornar o código mais complicado ao aplicar o padrão em uma classe altamente coesa.

## Implementação

<code-group>
<code-block title="C++">

!!!include(code/Code1.cpp)!!!


</code-block>

<code-block title="Java">

!!!include(code/Controle/ControleAvancado.java)!!!

!!!include(code/Controle/ControleBasico.java)!!!

!!!include(code/Controle/ControleRemoto.java)!!!

!!!include(code/Dispositivo/Dispositivo.java)!!!

!!!include(code/Dispositivo/Tv.java)!!!

!!!include(code/Dispositivo/Radio.java)!!!

!!!include(code/Executa.java)!!!

</code-block>
</code-group>

## Padrão relacionados

Um padrão Abstract Factory pode criar e configurar uma Bridge específica.
O padrão Adapter é orientado para fazer com que classes não-relacionadas trabalhem em conjunto. Ele é normalmente aplicado a sistemas que já foram projetados.
Por outro lado, Bridge é usado em um projeto, desde o início, para permitir que abstrações e implementações possam variar independentemente.


## Referências

GAMMA, Erich et al. Padrões de Projeto: Soluções reutilizáveis de software orientado a objetos. Porto Alegre. 2000.
SHVETS, Alexander. Mergulho nos Padrões de Projeto. 2021


!!!include(../../ref.md)!!!
