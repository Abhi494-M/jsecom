import { getCartProductsFromLS } from "./getCartProducts";
import { showToast } from "./showToast";
import { updateCartValue } from "./updateCartValue";


getCartProductsFromLS();

export const addToCart = (event,id,stock)=>{
let arrLocalStorageProduct = getCartProductsFromLS();
const currentProdElem = document.querySelector(`#card${id}`);
 let  quantity = currentProdElem.querySelector(".productQuantity").innerText;
 let price = currentProdElem.querySelector(".productPrice").innerText;
 console.log(quantity,price);

 price = price.replace("₹", " ");

let existingProd = arrLocalStorageProduct.find((curProd) => curProd.id === id);
 
if (existingProd && quantity>1){
  quantity = Number(exsitingProd.quantity) + Number(quantity);
    price = Number(price* quantity);
    let upatedCart = {id,quantity,price};
        
   
     upatedCart = arrLocalStorageProduct.map((curProd)=> {
      return curProd.id === id? upatedCart :curProd;
          

   });
   console.log(upatedCart);
    localStorage.setItem("cartProductLS",JSON.stringify(updatedCart)); 
}
//show toast when product added to the cart
    showToast("add", id);
  


if(existingProd){
    return false;
    
 }
price = Number(price* quantity);
quantity= Number(quantity);

// let upateCart = {id,quantity,price};
arrLocalStorageProduct.push({id,quantity,price});
localStorage.setItem("cartProductLS",JSON.stringify(arrLocalStorageProduct) );

//update the cart button value
updateCartValue(arrLocalStorageProduct);

 //show toast when product added to the cart
  showToast("add", id);

};