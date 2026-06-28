const renderedItems = (item, container) => {
  container.innerHTML = "";

  item.forEach((food) => {
    container.innerHTML += `
    <a href="product.html?id=${food.id}" class="myWork-item" >
          
              <div class="myWork-img">
                <img src="${food.image}" alt="${food.name}" />
              </div>
              <div class="myWork-info">
                <h2 class="myWork-item-title">${food.name}</h2>
                <p class="myWork-item-desc">
                  ${food.desc}
                </p>
                <h1 class="myWork-item-price">ksh ${food.price}</h1>
              </div>
            
            </a>
            
    `;
  });
};


const renderedselected = (item) => {
  const container = document.getElementById("selectedProduct");
 

  container.innerHTML = `
   <div class="myWork-item">
        <div class="myWork-img">
                <img src="${item.image}" alt="${item.name}" />
              </div>
              <div class="myWork-info">
                <h2 class="myWork-item-title">${item.name}</h2>
                <p class="myWork-item-desc">
                  ${item.desc}
                </p>
                <h1 class="myWork-item-price">kshs.${item.price}</h1>

                 <button class="btn primary-btn">order</button>
              </div>
    </div>
  `
}

const productButtons = document.getElementById('productButtons');
const footer = document.querySelector('footer');

window.addEventListener('scroll', () => {
  const footerTop = footer.getBoundingClientRect().top;
  const windowHeight = window.innerHeight;

  if (footerTop <= windowHeight) {
    productButtons.style.position = 'absolute';
    productButtons.style.top = (footer.offsetTop - productButtons.offsetHeight) + 'px';
    productButtons.style.bottom = 'auto';
  } else {
    productButtons.style.position = 'fixed';
    productButtons.style.bottom = '60px';
    productButtons.style.top = 'auto';
  }
});