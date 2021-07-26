---
sidebar: auto
prev: ../03_GOF
---
# Factory Method (GOF) 🔨

[^GAMMA]


## Intenção

Definir uma interface para criar um objeto, mas deixar as subclasses decidirem que classe instanciar. O Factory Method permite adiar a instanciação para subclasses.

## Também conhecido como

Virtual Constructor

## Motivação

Os frameworks usam classes abstratas para definir e manter relacionamentos entre objetos. Um framework é freqüentemente responsável também pela criação desses objetos.

Considere um framework para aplicações que podem apresentar múltiplos documentos para o usuário. Duas abstrações-chave nesse framework são as classes Application (aplicação) e Document (documento). As duas classes são abstratas, e os clientes devem prover subclasses para realizar suas implementações específicas para a aplicação. Por exemplo, para criar uma aplicação de desenho, definimos as classes DrawingApplication e DrawingDocument. A classe Application é responsável pela administração de Documents e irá criá-los conforme exigido — quando o usuário seleciona Open (abrir) ou New (novo), por exemplo, num menu.

Uma vez que a subclasse Document a ser instanciada é própria da aplicação específica, a classe Application não pode prever a subclasse de Document a ser instanciada — a classe Application somente sabe quando um documento deve ser criado, e não que tipo de Document criar. Isso cria um dilema: o framework deve instanciar classes, mas ele somente tem conhecimento de classes abstratas, as quais não pode instanciar.

O padrão Factory Method oferece uma solução. Ele encapsula o conhecimento sobre a subclasse de Document que deve ser criada e move este conhecimento para fora do framework.

@startuml
abstract class Document{
    {abstract} open()
    {abstract} close()
    save()
    revert()
}

abstract class Application{
    {abstract} createDocument()
    newDocument()
    openDocument()
}

class MyApplication{
    createDocument()    
}

Document -o Application  :docs
Application <|-- MyApplication 
MyDocument <- MyApplication
Document  <|-- MyDocument 

note right of MyApplication::createDocument 
  return new MyDocument()
end note

note right of Application::newDocument 
  Document doc = new createDocument();
  docs.add(doc);
  doc.open();
end note

@enduml

As subclasses de `Application` redefinem uma operação abstrata `createDocument` em `Application` para retornar a subclasse apropriada de `Document.` Uma vez que uma subclasse de `Application` é instanciada, pode então instanciar `Documents` específicos da aplicação sem conhecer suas classes. Chamamos `createDocument` um **factory method** porque ele é responsável pela "manufatura" de um objeto.

## Aplicabilidade

Use o padrão Factory Method quando:

- uma classe não pode antecipar a classe de objetos que deve criam;
- uma classe quer que suas subclasses especifiquem os objetos que criam;
- classes delegam responsabilidade para uma dentre várias subclasses auxiliares, e você quer o conhecimento de qual subclasse auxiliar que é a delegada.

## Estrutura

@startuml
abstract class Product{
}

abstract class Creator{
    {abstract} factoryMethod()
    anOperation()
}

class ConcreteCreator{
    factoryMethod()
}

Creator <|-- ConcreteCreator 
ConcreteProduct <- ConcreteCreator
Product  <|-- ConcreteProduct 

note right of ConcreteCreator::factoryMethod 
  return new ConcreteProduct()
end note

note right of Creator::anOperation 
  ...
  product = factoryMethod();
  ...
end note

@enduml

## Participantes
- **Product** (Document)
    - define a interface de objetos que o `factoryMethod` cria.
- **ConcreteProduct** (MyDocument)
    - implementa a interface de `Product`.
- **Creator** (Application)
    - Declara o `factoryMethod`, o qual retorna um objeto do tipo `Product`. `Creator` pode também definir uma implementação por omissão do `factoryMethod` que retorna por omissão um objeto `ConcreteProduct`.
    - Pode chamar o `factoryMethod` para criar um objeto `Product.`
- **ConcreteCreator** (MyApplication)
    - Redefine o `factoryMethod` para retornar a uma instância de um
`ConcreteProduct.`

## Colaborações

- Creator depende das suas subclasses para definir o método de fábrica de maneira que retorne uma instância do ConcreteProduct apropriado.

## Consequências

Os Factory Methods eliminam a necessidade de anexar classes específicas das aplicações no código. O código lida somente com a interface de `Product`; portanto, ele pode trabalhar com quaisquer classes `ConcreteProduct` definidas pelo usuário.

Uma desvantagem em potencial dos Factory Methods é que os clientes podem ter que fornecer subclasses da classe `Creator` somente para criar um objeto `ConcreteProduct` em particular. Usar subclasses é bom quando o cliente tem que fornecer subclasses a `Creator` de qualquer maneira, caso contrário, o cliente deve lidar com outro ponto de evolução.

Apresentamos aqui duas consequências adicionais do Factory Method:

1. Fornece ganchos para subclasses. Criar objetos dentro de uma classe com um método de fábrica é sempre mais flexível do que criar um objeto diretamente. Factory Method dá às subclasses um gancho para fornecer uma versão estendida de um objeto. No exemplo de Documentos, a classe `Document` poderia definir um Factory Method chamado `createFileDialog` que cria um objeto file dialog por omissão para abrir um documento existente. Uma de `Document` pode definir um `fileDialog` específico da aplicação redefinindo este método de fábrica. Neste caso, o método de fábrica não é abstrato, mas fornece uma implementação por omissão razoável.

2. Conecta hierarquias de classe paralelas. Nos exemplos que consideramos até aqui o Factory Method é somente chamado por `Creators`. Mas isto não precisa ser obrigatoriamente assim; os clientes podem achar os Factory Method úteis, especialmente no caso de hierarquias de classe paralelas. Hierarquias de classe paralelas ocorrem quando uma classe delega alguma das suas responsabilidades para uma classe separada. Considere, por exemplo, figuras que podem ser manipuladas interativamente; ou seja, podem ser esticadas, movidas ou giradas usando o mouse. Implementar tais interações não é sempre fácil. Isso frequentemente requer armazenar e atualizar informação que registra o estado da manipulação num certo momento. Este estado é necessário somente durante a manipulação; portanto, não necessita ser mantido no objeto-figura. Além do mais, diferentes figuras se comportam de modo diferente quando são manipuladas pelo usuário. Por exemplo, esticar uma linha pode ter o efeito de mover um dos extremos, enquanto que esticar um texto pode mudar o seu espaçamento de linhas.
Com essas restrições, é melhor usar um objeto `Manipulator` separado, que implementa a interação e mantém o registro de qualquer estado específico da manipulação que for necessário. Diferentes figuras utilizarão diferentes subclasses `Manipulator` para tratar interações específicas. A hierarquia de classes `Manipulator` resultante é paralela (ao menos parcialmente) à hierarquia de classes de `Figure`:


@startuml
abstract class Figure{
    {abstract} createManipulator()
}

class LineFigure{
    createManipulator()
}

class TextFigure{
    createManipulator()
}

Figure <|-- LineFigure
Figure <|-- TextFigure


abstract class Manipulator{
    {abstract} downClick()
    {abstract} drag()
    {abstract} upClick()
}

class LineManipulator{
    downClick()
    drag()
    upClick()
}

class TextManipulator{
    downClick()
    drag()
    upClick()
}

Manipulator <|-- LineManipulator
Manipulator <|-- TextManipulator

Figure <- Cliente
Cliente -> Manipulator

LineFigure .> LineManipulator
TextFigure .> TextManipulator

hide empty attributes
hide empty methods
@enduml

A classe `Figure` fornece um método de fábrica `createManipulator` que permite aos clientes criar o correspondente `Manipulator` de uma `Figure`. As subclasses de `Figure` substituem esse método para retornar uma instância da subclasse `Manipulator` correta para elas. Como alternativa, a classe `Figure` pode implementar `createManipulator` para retornar por omissão uma instância de manipulator, e as subclasses de `Figure` podem simplesmente herdar essa instância por omissão. As classes `Figure` que fizerem assim não necessitarão de uma subclasse correspondente de `Manipulator` — por isso dizemos que as hierarquias são somente parcialmente paralelas. Note como o método de fábrica define a conexão entre as duas hierarquias de classes. Nele se localiza o conhecimento de quais classes trabalham juntas.

## Implementação

Considere os seguintes tópicos ao aplicar o padrão Factory Method:

1. Duas variedades principais. As duas principais variações do padrão Factory Method são: (1) o caso em que a classe `Creator` é uma classe abstrata e não fornece uma implementação para o método de fábrica que ela declara, e (2) o caso quando o `Creator` é uma classe concreta e fornece uma implementação por omissão para o método de fábrica. Também é possível ter uma classe abstrata que define uma implementação por omissão, mas isto é menos comum. O primeiro caso exige subclasses para definir uma implementação porque não existe uma omissão razoável, assim contornando o dilema de ter que instanciar classes imprevisíveis. No segundo caso, o `ConcretCreator` usa o método de fábrica principalmente por razões de flexibilidade. Está seguindo uma regra que diz: "criar objetos numa operação separada de modo que subclasses possam redefinir a maneira como eles são criados". Essa regra garante que projetistas de subclasses, caso necessário, possam mudar a classe de objetos que a classe ancestral instancia.
2. Métodos de fábrica parametrizados. Uma outra variante do padrão permite ao método de fábrica criar múltiplos tipos de produtos. O método de fábrica recebe um parâmetro que identifica o objeto a ser criado.

Todos os objetos que o método de fábrica cria compartilharão a interface de `Product`. No exemplo de `Document`, `Application` pode suportar diferentes tipos de Documents. Você passa a `createDocument` um parâmetro extra para especificar o tipo de documento a ser criado.

O framework de edição gráfica Unidraw [VL90] usa esta abordagem para reconstruir objetos salvos em disco. Unidraw define uma classe creator com método de fábrica `Create` que aceita um identificador de classe como argumento. O identificador de classe especifica a classe a ser instanciada. Quando Unidraw salva um objeto em disco, primeiro grava o identificador da classe, e então suas variáveis de instância. Quando reconstrói o objeto de disco, primeiro lê o identificador de classe.

Depois que o identificador de classe é lido, o framework chama `Create`, passando o identificador como o parâmetro. `Create` procura o constructor para a classe correspondente, utilizando-o para instanciar o objeto. Por último, `Create` chama a operação `read` do objeto, a qual lê a informação restante do disco e inicia as variáveis de instância do objeto.

Um método de fábrica parametrizado tem a seguinte forma geral, onde `MyProduct` e `YourProduct` São subclasses de `Product`:

```java
class Creator {
    public Product create( ProductId id){
        if (id == MINE) return new MyProduct();
        if (id == YOURS) return new YourProduct();
        // repete para os produtos restantes
        return null;
    }
}
```

Redefinir um método de fábrica parametrizado permite, fácil e seletivamente, estender ou mudar os produtos que um `Creator` produz. Você pode introduzir novos identificadores para novos tipos de produtos, ou pode associar identificadores existentes com diferentes produtos.

Por exemplo, uma subclasse `MyCreator` poderia trocar `MyProduct` por `YourProduct` e suportar uma nova subclasse `TheirProduct`:

```java
class MyCreator extends Creator {
    public Product create( ProductId id){
        if (id == YOURS) return new MyProduct();
        if (id == MINE) return new YourProduct();
        // nota: YOURS e MINE foram trocados propositadamente
        if (id == THEIR) return new TheirProduct();
        return super.create(id);
    }
}
```

Note que a última coisa que essa operação faz é chamar `create` na classe-mãe. Isso porque `MyCreator.create` trata somente YOURS, MINE e THEIRS de modo diferente da classe-mãe.

Ela não está interessada em outras classes. Daí dizermos que `MyCreator` estende os tipos de produtos criados e adia a responsabilidade da criação de todos, exceto uns poucos produtos, para sua superclasse.



## Exemplo de código
## Usos conhecidos
## Padrão relacionados

## Referências

!!!include(src/ref.md)!!!
