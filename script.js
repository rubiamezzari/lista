let mostrarImagens = true; // Variável para controlar a exibição das imagens

// Função para carregar produtos do localStorage
function carregarProdutos() {
    const listaProdutos = document.getElementById('lista-produtos');
    listaProdutos.innerHTML = ''; // Limpa a lista antes de adicionar

    const produtos = JSON.parse(localStorage.getItem('produtos')) || [];
    produtos.forEach(({ nome, imagem }) => {
        const li = document.createElement('li'); // Cria um novo item de lista
        li.innerHTML = `<strong>${nome}</strong><br>`; // Adiciona nome do produto

        if (mostrarImagens) {
            li.innerHTML += `<img src="${imagem}" alt="${nome}">`; // Adiciona a imagem se mostrarImagens for true
        }
        
        listaProdutos.appendChild(li); // Adiciona o item à lista
    });
}

// Função para adicionar um novo produto
function adicionarProduto() {
    const inputProduto = document.getElementById('produto');
    const inputImagem = document.getElementById('imagem');
    const nome = inputProduto.value;
    const imagem = inputImagem.value;

    if (nome && imagem) { // Verifica se ambos os campos estão preenchidos
        const produtos = JSON.parse(localStorage.getItem('produtos')) || [];
        produtos.push({ nome, imagem }); // Adiciona um objeto com nome e imagem
        localStorage.setItem('produtos', JSON.stringify(produtos)); // Armazena no localStorage
        inputProduto.value = ''; // Limpa o campo de entrada do nome
        inputImagem.value = ''; // Limpa o campo de entrada da imagem
        carregarProdutos(); // Atualiza a lista
    } else {
        alert('Por favor, preencha ambos os campos.'); // Alerta se algum campo estiver vazio
    }
}

// Função para limpar todos os produtos
function limparProdutos() {
    localStorage.clear(); // Limpa o localStorage
    carregarProdutos(); // Atualiza a lista na tela
}

// Função para alternar a exibição das imagens
function alternarImagens() {
    mostrarImagens = !mostrarImagens; // Alterna a variável
    carregarProdutos(); // Atualiza a lista com a nova configuração
}

// Adiciona eventos aos botões
document.getElementById('adicionar').addEventListener('click', adicionarProduto);
document.getElementById('limpar').addEventListener('click', limparProdutos);
document.getElementById('toggle-imagens').addEventListener('click', alternarImagens); // Adiciona o evento ao botão de alternar

// Carrega os produtos ao inicializar a página
carregarProdutos();
