// filtered lunch
const filteredLunch = () => {
  const lunchContainer = document.getElementById("lunchContainer");
  const lunch = foods.filter((food) => {
    return food.category === CATEGORY.MEAL;
  });

  renderedItems(lunch, lunchContainer);
};

// filtered menu cakes

const filteredcakes = () => {
  const cakeContainer = document.getElementById("cakeContainer");
  const cakes = foods.filter((food) => {
    return food.category === CATEGORY.CAKE;
  });

  renderedItems(cakes, cakeContainer);
};

// filtered homepagecakes and desserts

const filteredHomePageCakes = () => {
  const homePageCakesContainer = document.getElementById("homePageContainer");
  const homePageCakes = foods.filter((food) => {
    return food.featured === true;
  });

  renderedItems(homePageCakes, homePageCakesContainer);
};

// * filtered desserts

const filtereddesserts = () => {
  const dessertContainer = document.getElementById("dessertContainer");

  const desserts = foods.filter((food) => {
    return food.category === CATEGORY.DESSERT;
  });

  renderedItems(desserts, dessertContainer);
};
// finding product
const findingId = () => {
  const selectedProduct = foods.find((food) => food.id === id);

  renderedselected(selectedProduct);
  findingRelated(selectedProduct);
};

// filtered categories and type logic

const filterAndRenderLogic = (category, type, containerId) => {
  const filteredcategory = foods.filter((food) => {
    return food.category === category && food.type === type;
  });

  renderedItems(filteredcategory, document.getElementById(containerId));
};
// filtered vanilla cakes

const filteredVanillaCakes = () => {
  filterAndRenderLogic(CATEGORY.CAKE, TYPE.VANILLA, "vanillaCakeContainer");
};

const findingRelated = (selectedProduct) => {
  const relatedContainer = document.getElementById("relatedContainer");
  const related = foods.filter((food) => {
    return (
      food.category === selectedProduct.category &&
      food.type === selectedProduct.type &&
      food.id !== selectedProduct.id
    );
  });

  renderedItems(related, relatedContainer);
};

// search filtering

const userInput = document.getElementById("userInput");

const searchContainer = document.getElementById("searchContainer");

const searchFilter = () => {
    const inputValue = userInput.value;
  const searchResult = foods.filter((food) => {
    return food.name.toLowerCase().includes(inputValue.toLowerCase());
  });

  renderedItems(searchResult, searchContainer);

  if (searchResult.length === 0)
  {
    searchContainer.innerHTML = `
      
    `
  }

  return searchResult;
};



const mainContainer = document.getElementById('menuProduct');

const searchSection = document.getElementById('searchSection');

 searchSection.style.display = "none";

userInput.addEventListener("keyup", () => {
    searchFilter();

    if (userInput.value.trim() !== "") {
        mainContainer.style.display = "none";
        searchSection.style.display = "flex"
    } else {
        mainContainer.style.display = "block";
        searchSection.style.display = "none";
    }
});





