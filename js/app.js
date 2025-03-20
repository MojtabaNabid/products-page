const searchByName = document.querySelector(".searchByName");

const searchByNameHandler = (event) => {
  console.log(event.target.value);
  const cart = document.getElementsByClassName("cart");
  console.log(cart);
  for (let product of cart) {
    if(event.target.value === "") {
        product.classList.remove("hidden")
    }else {
        if (!product.getElementsByClassName('productName')[0].innerText.includes(event.target.value)) {
            product.classList.add("hidden")
        } 
    }
  }
};
searchByName.addEventListener("input", searchByNameHandler);
