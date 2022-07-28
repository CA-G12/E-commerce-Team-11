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
let allList = document.querySelectorAll("header nav ul a");

allList[1].classList = "clicked";
allList.forEach((e) => {
  e.addEventListener("click", () => {
    allList.forEach((anchor) => {
      anchor.classList.remove("clicked");
      e.classList.add("clicked");
    });
  });
});

//Change the color of the header background when scrolling the page
let header = document.querySelector("header");
window.addEventListener("scroll", function () {
  header.classList.toggle("scroll", window.scrollY > 0);
});
