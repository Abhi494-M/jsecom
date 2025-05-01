export const homeQuantityToggle =(event,id,stock)=>{// Prevent the default behavior (in case of form submit or button click)
const currentCardElement = document.querySelector(`#card${id}`);

// console.log(currentCardElement);

const productQuantity = currentCardElement.querySelector('.productQuantity');
console.log(productQuantity);

let quantity = parseInt(productQuantity.getAttribute('data-quantity')) || 0;

if(event.target.className ==="cartIncrement"){
    if(quantity<stock){
    quantity +=1;         // Increment by 1 if quantity is less than stock
      }  else if (quantity ===stock){
        quantity= stock;    // Do nothing if quantity is equal to stock

      }
    
    }

    if(event.target.className ==="cartDecrement"){
        if(quantity>0){
            quantity-=1; //// Decrease by 1, but ensure it doesn't go below 0
        }
    }
    productQuantity.innerText = quantity;
    console.log(quantity);
    productQuantity.setAttribute("data-quantity",quantity.toString());

  //  // Calculate the total price based on the quantity
  //  const totalPrice = pricePerUnit * quantity;

  //  // Update the total price display
  //  const totalPriceElement = currentCardElement.querySelector('.totalPrice'); // Assuming you have an element for total price
  //  totalPriceElement.innerText = `$${totalPrice.toFixed(2)}`;  // Format price to two decimal places
  //  console.log(totalPrice);

    return quantity;
}; 
