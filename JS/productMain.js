
if (!window.localStorage.getItem("products")) {
  let initProducts = [
    {
      id: 0,
      name: "Tara Pantry",
      description:" Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequaturanimi ut laborum illo quaerat",
      price: 100,
      imgUrl:"https://ak1.ostkcdn.com/images/products/30884162/Tara-Pantry-23.75-W-x-15-D-x-67.75-H-13ee0613-545d-4f03-807f-0e5cd67d5da5_1000.jpg",
      category: "Kitchen",
    },
    {
      id: 1,
      name: "Blue Modern Smooth Vase",
      description:
        " Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequaturanimi ut laborum illo quaerat",
      price: 50,
      imgUrl:
        "https://ak1.ostkcdn.com/images/products/is/images/direct/ba4621d99db3186b4afce18d3b529d2fbbb34986/Modern-Contemporary-Elegant-Blue-Stoneware-Smooth-Glazed-Vase-16%22H-X-5%22D-or-21%22H-X-6%22D.jpg",
      category: "Ceramics",
    },
    {
      id: 2,
      name: "Smart Led Lighted Bathroom Mirror",
      description:
        " Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequaturanimi ut laborum illo quaerat",
      price: 200,
      imgUrl:
        "https://ak1.ostkcdn.com/images/products/is/images/direct/825aa766509723e15f602b9e78449c156f428a78/AQUADOM-IMAGE%2C-Rount-24%22%2CSmart-LED-Lighted-Bathroom-Mirrors-with-Built-in-TVs%2C-Defogger.jpg",
      category: "Ceramics",
    },
    {
      id: 4,
      name: "Midtown Dining Set",
      description:
        "https://i.ibb.co/b7VyRnK/Urban-Elements-Nordic-7-Piece-Dining-Set-With-Cushions.webp",
      price: 100,
      imgUrl:
        "https://ak1.ostkcdn.com/images/products/is/images/direct/318e9b9539bb07557dc49d2586a11f7b72ae7093/Urban-Elements-Nordic-7-Piece-Dining-Set---With-Cushions.jpg",
      category: "Kitchen",
    },
    {
      id: 5,
      name: "Wood Room Divider",
      description:
        " Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequaturanimi ut laborum illo quaerat",
      price: 70,
      imgUrl:
        "https://ak1.ostkcdn.com/images/products/is/images/direct/2e6b4e3022cdf9ced8cf04b1286c18bf34084baa/HOMCOM-Blinds-Style-4-Panel-Wood-Room-Divider%2C-67%27%27-Tall-Folding-Privacy-Screen-Panels-Gray.jpg",
      category: "Tables",
    },
    {
      id: 6,
      name: "Plaid Comforter Bed Set ",
      description:
        " Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequaturanimi ut laborum illo quaerat",
      price: 200,
      imgUrl:
        "https://secure.img1-cg.wfcdn.com/im/38232562/compr-r85/4215/42152547/normandy-plaid-coppery-tanblackbeigewhite-microfiber-reversible-modern-contemporary-comforter-set.jpg",
      category: "Chairs",
    },
    {
      id: 7,
      name: "Wood Entryway Bench",
      description:
        " Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequaturanimi ut laborum illo quaerat",
      price: 80,
      imgUrl:
        "https://ak1.ostkcdn.com/images/products/is/images/direct/79c01534abd547e0adae904359b1a3c59cf24629/Craftsbury-36%22W-Wood-Entryway-Bench.jpg",
      category: "Chairs",
    },
    {
      id: 8,
      name: "Media Dresser and Desk Combo",
      description:
        " Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequaturanimi ut laborum illo quaerat",
      price: 100,
      imgUrl:
        "https://ak1.ostkcdn.com/images/products/is/images/direct/fa3184f22a2cd6837ddd2334502f957f464ed34f/Novogratz-Kelly-3-in-1-Media-Dresser-and-Desk-Combo.jpg",
      category: "Chairs"
    },
    {
      id: 9,
      name: " Garden Stool",
      description:
        " Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequaturanimi ut laborum illo quaerat",
      price: 250,
      imgUrl:
        "https://ak1.ostkcdn.com/images/products/is/images/direct/ead29e9220f3549fbea172d03610a64cc9d25981/SAFAVIEH-Parri-Indoor---Outdoor-Ceramic-Decorative-Garden-Stool.jpg",
      category: "Ceramics"
    },{
      id:10,
      name:'Handmade Natural Fiber Rug',
      description:
      " Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequaturanimi ut laborum illo quaerat",
    price: 50,
    imgUrl:
      "https://ak1.ostkcdn.com/images/products/is/images/direct/a2788a9ebf37123549881d7e81cbe725cd0f6201/TUHOME-Bar-Cart.jpg",
    category: "Kitchen"
    },
    {
      id:11,
      name:'Outdoor Meta Lounge Chair',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequaturanimi ut laborum illo quaerat',
      price: 70,
      imgUrl: 'https://ak1.ostkcdn.com/images/products/is/images/direct/2ac66b6781061f9a10211caf17a2e6e5a893c92d/PHI-VILLA-Outdoor-Patio-Metal-Adjustable-Relaxing-Recliner-Lounge-Chair-with-Cushion.jpg',
      category: "Chairs"
    }
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
