// cart modal

const cartModel = document.querySelector(".cart-modal");
const closeBtn = document.getElementById("closeBtn");
const cartBtn = document.getElementById("cartBtn");

// open nav

const openCart = () => {
    cartModel.classList.add("modalActive");
    document.body.classList.add("no-scroll");
}

// close nav 

const closeCart = () => {
    cartModel.classList.remove("modalActive");
    document.body.classList.remove("no-scroll");
}

// init
closeBtn.addEventListener("click", closeCart);
cartBtn.addEventListener("click", openCart);

// cart system

const cart = JSON.parse(localStorage.getItem("cart")) || [];

// empty cart logic function

const emptyLogic = (item) => {
    if (item.length === 0)
    {
        
    }
}