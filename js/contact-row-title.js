function setTitlesWidth() {
  let titles = document.querySelectorAll(".contact-row .title");
  let titleMaxWidth = 0;
  titles.forEach((title) => {
    let width = title.getBoundingClientRect().width;
    if (width > titleMaxWidth) titleMaxWidth = width;
  });
  titles.forEach((title, i) => {
    titles[i].style.width = titleMaxWidth + "px";
  });
}
setTitlesWidth();

window.addEventListener("resize", setTitlesWidth);
