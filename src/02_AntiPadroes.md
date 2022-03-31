# Anti-padrões de programação

[^WikAntipadrao]

- Complexidade acidental
    - Introdução de complexidade desnecessária em uma solução
- Ação à distância
  - Interação inesperada entre partes distantes de um sistema
- Fé cega: 
  - Falta de checar (a) a correção de um bug ou (b) o resultado de uma subrotina
- Âncora do barco
  - Manter uma parte de um sistema que não tem mais uso
- Espera ativa
  - Consumir CPU enquanto espera por algo acontecer, normalmente checando várias vezes ao invés de enviar mensagem
- Culto de programação 
  - Usar padrões sem saber o motivo
- Programando por exceção 
  - Adicionar código novo para lidar com cada caso especial quando esse é reconhecido
- Fluxo de lava
  - Manter código indesejável (redundante ou de baixa qualidade) porque removê-lo é caro ou tem conseguências imprevisíveis
- Números mágicos 
  - Incluir números inexplicados em algoritmos
- Strings mágicas 
  - Incluir literais no código para comparações inexplicadas
- Don't repeat yourself' 
  - Escrever código que contém padrões repetitivos, a serem evitados com o princípio da abstração
- Código espaguete 
  - Programas que têm a estrutura pouco compreensível, especialmente por mal uso das estruturas de código

!!!include(src/ref.md)!!!