let popProduct = document.querySelector(".cards");
let hidePopBtn = document.querySelector(".close");
let productsContainer = document.querySelector(".products");
let currentProductId = 0;
let categorySelector = document.querySelector("#category");
let priceSelector = document.querySelector("#price");
let serchInput = document.querySelector("#serch");

hidePopBtn.onclick = () => {
  hidePopProduct(popProduct);
};
function showPopProduct(pop) {
  pop.classList.add("active");
}
function hidePopProduct(pop) {
  pop.classList.remove("active");
}
