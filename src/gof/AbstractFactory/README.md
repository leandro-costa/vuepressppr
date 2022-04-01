---
sidebar: auto
prev: /03_GOF
---
# Abstract Factory (GOF) ✅



## Intenção

Fornecer uma interface para criação de famílias de objetos relacionados ou dependentes sem especificar suas classes concretas.

## Também conhecido como

Kit

## Motivação
Considere um toolkit para construção de interfaces de usuários que suporte múltiplos estilos de interação (look-and-feel) tais como o *Motif* e o *Presentation Manager*. Diferentes estilos de interação definem diferentes apresentações e comportamento para os widgets de uma interface de usuário, tais como barras de rolamento, janelas e botões. Para ser portátil entre vários estilos de aparência, uma aplicação não deve codificar rigidamente seus widgets para um determinado padrão. Instanciando classes específicas de estilo de interação para os widgets pela aplicação toda, torna difícil mudar o estilo no futuro.

Podemos resolver esse problema definindo uma classe abstrata `WidgetFactory` que declara uma interface para criação de cada tipo básico de widget. Existe também uma classe abstrata para cada tipo de widget, e subclasses concretas implementam os widgets para interação. A interface de `WidgetFactory` tem uma operação que retorna um novo objeto widget para cada classe abstrata de widget. Os clientes chamam estas operações para obter instâncias de widget, mas não têm conhecimento das classes concretas que estão usando. Desta forma, os clientes ficam independentes do padrão de interação usado no momento.

<figure>

!!!include(src/gof/AbstractFactory/diagram/toolkit.puml)!!!

<figcaption>Toolkit para construção de interfaces gráficas.</figcaption>
</figure>

Existe uma subclasse concreta de `WidgetFactory` para cada estilo de interação. Cada subclasse implementa as operações para criar o widget apropriado para aquele estilo de interação. Por exemplo, a operação `createScrollBar` aplicada à `MotifWidgetFactory` instancia e retorna uma barra de rolamento de acordo com o Motif, enquanto que a correspondente operação aplicada à `PMWidgetFactory` retorna uma barra de rolamento para o Presentation Manager. Os clientes criam widgets exclusivamente através da interface de `WidgetFactory` e não tem conhecimento das classes que implementam os widgets para um padrão em particular. Em outras palavras, os clientes têm somente que se comprometer com uma interface definida por uma classe abstrata, não uma determinada classe concreta. Uma `WidgetFactory` também implementa e garante as dependências entre as classes concretas de widgets. Uma barra de rolamento Motif deveria ser usada com um botão Motif e um editor de textos Motif, e essa restrição é garantida automaticamente como consequência de usar uma `MotifWidgetFactory`.


## Aplicabilidade

Use o padrão Abstract Factory quando:
- um sistema deve ser independente de como seus produtos são criados, compostos ou representados;
- um sistema deve ser configurado como um produto de uma família de múltiplos produtos;
- uma família de objetos-produto for projetada para ser usada em conjunto, e você necessita garantir esta restrição;
- você quer fornecer uma biblioteca de classes de produtos e quer revelar somente suas interfaces, não suas implementações.

## Estrutura

<figure>

!!!include(src/gof/AbstractFactory/diagram/estrutura.puml)!!!

<figcaption>Estrutura do Abstract Factory.</figcaption>
</figure>

## Participantes

- **AbstractFactory** (WidgetFactory)
    - declara uma interface para operações que criam objetos-produto abstratos.
- **ConcreteFactory** (MotifWidgetFactory, PMWidgetFactory)
    - implementa as operações que criam objetos-produto concretos.
- **AbstractProduct** (Window, ScrollBar)
    - declara uma interface para um tipo de objeto-produto
- **ConcreteProduct** (MotifWindow, MotifScrollBar)
    - define um objeto-produto a ser criado pela correspondente fábrica concreta.
    - implementa a interface de Abstract Product.
- **Client**
    - usa somente interfaces declaradas pelas classes Abstract Factory e Abstract Product.

## Colaborações

- Normalmente uma única instância de uma classe ConcreteFactory é criada em tempo de execução. Essa fábrica concreta cria objetos-produto que têm uma implementação particular. Para criar diferentes objetos-produto, os clientes deveriam usar uma fábrica concreta diferente.
- AbstractFactory adia a criação dos objetos-produto para as suas subclasses ConcreteFactory.

## Consequências

O padrão Abstract Factory tem os seguintes benefícios e desvantagens:

1. Ele isola as classes concretas. O padrão Abstract Factory ajuda a controlar as classes de objetos criadas por uma aplicação. Uma vez que a fábrica encapsula a responsabilidade e o processo de criar objetos-produto, isola os clientes das classes de implementação. Os clientes manipulam as instâncias através das suas interfaces abstratas. Nomes de classes-produto ficam isolados na implementação da fábrica concreta; eles não aparecem no código do cliente.
2. Ele torna fácil a troca de famílias de produtos. A classe de uma fábrica concreta aparece apenas uma vez numa aplicação — isto é, quando é instanciada. Isso torna fácil mudar a fábrica concreta que uma aplicação usa. Ela pode usar diferentes configurações de produtos simplesmente trocando a fábrica con- creta. Uma vez que a fábrica abstrata cria uma família completa de produtos, toda família de produtos muda de uma só vez. No nosso exemplo de interface de usuário, podemos mudar de widgets do Motif para widgets do Presentation Manager simplesmente trocando os correspondentes objetos- fábrica e recriando a interface.
3. Ela promove a harmonia entre produtos. Quando objetos-produto numa família são projetados para trabalharem juntos, é importante que uma aplicação use objetos de somente uma família de cada vez. AbstractFactory torna fácil assegurar isso.
4. É difícil de suportar novos tipos de produtos. Estender fábricas abstratas para produzir novos tipos de Produtos não é fácil. Isso se deve ao fato de que a interface de AbstractFactory fixa o conjunto de produtos que podem ser criados. Suportar novos tipos de produto exige estender a interface da fábrica, o que envolve mudar a classe AbstractFactory e todas as suas subclasses. Discutimos uma solução para este problema na seção de Implementação.


## Implementação

A seguir apresentamos algumas técnicas úteis para implementar o padrão Abstract Factory.

1. *Fábricas como singletons.* Uma aplicação necessita somente de uma instância de uma Concrete Factory por família de produto. Assim, ela é normalmente melhor implementada como um [Singleton](../Singleton).

2. *Criando os produtos.* AbstractFactory somente declara uma interface para criação de produtos. Fica a cargo das subclasses de ConcreteProducts criá-los efetivamente. A maneira mais comum de fazer isso é definir um método-fábrica ([Factory Method](../FactoryMethod)) para cada produto. Uma fábrica concreta especificará seus produtos redefinindo (overriding) o método-fábrica para cada um. Embora esta implementação seja simples, exige uma nova subclasse de uma fábrica concreta para cada família de produtos, ainda que as famílias de produto tenham somente diferenças pequenas.

    Se muitas famílias de produtos são possíveis, a fábrica concreta pode ser implementada usando o padrão [Prototype](../Prototype). A fábrica concreta é iniciada com uma instância prototípica de cada produto da família e cria um novo produto clonando o seu protótipo. A abordagem baseada no Prototype elimina a necessidade de uma nova classe de fábrica concreta para cada nova família de produtos. Aqui apresentamos uma maneira de implementar em Smalltalk uma fábrica baseada no Prototype. A fábrica concreta armazena os protótipos a serem clonados em um dicionário chamado `partCatalog`. O método `make`: lê o protótipo e faz sua clonagem:

    ```smalltalk
    make: partName 
        (partcatalog at: partName) copy
    ```
    A fábrica concreta tem um método para adicionar partes ao catálogo.

    ```smalltalk
    addPart: partTemp1ate named: partName
        partCataIog at: partName put: partTempIate
    ```

    Protótipos são acrescentados à fábrica, identificando-os com um símbolo:

    ```smalltalk
    aFactory addPart: aPrototype named: #ACMERidget
    ```

    Uma variação da abordagem baseada no Prototype é possível em linguagens que tratam classes como objetos de primeira classe (por exemplo, Smalltalk e Objective C).
    
    Você pode pensar sobre uma classe nessas linguagens como sendo uma fábrica degenerada que cria somente um tipo de produto. Pode armazenar classes dentro de uma fábrica concreta que cria os vários produtos concretos em variáveis, de maneira bastante semelhante a protótipos. Essas classes criam novas instâncias em nome da fábrica concreta. Define-se uma nova fábrica iniciando uma fábrica concreta com classes de produtos ao invés de usar subclasses. Esta abordagem aproveita as características da linguagem, ao passo que a abordagem pura baseada em protótipos é independente de linguagens.

    Como a fábrica baseada em protótipos em Smalltalk que acabamos de discutir, a versão baseada em classes terá uma única variável de instância `partCatalog`, que é um dicionário cuja chave é o nome da parte. Em vez de armazenar protótipos para serem clonados, partCatalog armazena as classes dos produtos. O método make: agora se parece com o seguinte:

    ```smalltalk  
    make: partName
        (partCataIog at: partName) new
    ```

3. *Definindo fábricas extensíveis.* AbstractFactory normalmente define uma ope- ração diferente para cada tipo de produto que pode produzir. Os tipos de produtos estão codificados nas assinaturas das operações. O acréscimo de um novo tipo de produto exige a mudança da interface de AbstractFactory e de todas as classes que dependem dela.

    Um projeto mais flexível, mas menos seguro, é acrescentar um parâmetro às operações que criam objetos. Este parâmetro especifica o tipo de objeto a ser criado. Ele poderia ser um identificador de classe, um inteiro, um string ou qualquer outra coisa que identifica o tipo de produto. De fato, com esta abordagem, AbstractFactory somente necessita uma única operação "Make" com um parâmetro indicando um tipo de objeto a ser criado. Esta é a técnica usada em Prototype e nas fábricas abstratas baseadas em classe, discutidas anteriormente.

    Essa variação é mais fácil de usar numa linguagem com tipos dinamicamente definidos como Smalltalk, do que numa linguagem com tipos estaticamente definidos como C++. Você pode usá-la em C++ somente quando todos os objetos têm a mesma classe abstrata de base ou quando os objetos-produto podem ser seguramente forçados a serem do tipo correto pelo cliente que os solicitou. A seção de implementação de [Factory Method](../FactoryMethod) mostra como implementar tais operações parametrizadas em C++.

    Mas mesmo quando não é necessário forçar o tipo correto, permanece um problema inerente: todos os produtos são retornados ao cliente com a mesma interface abstrata conforme especificado pelo tipo de retorno. O cliente não será capaz de diferenciar ou fazer hipóteses seguras sobre a classe de um produto. Se os clientes necessitam excetuar operações específicas às subclasses, elas não serão acessíveis através da interface abstrata. Embora o cliente possa executar um *downcast* (por exemplo, com *dynamic_cast* em C++), isso não é sempre viável ou seguro porque o *downcast* pode falhar. Este é o clássico compromisso para se obter uma interface altamente flexível e extensível.

## Exemplo de código

Aplicaremos o padrão Abstract Factory para criar os labirintos que discutimos nos outros padrões.

A classe `MazeFactory` pode criar componentes de labirintos. Ela constrói salas, paredes e portas entre salas. Pode ser usada por um programa que lê plantas de labirintos de um arquivo e constrói o labirinto correspondente. Ou pode ser usada por um programa que constrói labirintos aleatoriamente. Os programas que constróem labirintos recebem `MazeFactory` como argumento, de maneira que o programador pode especificar as classes de salas, paredes e portas a serem construídas.


<code-group>
<code-block title="C++">

<<< src/gof/AbstractFactory/code/MazeFactory.cpp

</code-block>

<code-block title="Java">

<<< src/gof/AbstractFactory/code/MazeFactory.java

</code-block>
</code-group>




`CreateMaze` constrói um pequeno labirinto consistindo em duas salas com uma porta entre elas. `CreateMaze` codifica de maneira rígida os nomes das classes, tornando difícil criar labirintos com componentes diferentes.


<<< src/gof/AbstractFactory/code/CreateMazeOriginal.java

Aqui apresentamos uma versão de `CreateMaze` que corrige essa falha aceitando uma `MazeFactory` como um parâmetro:

<code-group>
<code-block title="C++">

<<< src/gof/AbstractFactory/code/MazeGameMazeFactory.cpp

</code-block>

<code-block title="Java">

<<< src/gof/AbstractFactory/code/MazeGameMazeFactory.java

</code-block>
</code-group>


Podemos criar `EnchantedMazeFactory`, uma fábrica para labirintos encantados, introduzindo subclasses de `MazeFactory`. `EnchantedMazeFactory` redefinirá diferentes funções-membro e retornará diferentes subclasses de `Room`, `Wall`, etc.

<code-group>
<code-block title="C++">

<<< src/gof/AbstractFactory/code/EnchantedMazeFactory.cpp

</code-block>

<code-block title="Java">

<<< src/gof/AbstractFactory/code/EnchantedMazeFactory.java

</code-block>
</code-group>

Suponha agora que queiramos construir um jogo de labirinto no qual uma sala pode ter uma bomba colocada nela. Se a bomba detona, ela danificará as paredes (no mínimo). Podemos construir uma subclasse de `Room` para registrar se uma sala tem uma bomba nela e se a bomba explodiu. Também necessitaremos de uma subclasse de `Wall` para manter o registro do dano feito à parede. Chamaremos estas classes de `RoomWithABomb` e `BombedWall`.

A última classe que definiremos é `BombedMazeFactory`, uma subclasse de `MazeFactory` que assegura que as paredes são da classe `BombedWall` e as salas são da classe `RoomRithABomb`. `BombedMazeFactory` somente necessita redefinir duas funções:


<code-group>
<code-block title="C++">

<<< src/gof/AbstractFactory/code/EnchantedMazeFactory.cpp

</code-block>

<code-block title="Java">

<<< src/gof/AbstractFactory/code/EnchantedMazeFactory.java

</code-block>
</code-group>



Para construir um simples labirinto que pode conter bombas, simplesmente chamamos `CreateMaze` com uma `BombedMazeFactory`.

<code-group>
<code-block title="C++">

<<< src/gof/AbstractFactory/code/MazeGameRun.cpp

</code-block>

<code-block title="Java">

<<< src/gof/AbstractFactory/code/MazeGameRun.java

</code-block>
</code-group>



CreateMaze pode receber uma instância de EnchantedMazeFactory da mesma maneira para construir labirintos encantados.

Note que a `MazeFactory` é apenas uma coleção de métodos de fábricas. Essa é a maneira mais comum de implementar o padrão Abstract Factory. Note também que `MazeFactory` não é uma classe abstrata; assim, ela funciona tanto como AbstractFactory quanto como ConcreteFactory. Esta é uma outra implementação comum para aplicações simples do padrão Abstract Factory. Porque a `MazeFactory` é uma classe concreta que consiste inteiramente de métodos de fábricas, é fácil criar uma nova `MazeFactory` criando uma subclasse e redefinindo as operações que necessitam ser mudadas.

`CreateMaze` usou a operação `SetSide` sobre as salas para especificar os seus lados. Se ela cria salas com uma `BombedMazeFactory`, então o labirinto será constituído de objetos `RoomWithABomb`, com lados `BombedWall`. Se `RoomWithABomb` tivesse que acessar um membro específico de uma subclasse de `BombedWall`, então ele teria que fazer um *cast* para uma referência a suas paredes de `Wall` para `BombedWall`. Este *downcasting* é seguro na medida que o argumento é de fato uma `BombedWall`, o que é certamente verdadeiro se as paredes são construídas exclusivamente com uma `BombedMazeFactory`.

## Usos conhecidos

Inter Views usa o sufixo "Kit" [Lin92] para denotar classes AbstractFactory. Ela define fábricas abstratas WidgetKit e DialogKit para geração de objetos específicos da interface de usuário para interação. InterViews também inclui LayoutKit, que gera diferentes objetos por composição dependendo do layout desejado. Por exemplo, um layout que é conceitualmente horizontal pode exigir diferentes objetos compostos, dependendo da orientação do documento (retrato ou paisagem).

ET++ [WGM88] usa o padrão Abstract Factory para obter portabilidade entre diferentes sistemas de janelas (X Windows e SunView, por exemplo). A classe abstrata base WindowSystem define a interface para criar objetos que representam recursos do sistema de janelas (MakeWindow, MakeFont, MakeColor, por exemplo). As subclasses concretas implementam as interfaces para um sistema de janelas específico. Em tempo de execução, ET++ cria uma instância de uma subclasse concreta WindowSystem que cria objetos concretos para os recursos do sistema.

## Padrão relacionados

As classes AbstractFactory são frequentemente implementadas com métodos-fábrica [Factory Method](/gof/FactoryMethod), mas elas também podem ser implementadas usando [Prototype](/gof/Prototype).

Uma fábrica concreta é frequentemente um [Singleton](/gof/Singleton).


## Referências

!!!include(src/ref.md)!!!
