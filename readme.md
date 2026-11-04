# Ex02 — Ordem e Caos

## Conceito

Neste exercício, explorei a utilização de condicionais `if/else` em p5.js, através de uma composição visual interativa intitulada *Ordem e Caos*.

A composição é constituída por uma grelha de círculos, utilizando uma paleta de cores entre o roxo e o amarelo. Procurei explorar a relação entre cor, dimensão, repetição e interação, criando uma composição que se transforma através do movimento e da ação do rato.

## Condições utilizadas

Utilizei duas estruturas condicionais `if/else`:

- **Posição horizontal do rato (`mouseX`):** permite alterar uma característica da composição consoante a posição do rato no canvas.
- **Estado do rato (`mouseIsPressed`):** quando o rato é pressionado, aparece um círculo amarelo com contorno roxo na posição do cursor. Quando deixa de ser pressionado, essa forma desaparece.

Estas condições permitem que a composição reaja à interação do utilizador.

## Exploração visual

Para além das condicionais, explorei a mistura gradual de cores através da função `lerpColor()`, criando uma transição entre o roxo e o amarelo.

Utilizei também a função `map()` para relacionar a posição horizontal do rato com o tamanho dos círculos, permitindo uma variação gradual entre dimensões pequenas e grandes.

A repetição das formas através de ciclos `for` permitiu construir uma grelha regular, enquanto a interação introduz uma alteração temporária na composição.

## Processo e utilização de inteligência artificial

O desenvolvimento do exercício contou com o apoio do ChatGPT para compreender as condicionais `if/else`, explorar possibilidades visuais e auxiliar na estruturação do código.

O código foi adaptado e testado no p5.js, procurando compreender o funcionamento das condições e das funções utilizadas.

## Fontes

- [p5.js — Referência oficial](https://p5js.org/reference/)
- [Aula 3 — Design de Inovação: Condicionais if/else](https://hacktoimprove.com/classes/DesignDeInovacao/Sumarios/aula3/#condicionais-if-else)
- [ChatGPT — OpenAI](https://chatgpt.com/), utilizado como apoio à aprendizagem e desenvolvimento do código.