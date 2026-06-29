const lunchPrice = 250;
const smallcakePrice = 1500;
const bigCakePrice = 2500;
const dessertPrice = 500;
let params = new URLSearchParams(window.location.search);
let id = Number(params.get("id"));
// product
const foods = [
  {
    // cakes
    id: 0,
    image: "./images/mangocake.webp",
    name: "chocolate cake",
    category: "cake",
    render: "home",
    type: "chocolate",
    desc: "Rich, moist, and packed with deep chocolate flavor. Freshly baked and beautifully decorated, perfect for birthdays, celebrations, or satisfying your chocolate cravings.",
    price: "Kshs." + lunchPrice,

     size: [
      {
        size: "300g",
        price: 500,
        stock: 9
      },
      {
        size: "700g",
        price: 700,
        stock: 7
      },
      {
        size: "1kg",
        price: 1500,
        stock: 7
      }
    ]
  },
  {
    id: 1,
    image: "./images/choclatecake.webp",
    name: "chocolate cake",
    category: "cake",
    render: "home",
    type: "chocolate",
    desc: "Rich, moist, and packed with deep chocolate flavor. Freshly baked and beautifully decorated, perfect for birthdays, celebrations, or satisfying your chocolate cravings.",
    price: "Kshs." + lunchPrice,

    size: [
      {
        size: "300g",
        price: 500,
        stock: 9
      },
      {
        size: "700g",
        price: 700,
        stock: 7
      },
      {
        size: "1kg",
        price: 1500,
        stock: 7
      }
    ]
  },
  {
    id: 2,
    name: "Vanilla cake",
    image: "./images/vanillacake.webp",
    category: "cake",
    render: "home",
    type: "vanilla",
    name: "Vanilla Cake",
    desc: "Light, fluffy, and perfectly sweet. Made with premium ingredients and ideal for custom designs, birthdays, and family celebrations.",
    price: lunchPrice,

    size: [
      {
        size: "300g",
        price: 500,
        stock: 9
      },
      {
        size: "700g",
        price: 700,
        stock: 7
      },
      {
        size: "1kg",
        price: 1500,
        stock: 7
      }
    ]
  },
  {
    id: 3,
    image: "./images/redvalletcake.webp",
    name: "Red Velvet Cake",
    category: "cake",
    render: "home",
    type: "cheese",
    desc: "Soft, velvety layers with smooth cream cheese frosting. A classic favorite that adds elegance and sweetness to every special occasion.",
    price: lunchPrice,

    size: [
      {
        size: "300g",
        price: 500,
        stock: 9
      },
      {
        size: "700g",
        price: 700,
        stock: 7
      },
      {
        size: "1kg",
        price: 1500,
        stock: 7
      }
    ]
  },
  {
    id: 4,
    image: "./images/blackforestcake.webp",
    name: "Black Forest Cake",
    category: "cake",
    render: "home",
    type: "chocolate",
    desc: "Layers of chocolate sponge, fresh cream, and cherries combined into a rich and delightful cake that everyone will love.",
    price: lunchPrice,
    size: [
      {
        size: "300g",
        price: 500,
        stock: 9
      },
      {
        size: "700g",
        price: 700,
        stock: 7
      },
      {
        size: "1kg",
        price: 1500,
        stock: 7
      }
    ]
  },
  {
    id: 5,
    image: "./images/strawberrycake.webp",
    name: "strawberry cake",
    category: "cake",
    render: "home",
    type: "strawberry",
    desc: "Fresh strawberry flavor blended with soft sponge and creamy frosting for a refreshing and delicious dessert experience.",
    price: lunchPrice,

    size: [
      {
        size: "300g",
        price: 500,
        stock: 9
      },
      {
        size: "700g",
        price: 700,
        stock: 7
      },
      {
        size: "1kg",
        price: 1500,
        stock: 7
      }
    ]
  },
  {
    id: 6,
    image: "./images/carrotcake.webp",
    name: "strawberry cake",
    category: "cake",
    render: "home",
    type: "fruit",
    desc: "Fresh strawberry flavor blended with soft sponge and creamy frosting for a refreshing and delicious dessert experience.",
    price: lunchPrice,

    size: [
      {
        size: "300g",
        price: 500,
        stock: 9
      },
      {
        size: "700g",
        price: 700,
        stock: 7
      },
      {
        size: "1kg",
        price: 1500,
        stock: 7
      }
    ]
  },
  {
    id: 7,
    image: "./images/cheesecake.webp",
    name: "strawberry cake",
    category: "cake",
    type: "cheese",
    desc: "Fresh strawberry flavor blended with soft sponge and creamy frosting for a refreshing and delicious dessert experience.",
    price: lunchPrice,

    size: [
      {
        size: "300g",
        price: 500,
        stock: 9
      },
      {
        size: "700g",
        price: 700,
        stock: 7
      },
      {
        size: "1kg",
        price: 1500,
        stock: 7
      }
    ]
  },
  {
    id: 11,
    image: "./images/meatrice.webp",
    name: "rice and chicken",
    category: "food",
    type: "rice",
    desc: "Freshly prepared rice and chicken served with a complimentary uice and fresh chili at no extra cost.",
    price: lunchPrice,
    size: []
  },
  {
    id: 12,
    image: "./images/chicken&rice.webp",
    name: "rice and chicken",
    category: "food",
    type: "rice",
    desc: "Freshly prepared rice and chicken served with a complimentary uice and fresh chili at no extra cost.",
    price: lunchPrice,
    size: []
  },
  {
    id: 13,
    image: "./images/ugaali.webp",
    name: "rice and chicken",
    category: "food",
    type: "rice",
    desc: "Freshly prepared rice and chicken served with a complimentary uice and fresh chili at no extra cost.",
    price: lunchPrice,
    size: []
  },
];

findingId();

