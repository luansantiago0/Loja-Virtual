import {
  desenharProdutoCarrinhoSimples,
  lerLocalStorage,
} from "./src/utilidades";

function desenharProdutoCheckout() {
  const idsProdutoCarrinhoComQuantidade = lerLocalStorage("carrinho") ?? {};
  for (const idProduto in idsProdutoCarrinhoComQuantidade) {
    desenharProdutoCarrinhoSimples(
      idProduto,
      "container-produtos-checkout",
      idsProdutoCarrinhoComQuantidade[idProduto]
    );
  }
}

desenharProdutoCheckout();
