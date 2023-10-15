const produto1 = {
  id: "1",
  nome: "Camisa Roxa",
  marca: "Nike",
  preco: 70,
  nomeArquivoImagem: "produto-1.jpg",
  feminino: false,
};

const produto2 = {
  id: "2",
  nome: "Camisa Barcelona",
  marca: "Nike",
  preco: 110,
  nomeArquivoImagem: "produto-2.jpg",
  feminino: false,
};

const produto3 = {
  id: "3",
  nome: "Camisa Portugal",
  marca: "Nike",
  preco: 120,
  nomeArquivoImagem: "produto-3.jpg",
  feminino: false,
};

const produto4 = {
  id: "4",
  nome: "Camisa Nike Air",
  marca: "Nike",
  preco: 200,
  nomeArquivoImagem: "produto-4.jpg",
  feminino: false,
};

const produto5 = {
  id: "5",
  nome: "Camisa Jordan",
  marca: "Nike",
  preco: 300,
  nomeArquivoImagem: "produto-5.jpg",
  feminino: false,
};

const produto6 = {
  id: "6",
  nome: "Camisa Brasil",
  marca: "Nike",
  preco: 150,
  nomeArquivoImagem: "produto-6.jpg",
  feminino: false,
};

const produto7 = {
  id: "7",
  nome: "Camisa Portugal 2",
  marca: "Nike",
  preco: 120,
  nomeArquivoImagem: "produto-7.jpg",
  feminino: false,
};

const produto8 = {
  id: "8",
  nome: "Camisa Brasil 2",
  marca: "Nike",
  preco: 300,
  nomeArquivoImagem: "produto-8.jpg",
  feminino: false,
};

export const catalogo = [
  produto1,
  produto2,
  produto3,
  produto4,
  produto5,
  produto6,
  produto7,
  produto8,
];

export function salvarLocalStorage(chave, informacao) {
  localStorage.setItem(chave, JSON.stringify(informacao));
}

export function lerLocalStorage(chave) {
  JSON.parse(localStorage.getItem(chave));
}

export function desenharProdutoCarrinhoSimples(
  idProduto,
  idContainerHtml,
  quantidadeProduto
) {
  const produto = catalogo.find((p) => p.id === idProduto);
  const containerProdutosCarrinho = document.getElementById(idContainerHtml);

  const elementoArticle = document.createElement("article");
  const articleClasses = [
    "flex",
    "bg-stone-200",
    "rounded-lg",
    "p-1",
    "relative",
    "mb-2",
    "w-96",
  ];

  for (const articleClass of articleClasses) {
    elementoArticle.classList.add(articleClass);
  }

  const cartaoProdutoCarrinho = `
    <img
      src="./assets/img/${produto.nomeArquivoImagem}"
      alt="Carrinho: ${produto.nome}"
      class="h-24 rounded-lg"
    />
    <div class="p-2 flex flex-col justify-between">
      <p class="text-slate-900 text-sm">
        ${produto.nome}
      </p>
      <p class="text-slate-400 text-xs">Tamanho: M</p>
      <p class="text-green-700 text-lg">$${produto.preco}</p>
    </div>
    <div class='flex text-slate-950 items-end absolute bottom-0 right-2 text-lg'>
        <p id='quantidade-${produto.id}' class='ml-2'>${quantidadeProduto}</p>
    </div>`;
  //<article class="flex bg-slate-100 rounded-lg p-1 relative">codigo do cartao do produto</article>

  elementoArticle.innerHTML = cartaoProdutoCarrinho;
  containerProdutosCarrinho.appendChild(elementoArticle);
}
