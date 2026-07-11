
const buttons = document.querySelectorAll(".openModal");

buttons.forEach((btn) => {
  btn.addEventListener("click", () => {
    const message = "Hi, I would like to know more about the school";
    const url = `https://wa.me/254758957734?text=${encodeURIComponent(message)}`;

    window.open(url, "_blank");
  });
});


filteredLunch();
filteredHomePageCakes();

