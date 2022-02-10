let carts = document.getElementsByClassName("cart");

for (let i = 0; i < carts.length; i++) {
  let button = carts[i];
  button.addEventListener("mouseover", () => {
    button.classList.add("active");
  });
  button.addEventListener("mouseout", (e) => {
    if (!e.toElement?.classList.contains("cart-drop"))
      button.classList.remove("active");
  });
  let dropdown = document.getElementsByClassName("cart-drop")[i];
  console.log();
  dropdown.addEventListener("mouseover", () => {
    if (!button.classList.contains("active")) button.classList.add("active");
  });
  dropdown.addEventListener("mouseout", (e) => {
    if (button.classList.contains("active")) button.classList.remove("active");
  });
}
