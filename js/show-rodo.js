let rodos = [...document.getElementsByClassName("show-rodo")];
rodos.forEach((rodo, i) => {
  rodo.addEventListener("mouseover", () => {
    document.getElementsByClassName("rodo")[i].classList.add("active");
  });
  rodo.addEventListener("mouseout", () => {
    document.getElementsByClassName("rodo")[i].classList.remove("active");
  });
});
