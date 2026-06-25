// Declarar um array vazio para armazenar as doações
const products = [];

// Declarando a função para adicionar o produto
function addProduct() {
    const donorName = document.getElementById('product-yourname').value;
    const productName = document.getElementById('product-name').value;
    const productCategory = document.getElementById('product-category').value;
    const productAuthor = document.getElementById('product-author').value;

    /* Verificar se todos os campos estão preenchidos */
    if (donorName && productName && productCategory && productAuthor) {
        /* Cria o objeto product com as novas chaves pedidas */
        const product = {
            donor: donorName,
            name: productName,
            category: productCategory,
            author: productAuthor
        };
        
        // Método push para incluir os dados do produto na lista
        products.push(product);
        
        // Atualizar a tabela com a nova lista
        displayProducts();
        
        // Limpar todos os campos de entrada após o cadastro
        document.getElementById('product-yourname').value = "";
        document.getElementById('product-name').value = "";
        document.getElementById('product-category').value = "";
        document.getElementById('product-author').value = "";
    }
} 

// Criar função para adicionar os produtos e organizar na tabela
function displayProducts() {
    const productList = document.getElementById('product-list');
    productList.innerHTML = ""; // Limpa a tabela antes de redesenhar

    // Incluir uma linha com as quatro células para cada produto
    products.forEach(function(product) {
        const row = productList.insertRow();
        
        const cell1 = row.insertCell(0);
        cell1.textContent = product.donor; // Nome do doador

        const cell2 = row.insertCell(1);
        cell2.textContent = product.name;  // Nome do artigo

        const cell3 = row.insertCell(2);
        cell3.textContent = product.category; // Categoria

        const cell4 = row.insertCell(3);
        cell4.textContent = product.author; // Autor ou compositor
    });
}

// Capturando o formulário de cadastro
const productForm = document.getElementById('product-form');

// Adicionando o escutador de evento para o envio do formulário
productForm.addEventListener('submit', function(e) {
    e.preventDefault(); // Previne o recarregamento automático da página
    addProduct();
});