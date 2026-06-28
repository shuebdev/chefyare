// copy button
const btn = document.getElementById("copyBtn");

      btn.addEventListener("click", async () => {
        const phone = document.getElementById("phone").textContent;

        try {
          await navigator.clipboard.writeText(phone);
          btn.textContent = "Copied!";

          setTimeout(() => {
            btn.textContent = "Copy Number";
          }, 2000);
        } catch (err) {
          console.log("Copy failed:", err);
        }
      });
      
// form validiation
const form = document.getElementById("form");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const name = document.getElementById("name");
  const number = document.getElementById("phone");
  const location = document.getElementById("location");
  const quantity = document.getElementById("quantity");

  const whatsApp = `New order:
  Name: ${name}
  Phone Number: ${number}
  location: ${location}
  `;
});
console.log("starting");
