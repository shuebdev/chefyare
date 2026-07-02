// cart modal

const cartModel = document.querySelector(".cart-modal");
const closeBtn = document.getElementById("closeBtn");
const cartBtn = document.getElementById("cartBtn");

// open nav

const openCart = () => {
  cartModel.classList.add("modalActive");
  document.body.style = `visibility: visible; height: 100vh; width:100vw; overflow: hidden; `;
};

// close nav

const closeCart = () => {
  cartModel.classList.remove("modalActive");
  document.body.style = `visibility: visible; height: initial; width:100%; overflow-x: hidden; `;
};

// init
closeBtn.addEventListener("click", (e) => {
    if (e.target.id === "closeBtn")
    {
        closeCart();
    }
});
cartBtn.addEventListener("click", (e) => {
    if (e.target.id === "cartBtn")
    {
        openCart();
    }
});

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
              <div class="cart-modal" id="cartModal">
        <div id="closeBtn">
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
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        </div>
        <h1 class="cart-title">your cart</h1>
        <div class="container">
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
        <div class="check-wrapper" id="check-wrapper">
          <button class="cont-shopping" id="contShopping">
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
              <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" />
              <line x1="3" y1="6" x2="21" y2="6" />
              <path d="M16 10a4 4 0 0 1-8 0" />
            </svg>
            <span class="continue-desc">continue shopping</span>
          </button>
        </div>
        <!--  -->
      </div>
            `;

// active cart rendering

// header cart render

const renderedHeader = () => {
  let html = `
     
    <div class="cart-modal" id="cartModal">
      <div id="closeBtn">
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
          <line x1="18" y1="6" x2="6" y2="18" />
          <line x1="6" y1="6" x2="18" y2="18" />
        </svg>
      </div>
      <h1 class="cart-title">your cart</h1>
      <div class="container">
    `;

  return html;
};

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
            <h1 class="cart-item-size">
              size:<span class="product-name-value">${item.size}</span>
            </h1>
            <h1 class="cart-item-quantity">
              price:<span class="product-name-value">${item.price} x ${item.quantity}</span>
            </h1>
            <h1 class="cart-item-quantity">
              sub total:<span class="product-name-value">${subTotal}</span>
            </h1>
            <div class="bgOverlay"></div>
            <div class="btn-wrapper">
              <div class="quantity">
                <button class="minunBtn" data-id = "${item.id}" data-size = "${item.size}">
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
                <span id="total">1</span>
                <button class="addBtn" data-id = "${item.id}" data-size = "${item.size}>
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
                <button class="deleteBtn">
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
  });

  return html;
};

// render footer

const renderFooter = () => {
  let html = "";

  html = `
    /div>
      <div class="check-wrapper" id="check-wrapper">
        <button class="checkoutBtn" id="checkoutBtn">
          checkout <span id="subTotal">(ksh 23,000)</span>
        </button>
        <button class="cont-shopping" id="contShopping">
          continue shopping
        </button>
      </div>
    </div>
    `;

  return html;
};

// whole cart render
const renderCart = () => {
  const cartContainer = document.getElementById("cartSystem");

  cartContainer.innerHTML = `
      ${renderedHeader()}
      ${renderItem(cart)}
      ${renderFooter()}
    `;

    initAddBtn();
    minusBtnInit();
};

// add button logic
const addbtnLogic = (id, size) => {
  const item = cart.find((item) => {
    return item.id === id && item.size === size;
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
        const size = button.dataset.size;

        addbtnLogic(id, size);
    });
  });
};
// updating cart
const updateCart = () =>
{
    saveCart();
    renderCart();
}

// minus button logic

const MinusBtnLogic = (id, size) =>
{
    const item = cart.find((item) => {
        return item.id === id && item.size === size;
    });

    if (!item ) return;

    if (item.quantity > 1)
    {
        item.quantity--;

        updateCart();
    }

}

// minus btn init

const minusBtnInit = () => 
{
    const quantityMinusButtons = document.querySelectorAll(".minusBtn");

    quantityMinusButtons.forEach((button) =>{
        button.addEventListener("click", () =>{
            const id = Number(button.dataset.id);
            const size = button.dataset.size;

            MinusBtnLogic(id, size);
        })
    });
}

// cart logic render

if (cart.length === 0)
{
    emptyRenderedCart();
}
else
{
    renderCart();
}