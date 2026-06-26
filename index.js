const navIcon = document.querySelector(".nav-icon");
const navClose = document.querySelector(".close-icon");
const bgOverlay = document.querySelector(".bgOverlay");
const navList = document.querySelector(".list");

const navOpen = () => {
  navList.classList.add("show");
  bgOverlay.classList.add("active");
  document.body.classList.add("scroll");
};

const closeNav = () => {
  navList.classList.remove("show");
  bgOverlay.classList.remove("active");
  document.body.classList.remove("scroll");
};

navIcon.addEventListener("click", navOpen);
navClose.addEventListener("click", closeNav);

navList.addEventListener("click", (e) => {
  if (e.target === navList) {
    list.classList.remove("show");
  }
});
const buttons = document.querySelectorAll(".openModal");

buttons.forEach((btn) => {
  btn.addEventListener("click", () => {
    const message = "Hi, I would like to know more about the school";
    const url = `https://wa.me/254758957734?text=${encodeURIComponent(message)}`;

    window.open(url, "_blank");
  });
});

AOS.init({
  offset: 200,
  delay: 100,
  duration: 400,
  easing: "ease",
  once: false,
  mirror: false,
  anchorPlacement: "top-bottom",
});

// rendering
const foods = [
{
  // cakes
  id: 1,
  image: "./images/choclatecake.jpg",
  name: "chocolate cake",
  category: "cake",
  type: "chocolate",
  desc: "Rich, moist, and packed with deep chocolate flavor. Freshly baked and beautifully decorated, perfect for birthdays, celebrations, or satisfying your chocolate cravings.",
  price: 'Kshs.' + 250,
},
{
  id: 2,
  name: "Vanilla cake",
  image: "./images/vanillacake.jpg",
  category: "cake",
  type: "vanilla",
  name: "Vanilla Cake",
  desc: "Light, fluffy, and perfectly sweet. Made with premium ingredients and ideal for custom designs, birthdays, and family celebrations.",
  price: 250,
},
{
  id: 3,
  image: "./images/redvalletcake.jpg",
  name: "Red Velvet Cake",
  category: "cake",
  type: "cheese",
  desc: "Soft, velvety layers with smooth cream cheese frosting. A classic favorite that adds elegance and sweetness to every special occasion.",
  price: "kshs." + 250,
},
{
  id: 4,
  image: "./images/blackcake.jpg",
  name: "Black Forest Cake",
  category: "cake",
  type: "chocolate",
  desc: "Layers of chocolate sponge, fresh cream, and cherries combined into a rich and delightful cake that everyone will love.",
  price: "kshs." + 250,
},
{
  id: 5,
  image: "./images/strawberrycake.jpg",
  name: "strawberry cake",
  category: "cake",
  type: "strawberry",
  desc: "Fresh strawberry flavor blended with soft sponge and creamy frosting for a refreshing and delicious dessert experience.",
  price: "kshs." + 250,
},

];
console.log("now on render")
const renderedItems = (item) => {
  const container = document.getElementById("foodContainer");

  container.innerHTML = "";

  item.forEach((food) => {
    container.innerHTML += `
           <div class="myWork-item" data-aos="fade-up">
              <div class="myWork-img">
                <img src="${food.image}" alt="${food.name}" />
              </div>
              <div class="myWork-info">
                <h2 class="myWork-item-title">${food.name}</h2>
                <p class="myWork-item-desc">
                  ${food.desc}
                </p>
                <h1 class="myWork-item-price">${food.price}</h1>
               <a href="order.html?item=${encodeURIComponent(food.name)}&price=${food.price}"
             class="primary-btn btn">
            order now
          </a>
              </div>
            </div>
    `;
  });
};

renderedItems(foods);


const cakeButton = document.getElementById("cakes");

cakeButton.addEventListener("click", () => {
  const cakes = foods.filter((food) => {
    return food.type === "chocolate";
  })

  renderedItems(cakes);
});

const btn = document.getElementById("copyBtn");

btn.addEventListener("click", async () => {
  const phone = document.getElementById("phone").textContent;

  try {
    await navigator.clipboard.writeText(phone);
    btn.textContent = "Copied!";

    setTimeout(() => {
      btn.textContent = "Copy Number";
    }, 2000);
  } catch (err) {
    console.log("Copy failed:", err);
  }
});
console.log("hey form")
const form = document.getElementById("form");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const name = document.getElementById("name");
  const number = document.getElementById("phone");
  const location = document.getElementById("location");
  const quantity = document.getElementById("quantity");

  const whatsApp = `New order:
  Name: ${name}
  Phone Number: ${number}
  location: ${location}
  `;
});
console.log("starting");
