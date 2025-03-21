const searchByName = document.querySelector(".searchByName");
const all = document.querySelector(".searchAll");
const tech = document.querySelector(".searchTech");
const clothing = document.querySelector(".searchClothing");
const health = document.querySelector(".searchHealth");
const priceButton = document.querySelector(".priceButton")
const range = document.querySelector(".priceRange")
const minValue = document.getElementById("minValue")
const maxValue = document.getElementById("maxValue")
const currentValue = document.getElementById("currentValue")
const carts = document.getElementsByClassName("cart")


let prices = []
for (product of carts) {
    prices.push(parseInt(product.querySelector(".price").innerText.split(" ")[1]))
}
const maxPrice = Math.max(...prices)
// console.log("The maximum price in this page: ",maxPrice);
range.setAttribute("max", maxPrice)
minValue.innerText = 0;
maxValue.innerText = maxPrice + " $";
// console.log(prices.sort((a,b) => b-a));

const searchByNameHandler = (event) => {
  //   console.log(event.target.value);
  const value = event.target.value.toLowerCase();
  console.log(value);
  //   console.log(cart);
  for (let product of carts) {
    if (event.target.value === "") {
      product.classList.remove("hidden");
    } else {
      if (
        !product
          .getElementsByClassName("productName")[0]
          .innerText.toLowerCase()
          .includes(value)
      ) {
        product.classList.add("hidden");
      }
    }
  }
};

const searchAllHandler = (event) => {
  //   console.log(cart);
  for (let product of carts) {
    product.classList.remove("hidden");
  }
};

const searchTechHandler = (event) => {
  for (let tech of carts) {
    // console.log(tech.classList);
    if (tech.classList.value.includes("tech")) {
      tech.classList.remove("hidden");
    } else {
      tech.classList.add("hidden");
    }
  }
};

const searchClothingHandler = (event) => {
  for (let cloth of carts) {
    // console.log(tech.classList);
    if (cloth.classList.value.includes("clothing")) {
      cloth.classList.remove("hidden");
    } else {
      cloth.classList.add("hidden");
    }
  }
};

const searchHealthHandler = (event) => {
  for (let health of carts) {
    // console.log(tech.classList);
    if (health.classList.value.includes("health")) {
      health.classList.remove("hidden");
    } else {
      health.classList.add("hidden");
    }
  }
};

const priceSearchHandler = (event) => {
    const searchInput = document.querySelector(".searchByPrice")
    
    for (let product of carts) {
            if (searchInput.value === "" || parseInt(searchInput.value) === "NaN") {
                product.classList.remove("hidden")
            } else {
                let price = parseInt(product.querySelector(".price").innerText.split(" ")[1])
                // console.log(price);
                if (price === +searchInput.value) {
                    product.classList.remove("hidden")
                } else {
                    product.classList.add("hidden")
                }
            }
        }
    
    // prices.push(product.innerText.split(" "))
    // prices = prices.flat().filter((item) => item !== "$");
    // console.log(searchInput.value);
}

const rangeHandler = (event) => {
    currentValue.innerText = event.target.value  + " $"
    // console.log("range: ",event.target.value);
    for (let product of carts) {
        // console.log(product.querySelector(".price").innerText.split(" ")[1]);
        if (+product.querySelector(".price").innerText.split(" ")[1] <= +event.target.value){
            product.classList.remove("hidden")
    } else product.classList.add("hidden")
}
}

searchByName.addEventListener("input", searchByNameHandler);
all.addEventListener("click", searchAllHandler);
tech.addEventListener("click", searchTechHandler);
clothing.addEventListener("click", searchClothingHandler);
health.addEventListener("click", searchHealthHandler);
priceButton.addEventListener("click", priceSearchHandler)
range.addEventListener("input", rangeHandler)
