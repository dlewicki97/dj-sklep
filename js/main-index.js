document.addEventListener("mouseover", (e) => {
  let $windowWidth = $(window).width();
  if (lightboxOpen()) return;
  if ($windowWidth >= 992) {
    if (e.clientX >= 301) {
      let subcategories = [...document.getElementsByClassName("subcategories")];
      let producentsDropdown = document
        .getElementsByClassName("producents-dropdown")[0]
        .getElementsByClassName("cart")[0]
        .classList.contains("active");
      if (
        subcategories.some((sub) => sub.classList.contains("active")) ||
        producentsDropdown
      ) {
        // document.getElementsByTagName("main")[0].style.zIndex = "-1";
      } else {
        // document.getElementsByTagName("main")[0].style.zIndex = "unset";
      }
    } else {
      // document.getElementsByTagName("main")[0].style.zIndex = "-1";
    }
  }
});

function lightboxOpen() {
  return document.getElementById("myModal")?.style.display == "block";
}
