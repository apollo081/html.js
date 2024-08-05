// Método simples
const titulo = document.createElement('h1');
titulo.id = 'titulo';
titulo.textContent = 'Bem-vindo à nossa loja!';
document.body.appendChild(titulo);

// Método complexo
const produto = document.createElement('div');
produto.className = 'produto';

const nome = document.createElement('h2');
nome.textContent = 'Produto Exemplo';

const descricao = document.createElement('p');
descricao.textContent = 'Este é um excelente produto que você vai adorar.';

const preco = document.createElement('p');
preco.textContent = 'Preço: R$ 99,99';

// Opcional: adicionar uma imagem
const imagem = document.createElement('img');
imagem.src = 'https://via.placeholder.com/150';
imagem.alt = 'Imagem do produto';

// Adiciona os elementos filhos ao elemento produto
produto.appendChild(imagem);
produto.appendChild(nome);
produto.appendChild(descricao);
produto.appendChild(preco);

// Adiciona o elemento produto ao body
document.body.appendChild(produto);
