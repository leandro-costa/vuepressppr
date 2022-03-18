## Princípio da Responsabilidade Única (SRP)

Adaptado de [^RobsonSRP] e [^JoaoRobertoSOLID].

Este princípio nada mais é do que uma perspectiva diferente para um dos mais fundamentais princípios da orientação a objetos: a coesão.

Esse princípio declara que uma classe deve ser especializada em um único assunto e possuir apenas uma responsabilidade dentro do software, ou seja, a classe deve ter uma única tarefa ou ação para executar.

::: tip Princípio da Responsabilidade Única
Uma classe deve ter um, e somente um, motivo para mudar.
:::

Vamos tentar entender o que isso significa e eventuais problemas causados pela violação deste princípio.

### Alguns Problemas


Quando estamos aprendendo programação orientada a objetos, sem sabermos, damos a uma classe mais de uma responsabilidade e acabamos criando classes que fazem de tudo (*God Class*). Num primeiro momento isso pode parecer eficiente, mas como as responsabilidades acabam se misturando, quando há necessidade de realizar alterações nessa classe, será difícil modificar uma dessas responsabilidades sem comprometer as outras. Toda alteração acaba sendo introduzida com um certo nível de incerteza em nosso sistema — principalmente se não existirem testes automatizados!

Alguns problemas decorrentes da utilização de *God Class*:

- Dificuldade de compreensão e, portanto, dificuldade de manutenção.
- Dificuldade de reuso.
- Com responsabilidades entrelaçadas em uma mesma classe, pode ficar difícil alterar uma dessas responsabilidades sem comprometer as outras (rigidez) e pode acabar quebrando outras partes do software (fragilidade).
- Acoplamento alto, ou seja, a classe tem um número excessivo de dependências, e portanto fica mais sujeita a mudanças em decorrência de alterações em outras classes (novamente a fragilidade).

### Exemplos Comuns de Violação

Imaginem uma classe de negócio Pedido:

```java
public class Pedido{
    public void adicionarProduto(Produto produto, int quantidade){}
    public double calcularTotal(){}
    public void gerarPlanilhaExcel(){}
}
```

No exemplo acima, temos uma quebra do SRP de uma forma bem explícita, uma vez que temos responsabilidades que deveriam ser de componentes distintos do software. Enquanto os dois primeiros métodos fazem sentido para o domínio do qual Pedido faz parte, o último está relacionado à exibição de dados em um formato específico, o que faz mais sentido em camadas superiores, como de Aplicação ou de UI.

