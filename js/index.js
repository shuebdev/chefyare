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


filteredLunch();
filteredHomePageCakes();

