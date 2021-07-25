# GOF


## Criação


### [Factory Method](gof/FactoryMethod.md)  :construction:
- Definir uma interface para criar um objeto mas deixar que subclasses decidam que classe instanciar 
### [Abstract Factory](gof/AbstractFactory.md) :construction:
- Prover interface para criar famílias de objetos relacionados ou dependentes sem especificar suas classes concretas 
### [Builder](gof/Builder.md) :construction:
- Separar a construção de objeto complexo da representação para criar representações diferentes com mesmo processo 
### [Prototype](gof/Prototype.md) :construction:
- Especificar tipos a criar usando uma instância como protótipo e criar novos objetos ao copiar este protótipo 
### [Singleton](gof/Singleton.md) :construction:
- Garantir que uma classe só tenha uma única instância, e prover um ponto de acesso global a ela 


## Estrutural



### [Adapter](gof/Adapter.md) :construction:
- Converter a interface de uma classe em outra interface esperada pelos clientes.
### [Bridge](gof/Bridge.md) :construction:
- Desacoplar uma abstração de sua implementação para que os dois possam variar independentemente 
### [Composite](gof/Composite.md) :construction:
- Permitir o tratamento de objetos individuais e composições desses objetos de maneira uniforme 
### [Decorator](gof/Decorator.md) :construction:
- Anexar responsabilidades adicionais a um objeto dinamicamente 
### [Façade](gof/Façade.md) :construction:
- Oferecer uma interface única de nível mais elevado para um conjunto de interfaces de um subsistema 
### [Flyweight](gof/Flyweight.md) :construction:
- Usar compartilhamento para suportar eficientemente grandes quantidades de objetos complexos 
### [Proxy](gof/Proxy.md) :construction:
- Prover um substituto ou ponto através do qual um objeto possa controlar o acesso a outro 

## Comportamental

### [Observer](gof/Observer.md) :construction:
- Definir uma dependência um-para-muitos entre objetos para que quando um objeto mudar de estado, os seus dependentes sejam notificados e atualizados automaticamente 
### [Mediator](gof/Mediator.md) :construction:
- Definir um objeto que encapsula a forma como um conjunto de objetos interagem 
### [Chain of Responsibility](gof/ChainOfResponsibility.md) :construction:
- Compor objetos em cascata para, através dela, delegar uma requisição até que um objeto a sirva 
### [Memento](gof/Memento.md) :construction:
- Externalizar o estado interno de um objeto para que o objeto possa ter esse estado restaurado posteriormente 
### [Template Method](gof/TemplateMethod.md) :construction:
- Definir o esqueleto de um algoritmo dentro de uma operação, deixando alguns passos a serem preenchidos pelas subclasses 
### [State](gof/State.md) :construction:
- Permitir a um objeto alterar o seu comportamento quanto o seu estado interno mudar 
### [Strategy](gof/Strategy.md) :white_check_mark:
- Definir uma família de algoritmos, encapsular cada um, e fazê-los intercambiáveis 
### [Command](gof/Command.md) :construction:
- Encapsular requisição como objeto, para clientes parametrizarem diferentes requisições, filas, e suportar operações reversíveis 
### [Interpreter](gof/Interpreter.md) :construction:
- Dada uma linguagem, definir uma representação para sua gramática junto com um interpretador 
### [Iterator](gof/Iterator.md) :construction:
- Prover uma maneira de acessar elementos de um objeto agregado seqüencialmente sem expor sua representação interna 
### [Visitor](gof/Visitor.md) :construction:
- Representar uma operação a ser realizada sobre os elementos de uma estrutura de objetos	 




