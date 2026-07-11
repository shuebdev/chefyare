// filtered lunch
const filteredLunch = () => {
  const lunchContainer = document.getElementById("lunchContainer");
  const lunch = foods.filter((food) => {
    return food.category === "food";
  });

  renderedItems(lunch, lunchContainer);
};

// filtered menu cakes

const filteredcakes = () => {
    const cakeContainer = document.getElementById("cakeContainer");
    const cakes = foods.filter((food) => {
        return food.category === "cake"
    });

    renderedItems(cakes, cakeContainer);
}

// filtered homepagecakes and desserts

const filteredHomePageCakes = () => {
    const homePageCakesContainer = document.getElementById("homePageContainer")
    const homePageCakes = foods.filter((food) => {
        return food.render === "home"
    });

    renderedItems(homePageCakes, homePageCakesContainer);
}

// filtered desserts

const filtereddesserts = () => {
    const dessertContainer = document.getElementById("dessertContainer");

    const desserts = foods.filter((food) => {
        return food.category === "desserts"
    });

    renderedItems(desserts, dessertContainer);
}
// finding product
const findingId = () => {
    const selectedProduct = foods.find(food => food.id === id);

    renderedselected(selectedProduct);
    findingRelated(selectedProduct);

};

// filtered categories and type logic

const filterAndRenderLogic = (category, type, containerId) => {
    
    const filteredcategory = foods.filter(
        (food) => {
            return(
                food.category === category && food.type === type
            );
        }
    );

    renderedItems (filteredcategory, document.getElementById(containerId));
}
// filtered vanilla cakes 

const filteredVanillaCakes = () => {

    filterAndRenderLogic (cakesCategory, vanillaType, "vanillaCakeContainer");
}


const findingRelated = (selectedProduct) => {
    const relatedContainer = document.getElementById("relatedContainer");
    const related = foods.filter(food => {
        return (
            food.category === selectedProduct.category &&
            food.id !== selectedProduct.id
        );
    });

    renderedItems(related, relatedContainer);
};
