// cart modal
const cartModel = document.querySelector(".cart-modal");
const closeBtn = document.getElementById("closeBtn");
const cartBtn = document.getElementById("cartBtn");
const bgOverlay = document.querySelector(".bgOverlay");

// open cart modal

const openCart = () => {
  cartModel.classList.add("modalActive");
  bgOverlay.classList.add("activeBg");
  document.body.classList.add("no-scroll");
};

// close cart modal

const closeCart = () => {
  cartModel.classList.remove("modalActive");
  bgOverlay.classList.remove("activeBg");
  document.body.classList.remove("no-scroll");
};
document.querySelectorAll(".bgOverlay").length;
// init
closeBtn.addEventListener("click", closeCart);
cartBtn.addEventListener("click", openCart);

// cart system

const cart = JSON.parse(localStorage.getItem("cart")) || [];

// saving cart

const saveCart = () => {
  localStorage.setItem("cart", JSON.stringify(cart));
};

// empty cart logic function

const emptyRenderedCart = () => {
  const renderCartContainer = document.getElementById("cartSystem");

  renderCartContainer.innerHTML = emptyCartHtml;
};

// empty cart html code

const emptyCartHtml = `
          <div class="cart-modal-wrapper-2">
            <div class="cart-alert">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <circle cx="9" cy="21" r="1" />
                <circle cx="20" cy="21" r="1" />
                <path
                  d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"
                />
              </svg>
              <p class="alert-desc">your cart is currently empty</p>
              <p class="alert-desc">
                Looks like you haven't added anything yet.
              </p>
            </div>
             
          </div>
        </div>
            `;

// active cart rendering

// render items

const renderItems = (items) => {
  let html = "";

  items.forEach((item) => {
    const subTotal = item.price * item.quantity;
    html += `
        <div class="cart-modal-wrapper">
          <div class="cart-item-img">
            <img
              src="${item.image}"
              alt="cake image"
              class="cart-img"
            />
          </div>
          
          <div class="cart-item-info">
            <h1 class="cart-item-name">
              product name:
              <span class="product-name-value">${item.name}</span>
            </h1>
            <h1 class="cart-item-quantity">
              price:<span class="product-name-value">${item.price} x ${item.quantity}</span>
            </h1>
            <h1 class="cart-item-quantity">
              sub total:<span class="product-name-value">${subTotal}</span>
            </h1>
            <div class="btn-wrapper">
              <div class="quantity">
                <button class="minusBtn" data-id = "${item.id}">
                  <!-- https://feathericons.dev/?search=minus&iconset=feather -->
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    width="24"
                    height="24"
                    class="main-grid-item-icon"
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                  >
                    <line x1="5" x2="19" y1="12" y2="12" />
                  </svg>
                </button>
                <span class="quant">${item.quantity}</span>
                <button class="addBtn" data-id = "${item.id}">
                  <!-- https://feathericons.dev/?search=plus&iconset=feather -->
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    width="24"
                    height="24"
                    class="main-grid-item-icon"
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                  >
                    <line x1="12" x2="12" y1="5" y2="19" />
                    <line x1="5" x2="19" y1="12" y2="12" />
                  </svg>
                </button>
              </div>
              <div class="remove">
                <button class="deleteBtn" data-id = "${item.id}">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <polyline points="3 6 5 6 21 6" />
                    <path
                      d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"
                    />
                  </svg>
                  <span>remove</span>
                </button>
              </div>
            </div>
          </div>
        </div>
        `;

        updateTotal();
  });

  return html;
};
// whole cart render
const renderCart = () => {
  const cartContainer = document.getElementById("cartSystem");

  cartContainer.innerHTML = `
      ${renderItems(cart)}
    `;
  initAddBtn();
  minusBtnInit();
  deleteInint();

};

// add button logic
const addbtnLogic = (id) => {
  const item = cart.find((item) => {
    return item.id === id;
  });

  if (!item) return;

  item.quantity++;

  updateCart();
};

// add buttons init

const initAddBtn = () => {
  const quantityAddButtons = document.querySelectorAll(".addBtn");

  quantityAddButtons.forEach((button) => {
    button.addEventListener("click", () => {
      Number(button.dataset.id);
      const id = Number(button.dataset.id);

      addbtnLogic(id);
    });
  });
};
// updating cart
const updateCart = () => {
  saveCart();
  // cart logic render
  cartRenderValid();
  updateTotal();
};

// minus button logic

const MinusBtnLogic = (id) => {
  const item = cart.find((item) => {
    return item.id === id;
  });

  if (!item) return;

  if (item.quantity > 1) {
    item.quantity--;

    updateCart();
  }
};

cartRenderValid = () => {
  if (cart.length === 0) {
    emptyRenderedCart();
  } else {
    renderCart();
  }
};
// minus btn init

const minusBtnInit = () => {
  const quantityMinusButtons = document.querySelectorAll(".minusBtn");

  quantityMinusButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const id = Number(button.dataset.id);

      MinusBtnLogic(id);
    });
  });
};

// remove function

const removeItem = (id) => {
  const index = cart.findIndex((item) => {
    return item.id === id;
  });

  if (index !== -1) {
    cart.splice(index, 1);
  }

  updateCart();
};
const deleteInint = () => {
  const deleteBtn = document.querySelectorAll(".deleteBtn");

  deleteBtn.forEach((btn) => {
    btn.addEventListener("click", () => {
      const id = Number(btn.dataset.id);
      removeItem(id);
    });
  });
};

// cart addToBtn logic

const addToCartLogic = (id, quantity) => {
  // finding product

  const selectedProduct = foods.find((food) => {
    return food.id === id;
  });

  // finding duplicate items
  const checkItem = cart.find((item) => {
    return item.id === id;
  });

  // addtocart statement

  if (checkItem) {
    checkItem.quantity++;
  } else {
    cart.push({
      id: selectedProduct.id,
      name: selectedProduct.name,
      image: selectedProduct.image,
      quantity: quantity,
      price: selectedProduct.price,
    });
  }

  updateCart();
};

// add to cart buttons
const addToCartFunc = () => {
  const addToCartBtns = document.querySelectorAll(".add-to-cart");

  addToCartBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      const id = Number(btn.dataset.id);

      addToCartLogic(id, selectedQuantity);
      // Reset after adding
      selectedQuantity = 1;
      total.textContent = selectedQuantity;
    });
  });
};


const totalPrice = document.getElementById("totalPrice")

const updateTotal = () => {
  const total = cart.reduce((sum, item) => {
    return sum + item.price * item.quantity;
  }, 0);


  totalPrice.textContent = `(${total})`;

};
