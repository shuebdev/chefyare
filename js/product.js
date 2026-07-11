// global variables
const lunchPrice = 250;
const CATEGORY = {
    CAKE: "cake",
    DESSERT: "dessert",
    MEAL: "meal",
};

const TYPE = {
    VANILLA: "vanilla",
    CHOCOLATE: "chocolate",
    STRAWBERRY: "strawberry",
    FRUIT: "fruit",
    CHEESE: "cheese",
    COCONUT: "coconut",
};
const bigCakePrice = 2500;
const dessertPrice = 500;
const ceremonyCakes = "ceremony";
let params = new URLSearchParams(window.location.search);
let id = Number(params.get("id"));
// product
const foods = [
  {
    // Featured home page cakes
    id: 0,
    image: "./images/mangocake.webp",
    name: "Chocolate Cake",
    category: CATEGORY.CAKE,
    type: TYPE.CHOCOLATE,
    occasion: null,
    featured: true,
    description:
      "Rich, moist, and packed with deep chocolate flavor. Freshly baked and beautifully decorated, perfect for birthdays, celebrations, or satisfying your chocolate cravings.",
    price: lunchPrice,
    details: null,
  },
  {
    id: 1,
    image: "./images/choclatecake.webp",
    name: "Chocolate Cake",
    category: CATEGORY.CAKE,
    type: TYPE.CHOCOLATE,
    occasion: null,
    featured: true,
    description:
      "Rich, moist, and packed with deep chocolate flavor. Freshly baked and beautifully decorated, perfect for birthdays, celebrations, or satisfying your chocolate cravings.",
    price: lunchPrice,
    details: null,
  },
  {
    id: 2,
    image: "./images/vanillacake.webp",
    name: "Vanilla Cake",
    category: CATEGORY.CAKE,
    type: TYPE.VANILLA,
    occasion: null,
    featured: true,
    description:
      "Light, fluffy, and perfectly sweet. Made with premium ingredients and ideal for custom designs, birthdays, and family celebrations.",
    price: lunchPrice,
    details: null,
  },
  {
    id: 3,
    image: "./images/redvalletcake.webp",
    name: "Red Velvet Cake",
    category: CATEGORY.CAKE,
    type: TYPE.CHEESE,
    occasion: null,
    featured: true,
    description:
      "Soft, velvety layers with smooth cream cheese frosting. A classic favorite that adds elegance and sweetness to every special occasion.",
    price: lunchPrice,
    details: null,
  },
  {
    id: 4,
    image: "./images/blackforestcake.webp",
    name: "Black Forest Cake",
    category: CATEGORY.CAKE,
    type: TYPE.CHOCOLATE,
    occasion: null,
    featured: true,
    description:
      "Layers of chocolate sponge, fresh cream, and cherries combined into a rich and delightful cake that everyone will love.",
    price: lunchPrice,
    details: null,
  },
  {
    id: 5,
    image: "./images/strawberrycake.webp",
    name: "Strawberry Cake",
    category: CATEGORY.CAKE,
    type: TYPE.STRAWBERRY,
    occasion: null,
    featured: true,
    description:
      "Fresh strawberry flavor blended with soft sponge and creamy frosting for a refreshing and delicious dessert experience.",
    price: lunchPrice,
    details: null,
  },
  {
    id: 6,
    image: "./images/carrotcake.webp",
    name: "Carrot Cake",
    category: CATEGORY.CAKE,
    type: TYPE.FRUIT,
    occasion: null,
    featured: true,
    description:
      "Fresh strawberry flavor blended with soft sponge and creamy frosting for a refreshing and delicious dessert experience.",
    price: lunchPrice,
    details: null,
  },
  {
    id: 7,
    image: "./images/cheesecake.webp",
    name: "Strawberry Cake",
    category: CATEGORY.CAKE,
    type: TYPE.CHEESE,
    occasion: null,
    featured: false,
    description:
      "Fresh strawberry flavor blended with soft sponge and creamy frosting for a refreshing and delicious dessert experience.",
    price: lunchPrice,
    details: null,
  },

  // Vanilla cakes data

  {
    id: 8,
    image: "./images/vanillabuttercream.webp",
    name: "Vanilla Buttercream Cake",
    category: CATEGORY.CAKE,
    type: TYPE.VANILLA,
    occasion: null,
    featured: false,
    description:
      "Soft vanilla sponge layered with smooth buttercream frosting, creating a creamy and delicious dessert loved by all ages.",
    price: bigCakePrice,
    details: null,
  },
  {
    id: 9,
    image: "./images/vanillabeancake.webp",
    name: "Vanilla Bean Cake",
    category: CATEGORY.CAKE,
    type: TYPE.VANILLA,
    occasion: null,
    featured: false,
    description:
      "Made with real vanilla beans for a richer aroma and deeper vanilla flavor. Elegant, moist, and perfect for special occasions.",
    price: bigCakePrice,
    details: null,
  },
  {
    id: 10,
    image: "./images/vanillastrawberry.webp",
    name: "Vanilla Strawberry Cake",
    category: CATEGORY.CAKE,
    type: TYPE.VANILLA,
    occasion: null,
    featured: false,
    description:
      "A fluffy vanilla cake paired with fresh strawberries and cream, offering a sweet and refreshing taste in every bite.",
    price: bigCakePrice,
    details: null,
  },
  {
    id: 11,
    image: "./images/vanillafruitcake.webp",
    name: "Vanilla Fruit Cake",
    category: CATEGORY.CAKE,
    type: TYPE.VANILLA,
    occasion: null,
    featured: false,
    description:
      "Decorated with a colorful selection of fresh fruits, this cake combines soft vanilla sponge with natural fruity sweetness.",
    price: bigCakePrice,
    details: null,
  },
  {
    id: 12,
    image: "./images/vanilladripcake.webp",
    name: "Vanilla Drip Cake",
    category: CATEGORY.CAKE,
    type: TYPE.VANILLA,
    occasion: null,
    featured: false,
    description:
      "A modern vanilla cake finished with a beautiful chocolate drip and smooth frosting, making it as stunning as it is delicious.",
    price: bigCakePrice,
    details: null,
  },
  {
    id: 13,
    image: "./images/vanillacocunutcake.webp",
    name: "Vanilla Coconut Cake",
    category: CATEGORY.CAKE,
    type: TYPE.COCONUT,
    occasion: null,
    featured: false,
    description:
      "A moist vanilla cake infused with coconut flavor and topped with coconut flakes for a tropical twist.",
    price: bigCakePrice,
    details: null,
  },
{
    id: 14,
    image: "./images/vanillarainbowcake.webp",
    name: "Vanilla Rainbow Cake",
    category: CATEGORY.CAKE,
    type: TYPE.VANILLA,
    occasion: null,
    featured: false,
    description: "",
    price: 0,
    details: null,
},

{
    id: 15,
    image: "",
    name: "",
    category: CATEGORY.CAKE,
    type: TYPE.VANILLA,
    occasion: null,
    featured: false,
    description: "",
    price: 0,
    details: null,
},

// End of vanilla cakes data

// Chocolate cakes data

{
    id: 16,
    image: "",
    name: "",
    category: CATEGORY.CAKE,
    type: TYPE.CHOCOLATE,
    occasion: null,
    featured: false,
    description: "",
    price: 0,
    details: null,
},

{
    id: 17,
    image: "",
    name: "",
    category: CATEGORY.CAKE,
    type: TYPE.CHOCOLATE,
    occasion: null,
    featured: false,
    description: "",
    price: 0,
    details: null,
},

{
    id: 18,
    image: "",
    name: "",
    category: CATEGORY.CAKE,
    type: TYPE.CHOCOLATE,
    occasion: null,
    featured: false,
    description: "",
    price: 0,
    details: null,
},

{
    id: 19,
    image: "",
    name: "",
    category: CATEGORY.CAKE,
    type: TYPE.CHOCOLATE,
    occasion: null,
    featured: false,
    description: "",
    price: 0,
    details: null,
},

{
    id: 20,
    image: "",
    name: "",
    category: CATEGORY.CAKE,
    type: TYPE.CHOCOLATE,
    occasion: null,
    featured: false,
    description: "",
    price: 0,
    details: null,
},

{
    id: 21,
    image: "",
    name: "",
    category: CATEGORY.CAKE,
    type: TYPE.CHOCOLATE,
    occasion: null,
    featured: false,
    description: "",
    price: 0,
    details: null,
},

{
    id: 22,
    image: "",
    name: "",
    category: CATEGORY.CAKE,
    type: TYPE.CHOCOLATE,
    occasion: null,
    featured: false,
    description: "",
    price: 0,
    details: null,
},

{
    id: 23,
    image: "",
    name: "",
    category: CATEGORY.CAKE,
    type: TYPE.CHOCOLATE,
    occasion: null,
    featured: false,
    description: "",
    price: 0,
    details: null,
},

{
    id: 24,
    image: "",
    name: "",
    category: CATEGORY.CAKE,
    type: TYPE.CHOCOLATE,
    occasion: null,
    featured: false,
    description: "",
    price: 0,
    details: null,
},
  // end of chocolate cake data
  // sample array of the lunch
  {
    id: 30,
    image: "./images/meatrice.webp",
    name: "Rice and Chicken",
    category: CATEGORY.MEAL,
    type: "rice",
    occasion: null,
    featured: false,
    description: "Freshly prepared rice and chicken served with a complimentary juice and fresh chili at no extra cost.",
    price: lunchPrice,
    details: null,
},
{
    id: 31,
    image: "./images/chicken&rice.webp",
    name: "Rice and Chicken",
    category: CATEGORY.MEAL,
    type: "rice",
    occasion: null,
    featured: false,
    description: "Freshly prepared rice and chicken served with a complimentary juice and fresh chili at no extra cost.",
    price: lunchPrice,
    details: null,
},
{
    id: 32,
    image: "./images/ugaali.webp",
    name: "Ugali and Chicken",
    category: CATEGORY.MEAL,
    type: "ugali",
    occasion: null,
    featured: false,
    description: "Freshly prepared ugali and chicken served with a complimentary juice and fresh chili at no extra cost.",
    price: lunchPrice,
    details: null,
},
];

findingId();
