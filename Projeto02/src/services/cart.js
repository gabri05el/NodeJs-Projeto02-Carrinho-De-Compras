// Quais açoes meu carrinho pode fazer

// CASOS DE USO
// Adicionar item no carrinho
async function addItem(userCart, item) {
    userCart.push(item);
}
  
// Calcular o total do carrinho
async function calculateTotal(userCart) {
    const result = userCart.reduce((total, item) => total + item.subtotal(), 0);
    console.log(`\nTotal de: R$${result}`);
}
  
// Deletar item do carrinho
async function deleteItem(userCart, name) {
    const index = userCart.findIndex((item) => item.name === name);

    if (index !== -1) {
        userCart.splice(index, 1);
    }
}
  
// Remover um item - diminui um item
async function removeItem(userCart, item) {
    // 1- encontrar o indice do item
    const indexFound = userCart.findIndex((p) => p.name === item.name);
    // 2- Caso não encontre o item
    if(indexFound == -1) {
        console.log("Item não encontrado");
        return;
    }
    // 3- item > 1 subtrair um item
    if(userCart[indexFound].quantity > 1) {
        userCart[indexFound].quantity -= 1;
    }
    // 4- caso item = 1 deletar o item
    if(userCart[indexFound].quantity == 1) {
        userCart = userCart.slice(indexFound, 1);
    }
}
  
// Mostra todos os items do carrinho
async function displaycart(userCart) {
    console.log("Lista do carrinho: \n");
    console.log("Item   |   Valor   |   Quantidade   |   Valor Total");
    userCart.forEach((item, index) => {
        console.log(`${index + 1}. ${item.name} - R$ ${item.price} | ${item.quantity}x | Subtotal = ${item.subtotal()}`);
    })
}
  
export { addItem, calculateTotal, deleteItem, removeItem, displaycart };
