# linked-comics

Linked Gourmet Job Test

Live App [here](https://linked-comics.herokuapp.com/)

## Prerequisites

You will need the following things properly installed on your computer.

* [Git](https://git-scm.com/)
* [Node.js](https://nodejs.org/) (with npm)
* [Yarn](https://yarnpkg.com/)
* [Ember CLI](https://ember-cli.com/)
* [Google Chrome](https://google.com/chrome/)

## Installation

* `git clone <repository-url>` this repository
* `cd linked-comics`
* `yarn`

## Running / Development

* `ember serve`
* Visit your app at [http://localhost:4200](http://localhost:4200).
<!-- * Visit your tests at [http://localhost:4200/tests](http://localhost:4200/tests). -->

### Building

* `ember build` (development)
* `ember build --environment production` (production)

## Funcionamento

Ao abrir a App ([http://localhost:4200](http://localhost:4200)) é carregado a página principal, onde os quadrinhos são carregados. Clicando em um quadrinho, você irá ára a página de detalhes dele, onde poderar adicioná-lo ao carrinho de compra.

Aleatóriamente, 10% dos quadrinhos são marcados com um ícone de diamante, indicando que ele é um quadrinho raro.

Clicando no ícone de carrinho de compras no header, você verá um resumo dos ítens já adicionados. Essa janela também possui um botão que leva para o chackout.

Na página de checkout você pode adicionar um cupom de desconto que te dará 10% de desconto no valor total da compra.

Depois disso, é só finalizar a compra e voltar à home.