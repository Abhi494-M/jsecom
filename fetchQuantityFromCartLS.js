import { getCartProductsFromLS } from "./getCartProducts"

export const fetchQuantityFromCartLS = (id, price)=>{
 let CartProducts =getCartProductsFromLS();
 let existingProduct = CartProducts.find((curProd)=> curProd.id===id);
 let quantity =1;
 if( existingProduct){

    quantity = existingProduct.quantity;
    price = existingProduct.price;

 }
 return {quantity, price};

}