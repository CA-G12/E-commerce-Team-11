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


//Add a border bottom to the lists in the header
let allList = document.querySelectorAll('header nav ul a');

allList[0].classList = 'clicked';
allList.forEach((e) => {
  e.addEventListener('click', () => {
    console.log(`clicked`)
    allList.forEach((anchor) => {anchor.classList.remove('clicked')
    e.classList.add('clicked')
  })
})});

  //Change the color of the header background when scrolling the page
  let header = document.querySelector("header");
  window.addEventListener("scroll", function () {
    header.classList.toggle("scroll", window.scrollY > 0);
  });
  
  //Get the products and store them in the localStorage
  let container = document.querySelector(".container");
  for (let i = 0; i < 4; i++) {
    let random = Math.floor(Math.random() * 8);
    products.map((ele) => {
      if (ele[`id`] !== products[random][`id`]) {
        localStorage.setItem(`newProducts`, JSON.stringify(products[random]));
      }
    });
    getRandomElements(random);
  }
  
  function getRandomElements(random) {
    let card = document.createElement("div");
    card.classList = "card";
    container.appendChild(card);
  
    let overlay = document.createElement("div");
    overlay.classList = "bg";
    let anchor = document.createElement(`a`);
    anchor.innerHTML = `<i class="fa-solid fa-circle-chevron-down"></i>`;
    anchor.setAttribute(`href`, `./html/products.html`);
    overlay.appendChild(anchor);
    card.appendChild(overlay);
  
    let createImg = document.createElement("img");
    createImg.src = products[random]["imgUrl"];
    createImg.setAttribute(`alt`, `products${[random]["name"]}`);
    card.appendChild(createImg);
  
    let text = document.createElement("p");
    text.textContent = products[random]["name"];
    card.appendChild(text);
  
    let price = document.createElement("span");
    price.textContent = `$${products[random]["price"]}`;
    card.appendChild(price);
  
    // Add mouseenter & mouseLeave events over the icon in the product cards
    card.addEventListener("mouseenter", () => {
      overlay.style.transform = "rotateX(0deg)";
    });
    card.addEventListener("mouseleave", () => {
      overlay.style.transform = "rotateX(90deg)";
    });
  }
  