const buttons = document.querySelectorAll(".openModal");

buttons.forEach((btn) => {
  btn.addEventListener("click", () => {
    const message = "Hi chef yare";
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
addToCartFunc();
initAddBtn();
minusBtnInit();
cartRenderValid();
continuefunc();
cartLenFunc();
