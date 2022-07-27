//seller page functions
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
  
  
  
  //show all products function 
  function makeSellerCards(array) {
    cardSeller.innerHTML = ``;
    if (array.length != 0) {
      array.forEach((element) => {
        cardSeller.innerHTML += `<div class="card" >
          <img
            src="${element.imgUrl}"
          />
          <div class="details">
            <p>${element.name}</p>
            <div class="icons">
              <i class="fa-solid fa-trash-can" data-id='${element.id}'></i>
              <i class="fa-solid fa-pen-to-square"></i>
            </div>
          </div>
        </div>`;
      });
      //add event listener  to delete icon 
      cardSeller.querySelectorAll("i").forEach((element) => {
        element.addEventListener("click", () => {
          opg = element.dataset.id;
          del(opg);
        });
      });
    } else {
      cardSeller.innerHTML = "There is no Products";
    }
  }
  function del(obj) {
    newArr = [];
    JSON.parse(window.localStorage.getItem("products")).forEach((element) => {
      if (element.id != obj) {
        newArr.push(element);
      }
    });
    window.localStorage.setItem("products", JSON.stringify(newArr));
    makeSellerCards(newArr);
  }
  makeSellerCards(products);
  
  function searchProduct(name) {
    let sellerProducts = [];
    products.forEach((element) => {
      if (element.name.search(name) != -1) {
        sellerProducts.push(element);
      }
    });
    makeSellerCards(sellerProducts);
  }
  
  inputName.addEventListener("input", (event) => {
    searchProduct(inputName.value);
  });
  
  addButton.addEventListener("click", () => {
    popUp.classList.add("active");
  });
  
  closeIcon.addEventListener("click", () => {
    popUp.classList.remove("active");
  });
  
  addButForm.addEventListener("click", () => {
    let obj = {};
    obj.id = products.length + 1;
    obj.name = proName.value;
    obj.describetion = proDetails.value;
    obj.imgUrl = proImg.value;
    obj.price = proPrice.value;
    obj.category = proCategory.value;
    products.push(obj);
    window.localStorage.setItem("products", JSON.stringify(products));
    popUp.classList.remove("active");
    makeSellerCards(products);
    //   console.log(obj);
  });
  
  let header = document.querySelector("header");
  window.addEventListener("scroll", function () {
    header.classList.toggle("scroll", window.scrollY > 0);
  });
  
  
  