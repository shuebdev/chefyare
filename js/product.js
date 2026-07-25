// global variables
const lunchPrice = 350;
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

const OCCASSION = {
  BIRTHDAY: "birthday",
  WEDDING: "wedding",
  ENGAGEMENT: "engagement",
  BABYSHOWER: "babyshower",
  GRADUATION: "graduation",
  ANSRY: "anniversary",
  GENDER_REVEAL: "genderReveal",
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
    id: 100,
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
    id: 200,
    image: "./images/choclatecake.webp",
    name: "Chocolate Cake",
    category: CATEGORY.CAKE,
    type: TYPE.CHOCOLATE,
    occasion: null,
    featured: true,
    description:
      "Rich, moist, and packed with deep chocolate flavor. Freshly baked and beautifully decorated, perfect for birthdays, celebrations, or satisfying your chocolate cravings.",
    price: bigCakePrice,
    details: null,
  },
  {
    id: 300,
    image: "./images/vanillacake.webp",
    name: "Vanilla Cake",
    category: CATEGORY.CAKE,
    type: TYPE.VANILLA,
    occasion: null,
    featured: true,
    description:
      "Light, fluffy, and perfectly sweet. Made with premium ingredients and ideal for custom designs, birthdays, and family celebrations.",
    price: bigCakePrice,
    details:
      "Our Classic Vanilla Cake is a timeless dessert made with premium vanilla extract and the finest ingredients to create a soft, light, and fluffy sponge. Layered with smooth vanilla buttercream and beautifully decorated, it's perfect for birthdays, family gatherings, weddings, or simply enjoying as a delicious everyday treat",
  },
  {
    id: 400,
    image: "./images/redvalletcake.webp",
    name: "Red Velvet Cake",
    category: CATEGORY.CAKE,
    type: TYPE.CHEESE,
    occasion: null,
    featured: true,
    description:
      "Soft, velvety layers with smooth cream cheese frosting. A classic favorite that adds elegance and sweetness to every special occasion.",
    price: bigCakePrice,
    details: null,
  },
  {
    id: 500,
    image: "./images/blackforestcake.webp",
    name: "Black Forest Cake",
    category: CATEGORY.CAKE,
    type: TYPE.CHOCOLATE,
    occasion: null,
    featured: true,
    description:
      "Layers of chocolate sponge, fresh cream, and cherries combined into a rich and delightful cake that everyone will love.",
    price: bigCakePrice,
    details: null,
  },
  {
    id: 600,
    image: "./images/strawberrycake.webp",
    name: "Strawberry Cake",
    category: CATEGORY.CAKE,
    type: TYPE.STRAWBERRY,
    occasion: null,
    featured: true,
    description:
      "Fresh strawberry flavor blended with soft sponge and creamy frosting for a refreshing and delicious dessert experience.",
    price: bigCakePrice,
    details: null,
  },
  {
    id: 700,
    image: "./images/carrotcake.webp",
    name: "Carrot Cake",
    category: CATEGORY.CAKE,
    type: TYPE.FRUIT,
    occasion: null,
    featured: true,
    description:
      "Fresh strawberry flavor blended with soft sponge and creamy frosting for a refreshing and delicious dessert experience.",
    price: bigCakePrice,
    details: null,
  },
  {
    id: 800,
    image: "./images/cheesecake.webp",
    name: "Strawberry Cake",
    category: CATEGORY.CAKE,
    type: TYPE.CHEESE,
    occasion: null,
    featured: false,
    description:
      "Fresh strawberry flavor blended with soft sponge and creamy frosting for a refreshing and delicious dessert experience.",
    price: bigCakePrice,
    details: null,
  },

  // Vanilla cakes data
  {
    id: 0,
    image: "./images/vanillacake.webp",
    name: "Vanilla Cake",
    category: CATEGORY.CAKE,
    type: TYPE.VANILLA,
    occasion: null,
    featured: true,
    description:
      "Light, fluffy, and perfectly sweet. Made with premium ingredients and ideal for custom designs, birthdays, and family celebrations.",
    price: bigCakePrice,
    details:
      "Our Classic Vanilla Cake is a timeless dessert made with premium vanilla extract and the finest ingredients to create a soft, light, and fluffy sponge. Layered with smooth vanilla buttercream and beautifully decorated, it's perfect for birthdays, family gatherings, weddings, or simply enjoying as a delicious everyday treat",
  },
  {
    id: 1,
    image: "./images/vanillabuttercream.webp",
    name: "Vanilla Buttercream Cake",
    category: CATEGORY.CAKE,
    type: TYPE.VANILLA,
    occasion: null,
    featured: false,
    description:
      "Soft vanilla sponge layered with smooth buttercream frosting, creating a creamy and delicious dessert loved by all ages.",
    price: bigCakePrice,
    details:
      "This delicious Vanilla Buttercream Cake features moist vanilla sponge layers generously filled and coated with rich, creamy vanilla buttercream. Every bite is smooth, sweet, and satisfying, making it an excellent choice for celebrations, anniversaries, and special occasions.",
  },
  {
    id: 2,
    image: "./images/vanillabeancake.webp",
    name: "Vanilla Bean Cake",
    category: CATEGORY.CAKE,
    type: TYPE.VANILLA,
    occasion: null,
    featured: false,
    description:
      "Made with real vanilla beans for a richer aroma and deeper vanilla flavor. Elegant, moist, and perfect for special occasions.",
    price: bigCakePrice,
    details:
      "Made with real vanilla beans, this elegant cake delivers an authentic vanilla flavor with tiny specks of vanilla throughout every slice. Its soft texture and delicate sweetness make it a premium dessert that's perfect for weddings, birthdays, and sophisticated celebrations.",
  },
  {
    id: 3,
    image: "./images/vanillastrawberry.webp",
    name: "Vanilla Strawberry Cake",
    category: CATEGORY.CAKE,
    type: TYPE.VANILLA,
    occasion: null,
    featured: false,
    description:
      "A fluffy vanilla cake paired with fresh strawberries and cream, offering a sweet and refreshing taste in every bite.",
    price: bigCakePrice,
    details:
      "Our Vanilla Strawberry Cake combines fluffy vanilla sponge with layers of fresh strawberries and smooth whipped cream. The natural sweetness of the strawberries perfectly complements the soft vanilla cake, creating a refreshing dessert for any celebration.",
  },
  {
    id: 4,
    image: "./images/vanillafruitcake.webp",
    name: "Vanilla Fruit Cake",
    category: CATEGORY.CAKE,
    type: TYPE.VANILLA,
    occasion: null,
    featured: false,
    description:
      "Decorated with a colorful selection of fresh fruits, this cake combines soft vanilla sponge with natural fruity sweetness.",
    price: bigCakePrice,
    details:
      "This delightful Vanilla Fruit Cake is topped with a colorful assortment of fresh seasonal fruits over soft vanilla sponge and light cream frosting. Every slice offers a refreshing balance of sweetness and fresh fruit flavors.",
  },
  {
    id: 5,
    image: "./images/vanilladripcake.webp",
    name: "Vanilla Drip Cake",
    category: CATEGORY.CAKE,
    type: TYPE.VANILLA,
    occasion: null,
    featured: false,
    description:
      "A modern vanilla cake finished with a beautiful chocolate drip and smooth frosting, making it as stunning as it is delicious.",
    price: bigCakePrice,
    details:
      "A modern masterpiece featuring fluffy vanilla cake layered with silky vanilla buttercream and finished with a beautiful white chocolate drip. Decorated with elegant toppings, this cake is perfect for birthdays, engagements, and luxury celebrations.",
  },
  {
    id: 6,
    image: "./images/vanillacocunutcake.webp",
    name: "Vanilla Coconut Cake",
    category: CATEGORY.CAKE,
    type: TYPE.COCONUT,
    occasion: null,
    featured: false,
    description:
      "A moist vanilla cake infused with coconut flavor and topped with coconut flakes for a tropical twist.",
    price: bigCakePrice,
    details:
      "Enjoy a tropical twist with our Vanilla Coconut Cake. Moist vanilla sponge is paired with creamy frosting and covered in shredded coconut, creating a light, refreshing dessert with a rich coconut aroma and smooth vanilla flavor.",
  },
  {
    id: 7,
    image: "./images/vanillarainbowcake.webp",
    name: "Vanilla Rainbow Cake",
    category: CATEGORY.CAKE,
    type: TYPE.VANILLA,
    occasion: null,
    featured: false,
    description:
      "A fun and colorful vanilla cake with vibrant layers inside, making it a favorite for parties and celebrations.",
    price: bigCakePrice,
    details:
      "A soft and fluffy vanilla sponge layered with vibrant rainbow colors and finished with smooth vanilla buttercream. This cheerful cake is perfect for birthdays, celebrations, and anyone who loves a fun, colorful dessert with the classic taste of vanilla.",
  },

  // ? vanilla birthday cake
  {
    id: 8,
    image: "images/vanillabirthdaycake.webp",
    name: "vanilla birthday cake",
    category: CATEGORY.CAKE,
    type: TYPE.VANILLA,
    occasion: OCCASSION.BIRTHDAY,
    featured: true,
    description:
      "A festive vanilla cake decorated with colorful toppings and creamy frosting, perfect for making birthdays extra special.",
    price: bigCakePrice,
    details:
      "Our Birthday Vanilla Cake is baked with soft vanilla sponge, layered with creamy buttercream, and decorated with colorful sprinkles and festive designs. A timeless favorite that brings joy to birthdays of all ages.",
  },

  // ? annivesary vanilla cake
  {
    id: 9,
    image: "images/vanillaanivessarycake.webp",
    name: " Anniversary vanilla cake",
    category: CATEGORY.CAKE,
    type: TYPE.VANILLA,
    occasion: OCCASSION.ANSRY,
    featured: false,
    description:
      "Celebrate lasting love with a moist vanilla cake decorated with elegant buttercream flowers and romantic accents for a memorable anniversary.",
    price: bigCakePrice,
    details:
      "Celebrate lasting love with our Anniversary Vanilla Cake, crafted from soft vanilla sponge and layered with smooth buttercream frosting. Elegant floral decorations and a delicate finish make it perfect for honoring life's special moments.",
  },

  // ? baby shower vanilla cake
  {
    id: 10,
    image: "images/vanillababycake.webp",
    name: " baby shower vanilla cake",
    category: CATEGORY.CAKE,
    type: TYPE.VANILLA,
    occasion: OCCASSION.BABYSHOWER,
    featured: false,
    description:
      "A soft vanilla cake decorated with adorable baby-themed designs in gentle pastel colors, making it a beautiful centerpiece for welcoming a new arrival.",
    price: bigCakePrice,
    details:
      "Our Baby Shower Vanilla Cake features light vanilla sponge layered with silky buttercream and decorated with adorable baby-themed designs in soft pastel colors. It's the perfect dessert for welcoming a little bundle of joy.",
  },

  // ? vanilla wedding cake
  {
    id: 11,
    image: "images/vanillaweddingcake.webp",
    name: " wedding vanilla cake",
    category: CATEGORY.CAKE,
    type: TYPE.VANILLA,
    occasion: OCCASSION.WEDDING,
    featured: false,
    description:
      "A soft vanilla cake decorated with adorable baby-themed designs in gentle pastel colors, making it a beautiful centerpiece for welcoming a new arrival.",
    price: bigCakePrice,
    details:
      "Our Baby Shower Vanilla Cake features light vanilla sponge layered with silky buttercream and decorated with adorable baby-themed designs in soft pastel colors. It's the perfect dessert for welcoming a little bundle of joy.",
  },

  // ? vanilla graduation cake
  {
    id: 12,
    image: "images/vanillagraduationcake.webp",
    name: "gradution vanilla cake",
    category: CATEGORY.CAKE,
    type: TYPE.VANILLA,
    occasion: OCCASSION.GRADUATION,
    featured: false,
    description:
      "Celebrate your academic achievement with a beautifully decorated vanilla cake featuring smooth buttercream frosting and elegant graduation-themed decorations. Perfect for marking this unforgettable milestone.",
    price: bigCakePrice,
    details:
      "Celebrate your academic achievement with our Graduation Vanilla Cake, made from soft, fluffy vanilla sponge layered with smooth vanilla buttercream. Decorated with graduation caps, diplomas, and elegant finishing touches, it's the perfect centerpiece for graduation parties and memorable celebrations.",
  },

  // ? vanilla engagement cake
  {
    id: 13,
    image: "images/vanillaengagementcake.webp",
    name: "engagement vanilla cake",
    category: CATEGORY.CAKE,
    type: TYPE.VANILLA,
    occasion: OCCASSION.ENGAGEMENT,
    featured: false,
    description:
      "Celebrate your academic achievement with a beautifully decorated vanilla cake featuring smooth buttercream frosting and elegant graduation-themed decorations. Perfect for marking this unforgettable milestone.",
    price: bigCakePrice,
    details:
      "Celebrate your academic achievement with our Graduation Vanilla Cake, made from soft, fluffy vanilla sponge layered with smooth vanilla buttercream. Decorated with graduation caps, diplomas, and elegant finishing touches, it's the perfect centerpiece for graduation parties and memorable celebrations.",
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
    description:
      "Freshly prepared rice and chicken served with a complimentary juice and fresh chili at no extra cost.",
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
    description:
      "Freshly prepared rice and chicken served with a complimentary juice and fresh chili at no extra cost.",
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
    description:
      "Freshly prepared ugali and chicken served with a complimentary juice and fresh chili at no extra cost.",
    price: lunchPrice,
    details: null,
  },
  {
    id: 33,
    image: "./images/briyanichicken.png",
    name: "chicken biryani",
    category: CATEGORY.MEAL,
    type: "rice",
    occasion: null,
    featured: false,
    description:
      "Fragrant chicken biryani served with tender, well-seasoned chicken and a complimentary 300ml mango juice.",
    price: lunchPrice,
    details: null,
  },
  {
    id: 34,
    image: "./images/whitericechicken.png",
    name: "Vegetable Rice & Chicken",
    category: CATEGORY.MEAL,
    type: "rice",
    occasion: null,
    featured: false,
    description:
      "Steamed vegetable white rice paired with juicy roasted chicken and a free 300ml mango juice.",
    price: lunchPrice,
    details: null,
  },
  {
    id: 35,
    image: "./images/ricecurrysoup.png",
    name: "rice curry soup",
    category: CATEGORY.MEAL,
    type: "rice",
    occasion: null,
    featured: false,
    description:
      "Aromatic pilau served with rich chicken curry soup and a complimentary 300ml mango juice.",
    price: lunchPrice,
    details: null,
  },
];


findingId();
addToCartFunc();
initAddBtn();
minusBtnInit();



let selectedQuantity = 1;

const total = document.getElementById("quant");
const addProductBtn = document.getElementById("add");
const minusProductBtn = document.getElementById("minus");

console.log(total, addProductBtn, minusProductBtn);

// Display initial value
total.textContent = selectedQuantity;

// Increase
addProductBtn.addEventListener("click", () => {
  selectedQuantity++;
  total.textContent = selectedQuantity;
  updateCart();
});

// Decrease
minusProductBtn.addEventListener("click", () => {
  if (selectedQuantity > 1) {
    selectedQuantity--;
    total.textContent = selectedQuantity;
    updateCart();
  }
});

 cartRenderValid();

