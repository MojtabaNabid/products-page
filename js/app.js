const searchByName = document.querySelector(".searchByName");
const all = document.querySelector(".searchAll");
const tech = document.querySelector(".searchTech");
const clothing = document.querySelector(".searchClothing");
const health = document.querySelector(".searchHealth");

const searchByNameHandler = (event) => {
  //   console.log(event.target.value);
  const value = event.target.value.toLowerCase();
  console.log(value);
  const cart = document.getElementsByClassName("cart");
  //   console.log(cart);
  for (let product of cart) {
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
  const cart = document.getElementsByClassName("cart");
  //   console.log(cart);
  for (let product of cart) {
    product.classList.remove("hidden");
  }
};

const searchTechHandler = (event) => {
  const products = document.getElementsByClassName("cart");
  for (let tech of products) {
    // console.log(tech.classList);
    if (tech.classList.value.includes("tech")) {
      tech.classList.remove("hidden");
    } else {
      tech.classList.add("hidden");
    }
  }
};

const searchClothingHandler = (event) => {
  const products = document.getElementsByClassName("cart");
  for (let cloth of products) {
    // console.log(tech.classList);
    if (cloth.classList.value.includes("clothing")) {
      cloth.classList.remove("hidden");
    } else {
      cloth.classList.add("hidden");
    }
  }
};

const searchHealthHandler = (event) => {
  const products = document.getElementsByClassName("cart");
  for (let health of products) {
    // console.log(tech.classList);
    if (health.classList.value.includes("health")) {
      health.classList.remove("hidden");
    } else {
      health.classList.add("hidden");
    }
  }
};

searchByName.addEventListener("input", searchByNameHandler);
all.addEventListener("click", searchAllHandler);
tech.addEventListener("click", searchTechHandler);
clothing.addEventListener("click", searchClothingHandler);
health.addEventListener("click", searchHealthHandler);
