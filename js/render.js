
const renderedItems = (items, container) => {

  container.innerHTML = items.map((food) => {
    return `
    <a href="product.html?id=${food.id}" class="myWork-item" >
          
              <div class="myWork-img">
                <img src="${food.image}" alt="${food.name}" />
              </div>
              <div class="myWork-info">
                <h2 class="myWork-item-title">${food.name}</h2>
                <p class="myWork-item-desc">
                  ${food.description}
                </p>
                <h1 class="myWork-item-price"> kshs ${food.price}</h1>
              </div>
            
            </a>
            
    `;
  })
  .join("");
};

// rendering selected products
const renderedselected = (item) => {
  const container = document.getElementById("selectedProduct");
  container.innerHTML = `
    <div class="product-img">
            <img src="${item.image}" alt="${item.name}" />
          </div>
          <div class="product-info">
            <h1 class="product-name">${item.name}</h1>
            <p class="product-desc">${item.description}</p>
            <h3 class="product-price"> Kshs ${item.price}</h3>
            <div class="quantity">
              <button class="minunBtn">
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
              <button class="addBtn">
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
            <div class="product-buttons" id="productButtons">
              <button class="add-to-cart" id="addToCart" data-id="${item.id}">
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
                <span class="button-desc">add to cart</span>
              </button>
              <button class="call-button" id="openWhatsApp">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path
                    d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"
                  />
                </svg>
              </button>
            </div>
            <div class="desc-item">
              <h1 class="desc-title">description</h1>
              <p class="desc-item-desc">${item.details}</p>
            </div>
          </div>
  `;

  
};