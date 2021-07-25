# GOF


## Criação


### Factory Method 
- Definir uma interface para criar um objeto mas deixar que subclasses decidam que classe instanciar 
### Abstract Factory 
- Prover interface para criar famílias de objetos relacionados ou dependentes sem especificar suas classes concretas 
### Builder 
- Separar a construção de objeto complexo da representação para criar representações diferentes com mesmo processo 
### Prototype 
- Especificar tipos a criar usando uma instância como protótipo e criar novos objetos ao copiar este protótipo 
### Singleton 
- Garantir que uma classe só tenha uma única instância, e prover um ponto de acesso global a ela 


## Estrutural



### Adapter 
- Converter a interface de uma classe em outra interface esperada pelos clientes.
### Bridge 
- Desacoplar uma abstração de sua implementação para que os dois possam variar independentemente 
### Composite 
- Permitir o tratamento de objetos individuais e composições desses objetos de maneira uniforme 
### Decorator 
- Anexar responsabilidades adicionais a um objeto dinamicamente 
### Façade 
- Oferecer uma interface única de nível mais elevado para um conjunto de interfaces de um subsistema 
### Flyweight 
- Usar compartilhamento para suportar eficientemente grandes quantidades de objetos complexos 
### Proxy 
- Prover um substituto ou ponto através do qual um objeto possa controlar o acesso a outro 

## Comportamental

### Observer 
- Definir uma dependência um-para-muitos entre objetos para que quando um objeto mudar de estado, os seus dependentes sejam notificados e atualizados automaticamente 
### Mediator 
- Definir um objeto que encapsula a forma como um conjunto de objetos interagem 
### Chain of Responsibility 
- Compor objetos em cascata para, através dela, delegar uma requisição até que um objeto a sirva 
### Memento 
- Externalizar o estado interno de um objeto para que o objeto possa ter esse estado restaurado posteriormente 
### Template Method 
- Definir o esqueleto de um algoritmo dentro de uma operação, deixando alguns passos a serem preenchidos pelas subclasses 
### State 
- Permitir a um objeto alterar o seu comportamento quanto o seu estado interno mudar 
### [Strategy](ppr/Strategy.md) 
- Definir uma família de algoritmos, encapsular cada um, e fazê-los intercambiáveis 
### Command 
- Encapsular requisição como objeto, para clientes parametrizarem diferentes requisições, filas, e suportar operações reversíveis 
### Interpreter 
- Dada uma linguagem, definir uma representação para sua gramática junto com um interpretador 
### Iterator 
- Prover uma maneira de acessar elementos de um objeto agregado seqüencialmente sem expor sua representação interna 
### Visitor 
- Representar uma operação a ser realizada sobre os elementos de uma estrutura de objetos	 




