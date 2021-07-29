---
sidebar: auto
prev: ../03_GOF
---
# Abstract Factory (GOF) 🔨



## Intenção

Fornecer uma interface para criação de famílias de objetos relacionados ou dependentes sem especificar suas classes concretas.

## Também conhecido como

Kit

## Motivação
Considere um toolkit para construção de interfaces de usuários que suporte múltiplos estilos de interação (look-and-feel) tais como o *Motif* e o *Presentation Manager*. Diferentes estilos de interação definem diferentes apresentações e comportamento para os widgets de uma interface de usuário, tais como barras de rolamento, janelas e botões. Para ser portátil entre vários estilos de aparência, uma aplicação não deve codificar rigidamente seus widgets para um determinado padrão. Instanciando classes específicas de estilo de interação para os widgets pela aplicação toda, torna difícil mudar o estilo no futuro.

Podemos resolver esse problema definindo uma classe abstrata `WidgetFactory` que declara uma interface para criação de cada tipo básico de widget. Existe também uma classe abstrata para cada tipo de widget, e subclasses concretas implementam os widgets para interação. A interface de `WidgetFactory` tem uma operação que retorna um novo objeto widget para cada classe abstrata de widget. Os clientes chamam estas operações para obter instâncias de widget, mas não têm conhecimento das classes concretas que estão usando. Desta forma, os clientes ficam independentes do padrão de interação usado no momento.

<figure>

@startuml
abstract class WidgetFactory{
    {abstract} createWindow()
    {abstract} createScrollBar()
}

class MotifWidgetFactory{
    createWindow()
    createScrollBar()
}

class PMWidgetFactory{
    createWindow()
    createScrollBar()
}
MotifWidgetFactory --|> WidgetFactory
PMWidgetFactory --|> WidgetFactory

interface Window
class PMWindow
class MotifWindow

Window <|..PMWindow
Window <|..MotifWindow

interface ScrollBar
class PMScrollBar
class MotifScrollBar

ScrollBar <|..PMScrollBar
ScrollBar <|..MotifScrollBar

Cliente --> Window
Cliente --> ScrollBar
WidgetFactory <-- Cliente 


MotifWidgetFactory .> MotifWindow
MotifWidgetFactory .> MotifScrollBar

PMWidgetFactory .> PMWindow
PMWidgetFactory .> PMScrollBar

hide empty attributes
hide empty methods

@enduml

<figcaption>Abstract Factory.</figcaption>
</figure>

Existe uma subclasse concreta de `WidgetFactory` para cada estilo de interação. Cada subclasse implementa as operações para criar o widget apropriado para aquele estilo de interação. Por exemplo, a operação `createScrollBar` aplicada à `MotifWidgetFactory` instancia e retorna uma barra de rolamento de acordo com o Motif, enquanto que a correspondente operação aplicada à `PMWidgetFactory` retorna uma barra de rolamento para o Presentation Manager. Os clientes criam widgets exclusivamente através da interface de `WidgetFactory` e não tem conhecimento das classes que implementam os widgets para um padrão em particular. Em outras palavras, os clientes têm somente que se comprometer com uma interface definida por uma classe abstrata, não uma determinada classe concreta. Uma `WidgetFactory` também implementa e garante as dependências entre as classes concretas de widgets. Uma barra de rolamento Motif deveria ser usada com um botão Motif e um editor de textos Motif, e essa restrição é garantida automaticamente como consequência de usar uma `MotifWidgetFactory`.


## Aplicabilidade
## Estrutura
## Participantes
## Colaborações
## Consequências
## Implementação
## Exemplo de código
## Usos conhecidos
## Padrão relacionados