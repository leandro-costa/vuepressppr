## Princípio Aberto-Fechado

Adaptado de [^RobsonOCP] e [^JoaoRobertoSOLID].

O OCP é mais um daqueles princípios de orientação a objetos que nos ajudam a eliminar *design smells,* possibilitando que nosso código ganhe em facilidade de manutenção e extensão.

::: tip Princípio Aberto-Fechado
Entidades de software (classes, módulos, funções, etc.) devem ser abertas para extensão mas fechadas para modificação.
:::

Objetos ou entidades devem estar abertos para extensão, mas fechados para modificação, ou seja, quando novos comportamentos e recursos precisam ser adicionados no software, devemos estender e não alterar o código fonte original.

Exemplo prático do OCP:
Em um sistema hipotético de RH, temos duas classes que representam os contratos de trabalhos dos funcionários de uma pequena empresa, contratados e estagiários. Além de uma classe para processar a folha de pagamento.

```java
class ContratoClt extends Funcionario{
    public double salario(){
        //...
    }
}

class Estagio extends Funcionario{
    public double bolsaAuxilio(){
        //...
    }
}

class FolhaDePagamento{
    private double saldo;
    
    public double calcular(Funcionario funcionario )
    {
        if ( funcionario instanceof ContratoClt ) {
            this.saldo = funcionario.salario();
        } else if ( funcionario instanceof Estagio) {
            this.saldo = funcionario.bolsaAuxilio();
        }
    }
}
```

A classe `FolhaDePagamento` precisa verificar o funcionário para aplicar a regra de negócio correta na hora do pagamento. Supondo que a empresa cresceu e resolveu trabalhar com funcionários PJ, obviamente seria necessário modificar essa classe! Sendo assim, estaríamos quebrando o princípio Open-Closed do SOLID.


Qual o problema de se alterar a classe FolhaDePagamento?

Não seria mais fácil apenas acrescentar mais um IF e verificar o novo tipo de funcionário PJ aplicando as respectivas regras? Sim, e provavelmente essa seria a solução que programadores menos experientes iriam fazer. Mas, esse é exatamente o problema! *Alterar uma classe já existente para adicionar um novo comportamento, corremos um sério risco de introduzir bugs em algo que já estava funcionando.*

::: hot Lembre-se
OCP preza que uma classe deve estar fechada para alteração e aberta para extensão.
:::


Como adicionamos um novo comportamento sem alterar o código fonte já existente?

O guru Uncle Bob resumiu a solução em uma frase:

> Separate extensible behavior behind an interface, and flip the dependencies.

Em tradução direta, seria:

> Separe o comportamento extensível por trás de uma interface e inverta as dependências.

O que devemos fazer é concentrar nos aspectos essências do contexto, abstraindo-os para uma interface. Se as abstrações são bem definidas, logo o software estará aberto para extensão.

Aplicando OCP na prática

===========================

Voltando para o nosso exemplo, podemos concluir que o contexto que estamos lidando é a remuneração dos contratos de trabalho, aplicando as premissas de se isolar o comportamento extensível atrás de uma interface, podemos criar uma interface com o nome `Remuneravel` contendo o método `remuneracao()`, e fazer com que nossas classes de contrato de trabalho implementem essa interface. Além disso, iremos colocar as regras de calculo de remuneração para suas respectivas classes, dentro do método `remuneracao()`, fazendo com que a classe `FolhaDePagamento` dependa somente da interface `Remuneravel` que iremos criar.

Veja o código refatorado abaixo:

Agora a classe FolhaDePagamento não precisa mais saber quais métodos chamar para calcular. Ela será capaz de calcular o pagamento corretamente de qualquer novo tipo de funcionário que seja criado no futuro (ContratoPJ) — desde que ele implemente a interface Remuneravel — sem qualquer necessidade de alteração do seu código fonte. Dessa forma, acabamos de implementar o princípio de Aberto-Fechado do SOLID em nosso código!
Open-Closed Principle também é base para o padrão de projeto Strategy — Falerei desse padrão em um próximo artigo. Particularmente esse é o princípio que eu mais admiro, a sua principal vantagem é a facilidade na adição de novos requisitos, diminuindo as chances de introduzir novos bugs — ou bugs de menor expressão — pois o novo comportamento fica isolado, e o que estava funcionando provavelmente continuara funcionando.
