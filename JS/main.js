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
