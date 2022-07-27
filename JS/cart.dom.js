let itemsContiner = document.querySelector(".sec1");
let tot = document.querySelector("#tot");
let currentProductId = 0;
let allList = document.querySelectorAll("header nav ul a");

allList[0].classList = "clicked";
allList.forEach((e) => {
  e.addEventListener("click", () => {
    console.log(`clicked`);
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
