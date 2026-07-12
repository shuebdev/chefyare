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
  // Global settings:
  disable: false,
  startEvent: 'DOMContentLoaded',
  initClassName: 'aos-init', 
  animatedClassName: 'aos-animate', 
  useClassNames: false, 
  disableMutationObserver: false, 
  debounceDelay: 50, 
  throttleDelay: 99,
  
  offset: 120,         
  delay: 0,            
  duration: 400,       
  easing: 'ease-out',  
  once: false,       
  mirror: false,      
  anchorPlacement: 'top-bottom', 
});

filteredLunch();
filteredHomePageCakes();

