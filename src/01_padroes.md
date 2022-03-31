# Padrões de Projetos 🚧

[[toc]]

## Introdução

A ideia de padrões foi apresentada por Christopher Alexander em 1977 no contexto de Arquitetura (de prédios e cidades):

- Problemas semelhantes com soluções diferentes
- Reinventando a Roda



## Conceito

Também conhecidos como \textit{Padrões de Desenho de Software OO} ou simplesmente como \textit{Padrões}.

::: tip Definição
Cada padrão descreve um problema que ocorre repetidas vezes em nosso ambiente, e então descreve o núcleo da solução para aquele problema, de tal maneira que pode-se usar essa solução milhões de vezes sem nunca fazê-la da mesma forma duas vezes [^Alexander]
:::


::: tip Definição
Os padrões de projeto são descrições de objetos que se comunicam e classes que são customizadas para resolver um problema genérico de design em um contexto específico [^GAMMA]
:::


### Outras definições

- Maneira testada ou documentada de alcançar um objetivo qualquer.
  - Padrões são comuns em várias áreas da engenharia
- Design Patterns, ou Padrões de Projeto
  - Padrões para alcançar objetivos na engenharia de software usando classes e métodos em linguagens orientadas a objeto
  - Inspirado em "A Pattern Language" de Christopher Alexander, sobre padrões de arquitetura de cidades, casas e prédios
  - "Design Patterns" de Erich Gamma, John Vlissides, Ralph Jonhson e Richard Helm, conhecidos como "The Gang of 	Four", ou GoF, descreve 23 padrões de projeto úteis

## Vantagens

- Aprender com a experiência dos outros
  - Identificar problemas comuns em engenharia de software e utilizar soluções testadas e bem documentadas
  - Utilizar soluções que têm um nome: facilita a comunicação, compreensão e documentação
- Aprender a programar bem com orientação a objetos
  - Os 23 padrões de projeto "clássicos" utilizam as melhores práticas em OO para atingir os resultados desejados
- Desenvolver software de melhor qualidade
  - Os padrões utilizam eficientemente polimorfismo, herança, modularidade, composição, abstração para construir código reutilizável, eficiente, de alta coesão e baixo acoplamento
- Vocabulário comum
  - Faz o sistema ficar menos complexo ao permitir que se fale em um nível mais alto de abstração
- Ajuda na documentação e na aprendizagem
  - Conhecendo os padrões de projeto torna mais fácil a compreensão de sistemas existentes
  - "As pessoas que estão aprendendo POO freqüentemente reclamam que os sistemas com os quais trabalham usam herança de forma convoluida e que é difí cil de seguir o fluxo de controle. Geralmente a causa disto é que eles não entendem os padrões do sistema" [GoF]
  - Aprender os padrões ajudam um novato a agir mais como um especialista
- Uma prática adjunta aos métodos existentes
  - Mostram como usar práticas primitivas
  - Descrevem mais o porquê do design
  - Ajudam a converter um modelo de análise em um modelo de implementação
- Um alvo para refatoramento
  - Captura as principais estruturas que resultam do refatoramento
  - Uso de patterns desde o iní cio pode diminuir a necessidade de refatoramento			

## Elementos de um padrão

- Nome
- Problema
  - Quando aplicar o padrão, em que condições?
- Solução
  - Descrição abstrata de um problema e como usar os elementos disponíveis (classes e objetos) para solucioná-lo
- Consequências
  - Custos e benefícios de se aplicar o padrão
  - Impacto na flexibilidade, extensibilidade, portabilidade e eficiência do sistema

<table>
<caption>Tabela de padrões do Gof </caption>
<thead>
  <tr>
    <th colspan="2"></th>
    <th colspan="3">Propósito</th>
  </tr>
</thead>
<tbody>
  <tr>
    <td colspan="2"></td>
    <td>De criação</td>
    <td>Estrutural</td>
    <td>Comportamental</td>
  </tr>
  <tr>
    <td rowspan="2">Escopo</td>
    <td>Classe</td>
    <td>
      <ul>
        <li>Factory Method</li>
      </ul>
    </td>
    <td>
        <ul>
            <li>Adapter(class)</li>
        </ul>
    </td>
    <td>
      <ul>
        <li>Interperter</li>
        <li>Template Method</li>
      </ul>
    </td>
  </tr>
  <tr>
    <td>Objeto</td>
    <td>
        <ul>
            <li>Abstract Factory</li>
            <li>Builder</li>
            <li>Prototype</li>
            <li>Singleton</li>
        </ul>
    </td>
    <td>
        <ul>
            <li>Adapter (object)</li>
            <li>Bridge</li>
            <li>Composite</li>
            <li>Facade</li>
            <li>Flyweight</li>
            <li>Proxy</li>
        </ul>
    </td>
    <td>
        <ul>
            <li>Chain of Responsibility</li>
            <li>Command</li>
            <li>Interator</li>
            <li>Mediator</li>
            <li>Memento</li>
            <li>Observer</li>
            <li>State</li>
            <li>Strategy</li>
            <li>Visitor</li>
        </ul>
    </td>
  </tr>
</tbody>
</table>
{
\usebackgroundtemplate{}

\begin{figure}
\centering
\includegraphics[width=0.9\paperwidth]{tabela}
\caption{Tabela de padrões do Gof \cite{gamma1994design}}
\label{fig:tabela}
\end{figure}
		

\begin{figure}
\centering
\includegraphics[height=0.7\paperheight]{relacao}
\caption{Relação entre os padrões do Gof \cite{gamma1994design}}
\label{fig:relacao}
\end{figure}
		

}

!!!include(src/ref.md)!!!


%
%Anti-padrões de programação[editar | editar código-fonte]
%Complexidade acidental: Introdução de complexidade desnecessária em uma solução
%Ação à distância: Interação inesperada entre partes distantes de um sistema
%Fé cega: Falta de checar (a) a correção de um bug ou (b) o resultado de uma subrotina
%Âncora do barco: Manter uma parte de um sistema que não tem mais uso
%Espera ativa: Consumir CPU enquanto espera por algo acontecer, normalmente checando várias vezes ao invés de enviar mensagem
%Culto de programação: Usar padrões sem saber o motivo
%Programando por exceção: Adicionar código novo para lidar com cada caso especial quando esse é reconhecido
%Fluxo de lava: Manter código indesejável (redundante ou de baixa qualidade) porque removê-lo é caro ou tem conseguências imprevisíveis
%Números mágicos: Incluir números inexplicados em algoritmos
%Strings mágicas: Incluir literais no código para comparações inexplicadas
%Don't repeat yourself': Escrever código que contém padrões repetitivos, a serem evitados com o princípio da abstração
%Código espaguete: Programas que têm a estrutura pouco compreensível, especialmente por mal uso das estruturas de código

