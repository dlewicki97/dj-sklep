setCartSum();
function setCartSum() {
  let counters = [
    ...document.getElementsByClassName("cart-drop-counter-container"),
  ];
  let sum = 0;
  let favSum = 0;
  counters.forEach((counter) => {
    let amount = parseInt(
      counter.getElementsByClassName("cart-drop-amount")[0].innerHTML
    );

    let price = parseInt(
      counter
        .getElementsByClassName("cart-drop-price")[0]
        .innerHTML.replace(/ |zł/g, "")
    );

    sum += amount * price;
    favSum += price;
  });

  let sumContainers = document.querySelectorAll(
    ".cart-drop-sum-price:not(.cart-drop-sum-price.favourite)"
  );
  sumContainers.forEach((container) => {
    container.innerHTML = sum + " zł";
  });
  document.querySelector(".cart-drop-sum-price.favourite").innerHTML =
    favSum + " zł";
  let favouritesTitle = document.querySelector(
    ".favourites-page .title-wrapper .title span"
  );
  if (favouritesTitle != null) favouritesTitle.innerHTML = favSum + " zł";
}

let counters = document.getElementsByClassName("cart-drop-product-counter");
let half_length = Math.ceil(counters.length / 2);
countersArr = [...counters];
let leftSide = countersArr.slice(0, half_length);
let rightSide = countersArr.slice(half_length, countersArr.length);
leftSide.forEach((counter, i) =>
  counter.addEventListener("click", (e) => {
    if (e.target.classList.contains("cart-drop-menu-option")) {
      counter.getElementsByClassName("cart-drop-amount")[0].innerHTML =
        e.target.innerHTML;
      rightSide[i].getElementsByClassName("cart-drop-amount")[0].innerHTML =
        e.target.innerHTML;
      counter.getElementsByTagName("input")[0].value = e.target.innerHTML;
      rightSide[i].getElementsByTagName("input")[0].value = e.target.innerHTML;
      setCartSum();
    }
    let menu = counter.getElementsByClassName("cart-drop-counter-menu")[0];
    if (menu.style.display == "none")
      counter.getElementsByClassName(
        "cart-drop-counter-menu"
      )[0].style.display = "flex";
    else
      counter.getElementsByClassName(
        "cart-drop-counter-menu"
      )[0].style.display = "none";
  })
);
rightSide.forEach((counter, i) =>
  counter.addEventListener("click", (e) => {
    if (e.target.classList.contains("cart-drop-menu-option")) {
      counter.getElementsByClassName("cart-drop-amount")[0].innerHTML =
        e.target.innerHTML;
      leftSide[i].getElementsByClassName("cart-drop-amount")[0].innerHTML =
        e.target.innerHTML;
      counter.getElementsByTagName("input")[0].value = e.target.innerHTML;
      leftSide[i].getElementsByTagName("input")[0].value = e.target.innerHTML;
      setCartSum();
    }
    let menu = counter.getElementsByClassName("cart-drop-counter-menu")[0];
    if (menu.style.display == "none")
      counter.getElementsByClassName(
        "cart-drop-counter-menu"
      )[0].style.display = "flex";
    else
      counter.getElementsByClassName(
        "cart-drop-counter-menu"
      )[0].style.display = "none";
  })
);
