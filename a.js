const addToCartBtns = document.getElementsByClassName("add-to-cart-btn");

[...addToCartBtns].forEach(
  (btn) => { 
    btn.addEventListener("click", (event) => {
      // You can define the action you want to perform on click here.
      const id = parseInt(btn.id); // Get the ID of the button clicked
      cart.addItem(id, products); // Call the addItem method with the button's ID
    });
  }
);
