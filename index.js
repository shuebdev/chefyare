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
  location: 
  `;
});
console.log("starting");
const cards = [
{
  id: 1,
  image: "./images/meatrice.png",
  name: "Rice and chicken",
  desc: "Freshly prepared rice and chicken served with a complimentary juice and fresh chili at no extra cost.",
  price: 250,
},
{
  id: 1,
  image: "./images/choclatecake.jpg",
  name: "Rice and chicken",
  desc: "Freshly prepared rice and chicken served with a complimentary juice and fresh chili at no extra cost.",
  price: 250,
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

renderedItems(cards);
console.log("ends here")
console.log("container:", document.getElementById("foodContainer"));