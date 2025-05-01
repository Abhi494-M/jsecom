const cartValue = document.querySelector("#cartValue");

export const updateCartValue = (cartProdcuts)=>{
    return(cartValue.innerHTML=`<i class="fa-solid fa-cart-shopping">${cartProdcuts.length}</i>`);
};