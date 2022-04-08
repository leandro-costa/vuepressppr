---
sidebar: auto
prev: /03_GOF
---
# Discussão sobre padrões de criação

Existem duas maneiras comuns de parametrizar um sistema pelas classes de objetos que ele cria. Uma é criar subclasses da classe que cria os objetos; isto corresponde a usar o padrão [Factory Method](/gof/FactoryMethod). A principal desvantagem desta solução é que requer a criação de uma nova subclasse somente para mudar a classe do produto. Tais mudanças podem gerar uma cascata de modificações encadeadas. Por exemplo, quando o criador do produto é ele próprio, criado por um método fábrica, então você tem que redefinir também o seu criador.

A outra forma de parametrizar um sistema baseia-se mais na composição de objetos: defina um objeto que seja responsável por conhecer a classe dos objetos- produto e torne-o um parâmetro do sistema. Este éo aspecto-chave dos padrões [Abstract Factory](/gof/AbstractFactory), [Builder](/gof/Builder)  e [Prototype](/gof/Prototype). Todos os três padrões envolvem a criação de um novo objeto-fábrica cuja responsabilidade é criar objetos-produtos. Em Abstract Factory, o objeto-fábrica produz Objetos de várias classes. Em Builder, um objeto-fábrica constrói incrementalmente um objeto complexo usando um protocolo igualmente complexo. O padrão Prototype faz o objeto-fábrica construir um objeto-produto copiando um objeto prototípico. Neste caso, o objeto-fábrica e o protótipo são o mesmo objeto, porque o protótipo é responsável por retornar o produto.

Considere o framework para um editor de desenhos descrito no padrão Prototype.
Há várias maneiras de parametrizar uma GraphicTool pela classe do produto:
- Aplicando-se o padrão FactoryMethod, uma subclasse de GraphicTool será criada para cada subclasse de Graphic na paleta. A GraphicTool terá uma nova operação NewGraphic, que cada subclasse de GraphicTool redefinirá.
- Aplicando-se o padrão Abstract Factory, haverá uma hierarquia de classes de GraphicsFactories, uma para cada subclasse de Graphic. Neste caso, cada fábrica cria apenas o produto: CircleFactory criará círculos (Circles), LineFactory criará linhas (Lines), e assim por diante. Uma GraphicTool será parametrizada como uma fábrica para criação do tipo apropriado de Graphics.
- Aplicando-se o padrão Prototype,cada subclasse de Graphics implementará a operação Clone, e uma GraphicTool será parametrizada com um protótipo da Graphic que ela cria.

Definir qual é o melhor padrão depende de muitos fatores. No nosso framework para editores de desenhos, o padrão Factory Method é inicialmente mais fácil de usar. É fácil definir uma subclasse de GraphicTool e as instâncias de GraphicTool são criadas somente quando a paleta é definida. Aqui, a principal desvantagem é a proliferação de subclasses de GraphicTool, sendo que nenhuma delas faz muita coisa.

O padrão Abstract Factory não oferece uma grande melhoria porque também exige uma hierarquia de classes GraphicsFactory bastante grande. Abstract Factory seria preferível a Factory Method somente se já houvesse uma hierarquia de classes GraphicsFactory— ou se o compilador a fornecesse automaticamente (como em Small- talk ou Objective C) ou se fosse necessária em outra parte do sistema.

No geral, o padrão Prototype é o melhor para o framework de editores de desenho porque ele somente requer a implementação de uma operação Clone em cada classe Graphics. Isso reduz o número de classes, e clone pode ser usado para outras finalidades, além de somente instanciação (por exemplo, uma operação duplicar definida no menu).

O Factory Method torna um projeto mais adaptável e apenas um pouco mais complicado. Outros padrões de projeto requerem novas classes, enquanto que Factory Method somente exige uma nova operação. As pessoas freqüentemente usam Factory Method como a maneira padrão de criar objetos, mas não é necessário quando a classe que é instanciada nunca muda ou quando a instanciação ocorre em uma operação que subclasses podem facilmente redefinir, tal como uma operação de inicialização.

Projetos que usam Abstract Factory, Prototype ou Builder são ainda mais flexíveis do que aqueles que utilizam Factory Method, porém, eles também são mais complexos. Freqüentemente, os projetos começam usando Factory Method e evoluem para outros padrões de criação à medida que o projetista descobre onde é necessária maior flexibilidade. O conhecimento de vários padrões de projeto lhe dá mais opções quando trocar um critério de projeto por outro.


## [Factory Method](/gof/FactoryMethod) ✅
- Definir uma interface para criar um objeto mas deixar que subclasses decidam que classe instanciar 
## [Abstract Factory](/gof/AbstractFactory) ✅
- Prover interface para criar famílias de objetos relacionados ou dependentes sem especificar suas classes concretas 
## [Builder](/gof/Builder) 🚧
- Separar a construção de objeto complexo da representação para criar representações diferentes com mesmo processo 
## [Prototype](/gof/Prototype) 🚧
- Especificar tipos a criar usando uma instância como protótipo e criar novos objetos ao copiar este protótipo 
## [Singleton](/gof/Singleton) 🔨
- Garantir que uma classe só tenha uma única instância, e prover um ponto de acesso global a ela 
