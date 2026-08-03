renderCartSummary(cart, cartSumCon);

// form validiation
const form = document.getElementById("form");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const cartMessage = cart
    .map((item) => {
      const subTotal = item.quantity * item.price;

      return ` 
       Product: ${item.name}
       Qty: ${item.quantity}
       Price: ${subTotal}
       
    `;
    })
    .join("");

  const name = document.getElementById("name").value;
  const number = document.getElementById("phone").value;
  const location = document.getElementById("location").value;
  const total = document.getElementById("totalPrice").textContent;
  const userInformation = `New Order:\n
   Name: ${name}
   Phone Number: ${number}
   Location: ${location}

  ${cartMessage}

  ---------------------------------------

  TOTAL: kshs${total}

  `;


  const url = `https://wa.me/254758957734?text=${encodeURIComponent(userInformation)}`;

  window.open(url, "_blank");
});

localStorage.removeItem("cart");
cart = [];
updateCart();
