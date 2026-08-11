
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
filteredVanillaCakes();

// search button init

const searchbtns = document.querySelector(".search-btn");

searchbtns.addEventListener('click', () => {
  searchFilter();
})

filteredBtnLogic("vanillaCakesbtn",CATEGORY.CAKE, TYPE.VANILLA,);
filteredBtnLogic("chocolateCakesBtn", CATEGORY.CAKE, TYPE.CHOCOLATE);
filteredBtnLogic("meals", CATEGORY.MEAL, null);



