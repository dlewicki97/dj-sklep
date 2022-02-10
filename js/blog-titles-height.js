function setBlogTitles() {
  let titles = document.querySelectorAll(".blog-listing-title");
  let maxHeight = 0;
  titles.forEach((title) => {
    let height = title.getBoundingClientRect().height;
    if (height > maxHeight) maxHeight = height;
  });
  console.log(maxHeight);
  titles.forEach((title) => {
    title.style.height = `${maxHeight}px`;
  });
}
setBlogTitles();

window.addEventListener("resize", setBlogTitles);
