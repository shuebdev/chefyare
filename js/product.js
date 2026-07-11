// global variables
const lunchPrice = 250;
const cakesCategory = "cake";
const dessertCategory = "desserts";
const mealCategory = "meals";
const vanillaType = "vanilla";
const chocolateType = "chocolate";
const smallcakePrice = 1500;
const bigCakePrice = 2500;
const dessertPrice = 500;
let params = new URLSearchParams(window.location.search);
let id = Number(params.get("id"));
// product
const foods = [
  {
    // rendered home page cakes
    id: 0,
    image: "./images/mangocake.webp",
    name: "chocolate cake",
    category: cakesCategory,
    render: "home",
    type: "chocolate",
    desc: "Rich, moist, and packed with deep chocolate flavor. Freshly baked and beautifully decorated, perfect for birthdays, celebrations, or satisfying your chocolate cravings.",
    price: "Kshs." + lunchPrice,

    
  },
  {
    id: 1,
    image: "./images/choclatecake.webp",
    name: "chocolate cake",
    category: cakesCategory,
    render: "home",
    type: "chocolate",
    desc: "Rich, moist, and packed with deep chocolate flavor. Freshly baked and beautifully decorated, perfect for birthdays, celebrations, or satisfying your chocolate cravings.",
    price: lunchPrice,
  },
  {
    id: 2,
    name: "Vanilla cake",
    image: "./images/vanillacake.webp",
    category: cakesCategory,
    render: "home",
    type: vanillaType,
    name: "Vanilla Cake",
    desc: "Light, fluffy, and perfectly sweet. Made with premium ingredients and ideal for custom designs, birthdays, and family celebrations.",
    price: lunchPrice,

    
  },
  {
    id: 3,
    image: "./images/redvalletcake.webp",
    name: "Red Velvet Cake",
    category: cakesCategory,
    render: "home",
    type: "cheese",
    desc: "Soft, velvety layers with smooth cream cheese frosting. A classic favorite that adds elegance and sweetness to every special occasion.",
    price: lunchPrice,
  },
  {
    id: 4,
    image: "./images/blackforestcake.webp",
    name: "Black Forest Cake",
    category: cakesCategory,
    render: "home",
    type: "chocolate",
    desc: "Layers of chocolate sponge, fresh cream, and cherries combined into a rich and delightful cake that everyone will love.",
    price: lunchPrice,
  },
  {
    id: 5,
    image: "./images/strawberrycake.webp",
    name: "strawberry cake",
    category: cakesCategory,
    render: "home",
    type: "strawberry",
    desc: "Fresh strawberry flavor blended with soft sponge and creamy frosting for a refreshing and delicious dessert experience.",
    price: lunchPrice,
  },
  {
    id: 6,
    image: "./images/carrotcake.webp",
    name: "carrot cake",
    category: cakesCategory,
    render: "home",
    type: "fruit",
    desc: "Fresh strawberry flavor blended with soft sponge and creamy frosting for a refreshing and delicious dessert experience.",
    price: lunchPrice,
  },
  {
    id: 7,
    image: "./images/cheesecake.webp",
    name: "strawberry cake",
    category: cakesCategory,
    type: "cheese",
    desc: "Fresh strawberry flavor blended with soft sponge and creamy frosting for a refreshing and delicious dessert experience.",
    price: lunchPrice,
  },

  // vanilla cakes data

  {
    id: 8,
    image: "./images/vanillabuttercream.webp",
    name: "Vanilla Buttercream Cake",
    category: cakesCategory,
    type: vanillaType,
    desc: "Soft vanilla sponge layered with smooth buttercream frosting, creating a creamy and delicious dessert loved by all ages.",
    price: bigCakePrice,
    
  },

  {
    id: 9,
    image: "./images/vanillabeancake.webp",
    name: "Vanilla Bean Cake",
    category: cakesCategory,
    type: "vanilla",
    desc: "Made with real vanilla beans for a richer aroma and deeper vanilla flavor. Elegant, moist, and perfect for special occasions.",
    price: bigCakePrice,
    
  },

  {
    id: 10,
    image: "./images/vanillastrawberry.webp",
    name: "Vanilla Strawberry Cake",
    category: cakesCategory,
    type: vanillaType,
    desc: "A fluffy vanilla cake paired with fresh strawberries and cream, offering a sweet and refreshing taste in every bite.",
    price: bigCakePrice,
    
  },

  {
    id: 11,
    image: "./images/vanillafruitcake.webp",
    name: "vanilla fruit cake",
    category: cakesCategory,
    type: vanillaType,
    desc: "Decorated with a colorful selection of fresh fruits, this cake combines soft vanilla sponge with natural fruity sweetness.",
    price: bigCakePrice,
    
  },

  {
    id: 12,
    image: "./images/vanilladripcake.webp",
    name: "vanilla drip cake",
    category: cakesCategory,
    type: vanillaType,
    desc: "A modern vanilla cake finished with a beautiful chocolate drip and smooth frosting, making it as stunning as it is delicious." ,
    price: bigCakePrice,
    
  },

  {
    id: 13,
    image: "./images/vanillacocunutcake.webp",
    name: "vanilla coconut cake",
    category: cakesCategory,
    type: vanillaType,
    desc: "A moist vanilla cake infused with coconut flavor and topped with coconut flakes for a tropical twist.",
    price: bigCakePrice,
    
  },

  // {
  //   id: 14,
  //   image,
  //   name,
  //   category,
  //   type,
  //   desc,
  //   price,
    
  // },

  // {
  //   id: 15,
  //   image,
  //   name,
  //   category,
  //   type,
  //   desc,
  //   price,
    
  // },
  // // end of vanilla cakes data

  // //  chocolate cakes data
  // {
  //   id: 16,
  //   image,
  //   name,
  //   category,
  //   type,
  //   desc,
  //   price,
    
  // },

  // {
  //   id: 17,
  //   image,
  //   name,
  //   category,
  //   type,
  //   desc,
  //   price,
    
  // },

  // {
  //   id: 18,
  //   image,
  //   name,
  //   category,
  //   type,
  //   desc,
  //   price,
    
  // },

  // {
  //   id: 19,
  //   image,
  //   name,
  //   category,
  //   type,
  //   desc,
  //   price,
    
  // },

  // {
  //   id: 20,
  //   image,
  //   name,
  //   category,
  //   type,
  //   desc,
  //   price,
    
  // },

  // {
  //   id: 21,
  //   image,
  //   name,
  //   category,
  //   type,
  //   desc,
  //   price,
    
  // },

  // {
  //   id: 22,
  //   image,
  //   name,
  //   category,
  //   type,
  //   desc,
  //   price,
    
  // },

  // {
  //   id: 23,
  //   image,
  //   name,
  //   category,
  //   type,
  //   desc,
  //   price,
    
  // },

  // {
  //   id: 24,
  //   image,
  //   name,
  //   category,
  //   type,
  //   desc,
  //   price,
    
  // },
  // end of chocolate cake data
  // sample array of the lunch
  {
    id: 30,
    image: "./images/meatrice.webp",
    name: "rice and chicken",
    category: "food",
    type: "rice",
    desc: "Freshly prepared rice and chicken served with a complimentary uice and fresh chili at no extra cost.",
    price: lunchPrice,

    
  },
  {
    id: 31,
    image: "./images/chicken&rice.webp",
    name: "rice and chicken",
    category: "food",
    type: "rice",
    desc: "Freshly prepared rice and chicken served with a complimentary uice and fresh chili at no extra cost.",
    price: lunchPrice,

    
  },
  {
    id: 32,
    image: "./images/ugaali.webp",
    name: "rice and chicken",
    category: "food",
    type: "rice",
    desc: "Freshly prepared rice and chicken served with a complimentary uice and fresh chili at no extra cost.",
    price: lunchPrice,

    
  },
];

findingId();
