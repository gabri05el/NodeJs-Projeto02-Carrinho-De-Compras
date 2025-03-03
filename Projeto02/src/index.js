import * as cartService from "./services/cart.js";
import createItem from "./services/itens.js";

const myCart = [];
const myWhishList = [];

const item1 = await createItem("Barbie", 279.99, 3);
const item2 = await createItem("Max Steel", 259.99, 2);

// Adicinou os 2 itens
await cartService.addItem(myCart, item1);
await cartService.addItem(myCart, item2);

// Coloca o Item em outra lista
// await cartService.addItem(myWhishList, item2);

// Remove 1 item da lista do carrinho
await cartService.removeItem(myCart, item2);

// Mostra os itens, quantidade, valores do carrinho
await cartService.displaycart(myCart,)

// Deletou os 2 itens
// await cartService.deleteItem(myCart, item1.name);
// await cartService.deleteItem(myCart, item2.name);

console.log("O valor do seu carrinho é: ");
await cartService.calculateTotal(myCart);
