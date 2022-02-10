showFixedButtons();
function showFixedButtons() {
  if (window.scrollY > 120) {
    document.getElementsByClassName("button-collapse")[0].style.display =
      "inline-block";
    document.getElementsByClassName(
      "fixed-buttons-container"
    )[0].style.display = "flex";
  } else {
    document.getElementsByClassName("button-collapse")[0].style.display =
      "none";
    document.getElementsByClassName(
      "fixed-buttons-container"
    )[0].style.display = "none";
  }
}
window.addEventListener("scroll", showFixedButtons);
