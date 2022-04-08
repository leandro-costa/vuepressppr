(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{395:function(a,e,s){"use strict";s.r(e);var n=s(29),t=Object(n.a)({},(function(){var a=this,e=a.$createElement,s=a._self._c||e;return s("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[s("h1",{attrs:{id:"singleton-gof-🔨"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#singleton-gof-🔨"}},[a._v("#")]),a._v(" Singleton (GOF) 🔨")]),a._v(" "),s("p",[s("sup",{staticClass:"footnote-ref"},[s("a",{attrs:{href:"#fn1",id:"fnref1"}},[a._v("[1]")])])]),a._v(" "),s("p",[a._v("Em construção 🚧")]),a._v(" "),s("h2",{attrs:{id:"intencao"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#intencao"}},[a._v("#")]),a._v(" Intenção")]),a._v(" "),s("p",[a._v("Garantir que uma classe tenha somente uma instância e fornecer um ponto global de acesso para a mesma.")]),a._v(" "),s("h2",{attrs:{id:"motivacao"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#motivacao"}},[a._v("#")]),a._v(" Motivação")]),a._v(" "),s("p",[a._v("É importante para algumas classes ter uma, e apenas uma, instância. Por exemplo, embora possam existir muitas impressoras em um sistema, deveria haver somente um spooler de impressoras. Da mesma forma, deveria haver somente um sistema de arquivos e um gerenciador de janelas. Um filtro digital terá somente um conversor A/ D. Um sistema de contabilidade será dedicado a servir somente a uma companhia.")]),a._v(" "),s("p",[a._v("Como garantimos que uma classe tenha somente uma instância e que essa instância seja facilmente acessível? Uma variável global torna um objeto acessível, mas não impede você de instanciar múltiplos objetos.")]),a._v(" "),s("p",[a._v("Uma solução melhor seria tornar a própria classe responsável por manter o controle da sua única instância. A classe pode garantir que nenhuma outra instância seja criada (pela interceptação das solicitações para criação de novos objetos), bem como pode fornecer um meio para acessar sua única instância. Este é o padrão Singleton.")]),a._v(" "),s("h2",{attrs:{id:"aplicabilidade"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#aplicabilidade"}},[a._v("#")]),a._v(" Aplicabilidade")]),a._v(" "),s("p",[a._v("Use o padrão Singleton quando:")]),a._v(" "),s("ul",[s("li",[a._v("for preciso haver apenas uma instância de uma classe, e essa instância tiver que dar acesso aos clientes através de um ponto bem conhecido;")]),a._v(" "),s("li",[a._v("a única instância tiver de ser extensível através de subclasses, possibilitando aos clientes usar uma instância estendida sem alterar o seu código.")])]),a._v(" "),s("h2",{attrs:{id:"estrutura"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#estrutura"}},[a._v("#")]),a._v(" Estrutura")]),a._v(" "),s("figure",[s("img",{attrs:{src:"https://www.plantuml.com/plantuml/svg/NOyn3eCm34Ltdy9ZkG9T6Bfqwi09ejIWIAdJ9ZyJukur2DI29zl_-UkxAt0PzHN9HrSAzq77A4Ww4LjD9YFucQk6JvMxsgnULgtiwCt17UcmSPVcI3xUaer8kWcZeFztiVLCf0d2KGPm6dw1sdPtvVKs2shMKx0hYJvvCQ3EEllh2m00",alt:"uml diagram"}}),a._v(" "),s("figcaption",[a._v("Estrutura Singleton.")])]),a._v(" "),s("h2",{attrs:{id:"participantes"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#participantes"}},[a._v("#")]),a._v(" Participantes")]),a._v(" "),s("ul",[s("li",[a._v("Singleton\n"),s("ul",[s("li",[a._v("define uma operação "),s("code",[a._v("instance")]),a._v(" que permite aos clientes acessarem sua única instância. "),s("code",[a._v("instance")]),a._v(" é uma operação de classe.")]),a._v(" "),s("li",[a._v("pode ser responsável pela criação da sua própria instância única.")])])])]),a._v(" "),s("h2",{attrs:{id:"colaboracoes"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#colaboracoes"}},[a._v("#")]),a._v(" Colaborações")]),a._v(" "),s("p",[a._v("• Os clientes acessam uma instância Singleton unicamente pela operação "),s("code",[a._v("instance")]),a._v(" do Singleton.")]),a._v(" "),s("h2",{attrs:{id:"consequencias"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#consequencias"}},[a._v("#")]),a._v(" Consequências")]),a._v(" "),s("p",[a._v("O padrão Singleton apresenta vários benefícios:")]),a._v(" "),s("ol",[s("li",[a._v("Acesso controlado à instância única. Como a classe Singleton encapsula a sua única instância, possui controle total sobre como e quando os clientes a acessam.")]),a._v(" "),s("li",[a._v("Espaço de nomes reduzido. O padrão Singleton representa uma melhoria em relação ao uso de variáveis globais. Ele evita a poluição do espaço de nomes com variáveis globais que armazenam instâncias únicas.")]),a._v(" "),s("li",[a._v("Permite um refinamento de operações e da representação. A classe Singleton pode ter subclasses e é fácil configurar uma aplicação com uma instância dessa classe estendida. Você pode configurar a aplicação com uma instância da classe de que necessita em tempo de execução.")]),a._v(" "),s("li",[a._v("Permite um número variável de instâncias. O padrão torna fácil mudar de idéia, permitindo mais de uma instância da classe Singleton. Além disso, você pode usar a mesma abordagem para controlar o número de instâncias que a aplicação utiliza. Somente a operação que permite acesso à instância de Singleton necessita ser mudada("),s("a",{attrs:{href:"/nao_gof/Multiton"}},[a._v("Multiton")]),a._v(", "),s("a",{attrs:{href:"/nao_gof/ObjectPool"}},[a._v("Object Pool")]),a._v(").")]),a._v(" "),s("li",[a._v("Mais flexível do que operações de classe. Uma outra maneira de empacotar a funcionalidade de um singleton é usando operações de classe (ou seja, funções-membro estáticas em C++ ou métodos de classe em Smalltalk). Porém, as técnicas de ambas as linguagens tornam difícil mudar um projeto para permitir mais que uma instância de uma classe. Além disso, as funções- membro estáticas em C++ nunca são virtuais, o que significa que as subclasses não podem redefini-las polimorficamente.")])]),a._v(" "),s("h2",{attrs:{id:"implementacao"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#implementacao"}},[a._v("#")]),a._v(" Implementação")]),a._v(" "),s("p",[a._v("A seguir apresentamos tópicos de implementação a serem considerados ao usar o\npadrão Singleton:")]),a._v(" "),s("ol",[s("li",[s("p",[a._v("Garantindo uma única instância. O padrão Singleton torna a instância única uma instância normal de uma classe, mas essa classe é escrita de maneira que somente uma instância possa ser criada.")]),a._v(" "),s("p",[a._v("Uma forma comum de fazer isso é ocultando a operação que cria a instância usando uma operação de classe (isto é, ou uma função-membro estática ou um método de classe) que garanta que apenas uma única instância seja criada. Esta operação tem acesso à variável que mantém a única instância, e garante que a variável seja iniciada com a instância única antes de retornar ao seu valor. Esta abordagem assegura que um singleton seja criado e iniciado antes da sua primeira utilização.")]),a._v(" "),s("p",[a._v("Em C++, voçê pode definir a operação de classe com uma função-membro estática Instance da classe Singleton. Singleton também define uma variável-membro estática "),s("code",[a._v("_instance")]),a._v(" que contém um apontador para sua única instância.")]),a._v(" "),s("p",[a._v("A classe "),s("code",[a._v("Singleton")]),a._v(" é declarada como")]),a._v(" "),s("div",{staticClass:"language-c line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-c"}},[s("code",[a._v("class Singleton "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\npublic"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("static")]),a._v(" Singleton"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("*")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("Instance")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\nprotected"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v("\n    "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("Singleton")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\nprivate"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("static")]),a._v(" Singleton"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("*")]),a._v(" _ instance"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br"),s("span",{staticClass:"line-number"},[a._v("3")]),s("br"),s("span",{staticClass:"line-number"},[a._v("4")]),s("br"),s("span",{staticClass:"line-number"},[a._v("5")]),s("br"),s("span",{staticClass:"line-number"},[a._v("6")]),s("br"),s("span",{staticClass:"line-number"},[a._v("7")]),s("br"),s("span",{staticClass:"line-number"},[a._v("8")]),s("br")])]),s("p",[a._v("A implementação correspondente é a seguinte")]),a._v(" "),s("div",{staticClass:"language-c line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-c"}},[s("code",[a._v("Singleton"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("*")]),a._v(" Singleton"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("::")]),a._v("_instance "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n\nSingleton"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("*")]),a._v(" Singleton"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("::")]),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("Instance")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("if")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("_instance "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("==")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n        _instance "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" new Singleton"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("return")]),a._v(" _instance"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br"),s("span",{staticClass:"line-number"},[a._v("3")]),s("br"),s("span",{staticClass:"line-number"},[a._v("4")]),s("br"),s("span",{staticClass:"line-number"},[a._v("5")]),s("br"),s("span",{staticClass:"line-number"},[a._v("6")]),s("br"),s("span",{staticClass:"line-number"},[a._v("7")]),s("br")])]),s("p",[a._v("Os clientes acessam o singleton através da função membro "),s("code",[a._v("Instance")]),a._v(". A variável "),s("code",[a._v("_instance")]),a._v(" é iniciada com 0, e a função-membro estática "),s("code",[a._v("Instance")]),a._v(" retorna o seu valor, iniciando-a com a única instância se ele for 0. "),s("code",[a._v("Instance")]),a._v(" usa "),s("em",[a._v("lazy initialization")]),a._v("; o valor que ela retorna não é criado e armazenado até ser acessado pela primeira vez.")]),a._v(" "),s("p",[a._v("Note que o constructor é protegido. Um cliente que tenta instanciar "),s("code",[a._v("Singleton")]),a._v(" diretamente obterá como resposta um erro em tempo de compilação. Isto assegura que somente uma instância possa ser criada.")]),a._v(" "),s("p",[a._v("Além do mais, uma vez que "),s("code",[a._v("_instance")]),a._v(" é um apontador para um objeto "),s("code",[a._v("Singleton")]),a._v(", a função-membro Instance pode atribuir um apontador para uma subclasse de "),s("code",[a._v("Singleton")]),a._v(" para esta variável. Daremos um exemplo do que dissemos aqui na seção Exemplo de código.")]),a._v(" "),s("p",[a._v("Há uma outra coisa a ser observada sobre a implementação em C++. Não é suficiente definir o singleton como um objeto global ou estático, confiando numa inicialização automática. Existem três razões para isto:")]),a._v(" "),s("ul",[s("li",[a._v("não podemos garantir que somente uma instância de um objeto estático será declarada;")]),a._v(" "),s("li",[a._v("talvez não tenhamos informação suficiente para instanciar cada singleton em tempo de inicialização estática. Um singleton pode necessitar de valores que são computados mais tarde, durante a execução do programa;")]),a._v(" "),s("li",[a._v("C++ não define a ordem pela qual os construtores para objetos globais são chamados entre unidades de compilação [ES90]. Isso significa que não podem existir dependências entre singletons; se alguma existir, então é inevitável a ocorrência de erro.")])]),a._v(" "),s("p",[a._v("Uma deficiência adicional (embora pequena) da abordagem objeto global/ estático é que ela força a criação de todos singletons, quer sejam usados ou não. O uso de uma função-membro estática evita todos estes problemas. Em Smalltalk, a função que retorna a instância única é implementada como um método de classe da classe Singleton. Para garantir que somente uma instância seja criada, redefine-se a operação new. A classe Singleton resultante pode ter os seguintes métodos de classe, em que "),s("code",[a._v("SoleInstance")]),a._v(" é uma variável de classe que não é usada em nenhum outro lugar.")]),a._v(" "),s("div",{staticClass:"language-smalltalk line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-smalltalk"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("new")]),a._v("\n    "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("-")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("self")]),a._v(" error"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v("'cannot create new object'")]),a._v("\ndefault\n    SoleInstance isNil ifTrue"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),a._v("Solelnstance "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":=")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("super")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("new")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("\n    "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("^")]),a._v(" Soleinstance\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br"),s("span",{staticClass:"line-number"},[a._v("3")]),s("br"),s("span",{staticClass:"line-number"},[a._v("4")]),s("br"),s("span",{staticClass:"line-number"},[a._v("5")]),s("br")])])]),a._v(" "),s("li",[s("p",[a._v('Criando subclasses da classe Singleton. O ponto principal não é a definição da subclasse, mas sim a instalação da sua única instância de maneira que os clientes possam ser capazes de usá-la. Em essência, a variável que referencia a instância do singleton deve ser iniciada com uma instância da subclasse. A técnica mais simples é determinar qual singleton você quer usar na operação Instance do Singleton. Um exemplo na seção de Exemplo mostra como implementar essa técnica com variáveis do ambiente (operacional). Uma outra maneira de escolher a subclasse de Singleton é retirar a implementação de Instance da classe-mãe (por exemplo, MazeFactory) e colocá-la na subclasse. Isto permite a um programador C++ decidir a classe do singleton em tempo de "Linkedição" (link-time), mantendo-a oculta dos seus clientes (por exemplo, fazendo a ligação com um arquivo-objeto que contém uma implementação diferente).\nA solução da ligação fixa a escolha da classe do singleton em tempo de "linkedição", o que torna difícil escolher a classe do singleton em tempo de execução. O uso de instruções condicionais para determinação da subclasse é mais flexível, porém codifica de maneira rígida o conjunto das classes Singleton possíveis. Nenhuma abordagem é flexível o bastante em todos os casos.\nUma abordagem mais flexível utiliza um sistema de registro de singletons (registry of singletons). Em vez de ter Instance definindo o conjunto das classes Singleton possíveis, as classes Singleton podem registrar suas instâncias singleton por nome, num sistema de registro de conhecimento geral. O sistema de registro associa nomes e singletons. Os nomes são constituídos de cadeias de caracteres. Quando Instance necessita um singleton, ela consulta o sistema de registro, procurando o singleton pelo nome. O sistema de registro procura o singleton correspondente (se existir) e o retorna ao cliente. Essa solução libera Instance da necessidade de ter que conhecer todas as possíveis classes ou instâncias do Singleton. Tudo o que é necessário é uma interface comum para todas as classes Singleton, que inclua operações de registro:')]),a._v(" "),s("div",{staticClass:"language-c line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-c"}},[s("code",[a._v("class Singleton "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\npublic"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("static")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("void")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("Register")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("const")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("char")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("*")]),a._v(" name"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" Singleton"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("*")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("static")]),a._v(" Singleton"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("*")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("Instance")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\nprotected"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("static")]),a._v(" Singleton"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("*")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("Lookup")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("const")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("char")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("*")]),a._v(" name"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\nprivate"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("static")]),a._v(" Singleton"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("*")]),a._v(" _ instance"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("static")]),a._v(" List"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("NameSingletonPair"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("*")]),a._v(" _registry"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br"),s("span",{staticClass:"line-number"},[a._v("3")]),s("br"),s("span",{staticClass:"line-number"},[a._v("4")]),s("br"),s("span",{staticClass:"line-number"},[a._v("5")]),s("br"),s("span",{staticClass:"line-number"},[a._v("6")]),s("br"),s("span",{staticClass:"line-number"},[a._v("7")]),s("br"),s("span",{staticClass:"line-number"},[a._v("8")]),s("br"),s("span",{staticClass:"line-number"},[a._v("9")]),s("br")])])])]),a._v(" "),s("p",[a._v("Register registra a instância de Singleton com um nome fornecido. Para manter o registro simples, necessitaremos que armazene uma lista de objetos "),s("code",[a._v("NameSingletonPair")]),a._v(". Cada "),s("code",[a._v("NameSingletonPair")]),a._v(" mapeia (associa) um nomea um singleton. Dado um nome, a operação "),s("code",[a._v("Lookup")]),a._v(" encontra o singleton correspondente. Assumiremos que uma variável do ambiente especifica o nome do singleton desejado.")]),a._v(" "),s("p",[a._v("Singleton• Singleton:: Instance ( ) {\ni f (_instance\nconst char• singletonName = ;\n/ / usuário ou ambiente fornece esse valor no início da execução\n_ instance = Lookup (singletonName) ;\n// lã)kup retorna O se não há qualquer singleton com o nome verificado\nreturn _ instance;")]),a._v(" "),s("p",[a._v("Onde as classes Singleton registram a si mesmas? Uma possibilidade é fazê-\n10 no seu constructor. Por exemplo, uma subclasse MySing1eton poderia\nfazer o seguinte:")]),a._v(" "),s("p",[a._v('MySingIeton:: ( ) (\nSingleton:: Register( "MySing1eton*, this) ;')]),a._v(" "),s("p",[a._v("Naturalmente, o construtor não será chamado a menos que alguém instancie\na classe, o que repete o problema que o padrão Singleton está tentando resolver!\nNós podemos contornar este problema em C++ através da definição de uma\ninstância estática de MySingleton. Por exemplo, podemos definir")]),a._v(" "),s("p",[a._v("static MySing1eton theSingIeton;")]),a._v(" "),s("p",[a._v("no arquivo que contém a implementação de MySingleton.")]),a._v(" "),s("p",[a._v("A classe Singleton não é mais responsável pela criação do singleton. Em vez\ndisso, sua responsabilidade primária é tornar acessível o objeto singleton\nescolhido no sistema. A solução que usa o objeto estático ainda apresenta um\nproblema potencial — todas as instâncias de todas as subclasses possíveis de\nSingleton devem ser criadas, pois, caso contrário, não serão registradas.")]),a._v(" "),s("h2",{attrs:{id:"exemplo-de-codigo"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#exemplo-de-codigo"}},[a._v("#")]),a._v(" Exemplo de código")]),a._v(" "),s("p",[a._v("Suponha que definimos uma classe MazeFactory para construir labirintos. MazeFactory define uma interface para construção de diferentes partes de um labirinto. As subclasses podem redefinir as operações para retornar instâncias de classes-produtos especializadas, tal como BombedWall no lugar de simples Objetos Wall.")]),a._v(" "),s("p",[a._v("O fato relevante aqui é que a aplicação Maze necessita somente de uma instância de uma fábrica de labirintos, e que essa instância deverá estar disponível para o código que construir qualquer parte do labirinto. É aí que o padrão Singleton entra. Ao tornar MazeFactory um singleton, nós tornamos o objeto-labirinto (maze) acessível global- mente sem recorrer a variáveis globais.")]),a._v(" "),s("p",[a._v("Para simplificar, suponhamos que nunca criaremos subclasses de Ma zeFactory (a alternativa será considerada mais à frente). Nós tornamos Ma uma classe Singleton em C++, acrescentando uma operação estática Instance e um membro estático "),s("code",[a._v("_instance")]),a._v(" para conter a única instância existente. Também devemos proteger o constructor para prevenir instanciações acidentais, as quais nos levariam a ter mais que uma instância.")]),a._v(" "),s("p",[a._v("class MazeFactory {\npubl i c :\nstatic MazeFactory* Instance ( ) ;\n// interface existente vai aqui\nprotected:\nMazeFactory ) ;\nprivate:\nstatic MazeFactory* _ instance;")]),a._v(" "),s("p",[a._v("A implementação correspondente é\nMazeFactory* MazeFactory; : _ instance = C\nMazeFactory* MazeFactory:: Instance ( ) (\nii (_instance O) {\n_ instance new MazeFactory ;\nreturn _instance;")]),a._v(" "),s("p",[a._v("Agora verificaremos o que acontece quando existem subclasses de Ma zeFactory\ne a aplicação tem que decidir qual delas usar. Selecionaremos o tipo de labirinto através\nde uma variável do ambiente e acrescentaremos o código que instancia a subclasse\napropriada de Ma z eFac tory com base no valor da variável do ambiente. Um bom lugar\npara colocar este código é a operação Instance, porque ela já instancia MazeFactory:")]),a._v(" "),s("p",[a._v('MazeFactory* MazeFactory :: Instance C) (\ni f C —instance —\nconst chars mazeStyle = getenv( ) ;\ni f (strcmp (mazestyle, • bombed") O) (\n_ instance = new BombedMazeFactory;\n) else it (strcmp (mazeStyIe, "enchanted"}\n_ instance = new EnchantedMazeFactory;\noutras subclasses possíveis\n) else {\n// default\n_ instance = new MazeFactory;\nreturn _ instance;')]),a._v(" "),s("p",[a._v("Note que Instance deve ser modificada toda vez que você define uma nova subclasse de MazeFactory. Isso pode não ser um problema nesta aplicação, mas pode ser um problema para as fábricas abstratas definidas num framework.")]),a._v(" "),s("p",[a._v("Uma solução possível seria usar a técnica do uso de um sistema de registro descrita na seção Implementação. A ligação dinâmica (dynamic linking) poderia também ser útil aqui —ela evitaria que a aplicação tivesse que carregar para a memória todas as subclasses que não são usadas.")]),a._v(" "),s("h2",{attrs:{id:"usos-conhecidos"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#usos-conhecidos"}},[a._v("#")]),a._v(" Usos conhecidos")]),a._v(" "),s("p",[a._v("Um exemplo do padrão Singleton em Smalltalk-80 [Par90] é o conjunto de mudanças no código efetuado por ChangeSet current. Um exemplo mais sutil é o relacionamento entre classes e suas metaclasses. Uma metaclasse é a classe de uma classe, e cada metaclasse tem uma instância. As metaclasses não têm nomes (exceto indiretamente, através do nome da sua única instância), mas registram e acompanham a sua única instância, e normalmente não criarão outra.")]),a._v(" "),s("p",[a._v("O toolkit para construção de interfaces de usuário Inter Views [LCI*92] usa o padrão Singleton para acessar as únicas instâncias de suas classes Session e WidgetKit, entre outras. Session define o ciclo de eventos disparáveis da aplicação principal, armazena o banco de dados das preferências de estilo do usuário e administra conexões para um ou mais dispositivos físicos de display. WidgetKit é uma Abstract Factory (95) para definir os widgets de estilo de interação. A operação WidgetKit:: instance determina a subclasse específica de WidgetKit que é instanciada baseada numa variável de ambiente que Session define. Uma operação similar em determina se são suportados displays monocromáticos ou coloridos e configura a instância singleton de Session de acordo.")]),a._v(" "),s("h2",{attrs:{id:"padrao-relacionados"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#padrao-relacionados"}},[a._v("#")]),a._v(" Padrão relacionados")]),a._v(" "),s("p",[a._v("Muitos padrões podem ser implementados usando Singleton. Ver "),s("a",{attrs:{href:"/gof/AbstractFactory"}},[a._v("Abstract Factory")]),a._v(", "),s("a",{attrs:{href:"/gof/Builder"}},[a._v("Builder")]),a._v(" e "),s("a",{attrs:{href:"/gof/Prototype"}},[a._v("Prototype")]),a._v(".")]),a._v(" "),s("h2",{attrs:{id:"referencias"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#referencias"}},[a._v("#")]),a._v(" Referências")]),a._v(" "),s("hr",{staticClass:"footnotes-sep"}),a._v(" "),s("section",{staticClass:"footnotes"},[s("ol",{staticClass:"footnotes-list"},[s("li",{staticClass:"footnote-item",attrs:{id:"fn1"}},[s("p",[a._v("GAMMA, Erich. et al. Padrões de projetos: Soluções reutilizáveis de software orientados a objetos Bookman editora, 2009. "),s("a",{staticClass:"footnote-backref",attrs:{href:"#fnref1"}},[a._v("↩︎")])])])])])])}),[],!1,null,null,null);e.default=t.exports}}]);