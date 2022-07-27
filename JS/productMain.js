
if (!window.localStorage.getItem("products")) {
  let initProducts = [
    {
      id: 0,
      name: "product1",
      describetion:
        " Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequaturanimi ut laborum illo quaerat",
      price: 100,
      imgUrl:
        "https://i.pinimg.com/564x/fe/a4/bc/fea4bc6cf91b5868621b176e457f51d8.jpg",
      category: "tables",
    },
    {
      id: 1,
      name: "product2",
      describetion:
        " Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequaturanimi ut laborum illo quaerat",
      price: 200,
      imgUrl:
        "https://i.pinimg.com/564x/4a/c2/87/4ac287ba54267c4bf97ee8eec68366da.jpg",
      category: "tables",
    },
    {
      id: 2,
      name: "product3",
      describetion:
        " Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequaturanimi ut laborum illo quaerat",
      price: 300,
      imgUrl:
        "https://i.pinimg.com/564x/d3/8c/8f/d38c8feb2fbf1d4927597498af1cd755.jpg",
      category: "cheers",
    },
    {
      id: 4,
      name: "brown cheer",
      describetion:
        " Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequaturanimi ut laborum illo quaerat",
      price: 20,
      imgUrl:
        "https://i.pinimg.com/564x/79/36/1c/79361c083224a716916784202612717b.jpg",
      category: "cheers",
    },
    {
      id: 5,
      name: "another cheer",
      describetion:
        " Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequaturanimi ut laborum illo quaerat",
      price: 20,
      imgUrl:
        "https://i.pinimg.com/564x/79/36/1c/79361c083224a716916784202612717b.jpg",
      category: "cheers",
    },
    {
      id: 6,
      name: "aaa ",
      describetion:
        " Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequaturanimi ut laborum illo quaerat",
      price: 20,
      imgUrl:
        "https://i.pinimg.com/564x/79/36/1c/79361c083224a716916784202612717b.jpg",
      category: "cheers",
    },
    {
      id: 7,
      name: "aaa bbb",
      describetion:
        " Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequaturanimi ut laborum illo quaerat",
      price: 20,
      imgUrl:
        "https://i.pinimg.com/564x/79/36/1c/79361c083224a716916784202612717b.jpg",
      category: "cheers",
    },
    {
      id: 8,
      name: "aaa bbb ccc",
      describetion:
        " Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequaturanimi ut laborum illo quaerat",
      price: 20,
      imgUrl:
        "https://i.pinimg.com/564x/79/36/1c/79361c083224a716916784202612717b.jpg",
      category: "cheers",
    },
  ];
  window.localStorage.setItem("products", JSON.stringify(initProducts));
}
let products = JSON.parse(window.localStorage.getItem("products"));
function makeProductsCards(array) {
  productsContainer.innerHTML = ``;
  if (array.length != 0) {
    array.forEach((element) => {
      productsContainer.innerHTML += `<div class="product" data-id='${element.id}'>
                <div class="product-img">
                <img
                    src=${element.imgUrl}
                    alt=""
                />
                </div>
                <div class="product-title">
                <h2>${element.name}</h2>
                </div>
                <div class="product-hover">
                <button>Details</button>
                </div>
                </div>`;
    });
  } else {
    productsContainer.innerHTML = "There is no Products";
  }
  test();
}
function findCurrentProduct() {
  let obj = {};
  products.forEach((element) => {
    if (element.id == currentProductId) obj = element;
  });
  return obj;
}

function createPop(pop) {
  popProduct.querySelector(".card").innerHTML = `<div class="card-img">
          <img
            src=${pop.imgUrl}
            alt=""
          />
        </div>
        <div class="card-content">
          <div class="card-title">
            <h2>${pop.name}</h2>
          </div>
          <div class="card-desc">
            ${pop.describetion}
          </div>
          <div class="op">
            <div class="card-price"><span id="price">${pop.price}</span>$</div>
            <div class="amount">
              <label for="number">Amount:</label
              ><input type="number" min="1" value="1" id="number" />
            </div>
          </div>
          <div class="card-btn">
            <button class="addbtn">Add To Cart</button>
          </div>
        </div>`;
  let btn = document.querySelector(
    "#popProduct > div.card > div.card-content > div.card-btn > button"
  );
  btn.addEventListener("click", () => {
    addToCart(pop);
  });
}
function categoryFilter(category) {
  if (category == "all") {
    makeProductsCards(products);
  } else {
    let newProducts = [];
    products.forEach((element) => {
      if (element.category === category) {
        newProducts.push(element);
      }
    });
    makeProductsCards(newProducts);
  }
}
function PriceFilter(price) {
  let newProducts2 = [];
  if (price === "LTH") {
    newProducts2 = [
      ...products.sort((a, b) =>
        a.price > b.price ? 1 : b.price > a.price ? -1 : 0
      ),
    ];
  } else {
    newProducts2 = [
      ...products.sort((a, b) =>
        a.price < b.price ? 1 : b.price < a.price ? -1 : 0
      ),
    ];
  }

  makeProductsCards(newProducts2);
}
function serchFilter(input) {
  let newProducts = [];
  products.forEach((element) => {
    if (element.name.search(input) != -1) {
      newProducts.push(element);
    }
  });
  makeProductsCards(newProducts);
}

let test = () => {
  setTimeout(() => {
    let productCards = document.querySelectorAll(".product");
    productCards.forEach((product) => {
      product.addEventListener("click", () => {
        showPopProduct(popProduct);
        currentProductId = product.dataset.id;
        createPop(findCurrentProduct());
      });
    });
  }, 0);
};
categorySelector.addEventListener("change", (event) => {
  categoryFilter(
    categorySelector.options[categorySelector.selectedIndex].value
  );
});
priceSelector.addEventListener("change", (event) => {
  PriceFilter(priceSelector.options[priceSelector.selectedIndex].value);
});
serchInput.addEventListener("input", (event) => {
  serchFilter(serchInput.value);
});

makeProductsCards(products);

function addToCart(newProduct) {
  let found = false;
  products.forEach((element) => {
    if (element.id == newProduct.is) found = true;
  });
  if (!found) {
    if (!window.localStorage.getItem("cart")) {
      //{ name: "te", price: 1000, amount: 5 }
      window.localStorage.setItem("cart", JSON.stringify([]));
    }
    let cart = JSON.parse(window.localStorage.getItem("cart"));
    cart.push(newProduct);
    window.localStorage.setItem("cart", JSON.stringify(cart));
  }
}

// addToCart({ name: "te", price: 1000, amount: 5 });
