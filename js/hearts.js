let hearts = [...document.getElementsByClassName("heart")];
hearts.forEach((heart) => {
  heart.addEventListener("click", () => {
    if (heart.classList.contains("filled")) {
      heart.classList.remove("filled");
      heart.src = "img/heart-outline.svg";
    } else {
      heart.classList.add("filled");
      heart.src = "img/heart-filled.svg";
    }
  });
});
