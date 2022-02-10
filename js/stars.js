let modalStars = document.getElementsByClassName("modal-stars")[0];
let stars = modalStars.getElementsByClassName("star");

stars.forEach((star, i) => {
  star.addEventListener("mouseover", () => {
    for (let j = 0; j < i + 1; j++) stars[j].src = "img/star-filled.svg";
  });
  star.addEventListener("mouseout", () => {
    for (
      let j = 4;
      j >= parseInt(document.getElementById("stars-value").value);
      j--
    ) {
      stars[j].src = "img/star-outline.svg";
    }
  });
  star.addEventListener("click", () => {
    fillStars(i);
  });
});

function fillStars(starIndex) {
  document.getElementById("stars-value").value = starIndex + 1;
  let outerStars = document
    .getElementsByClassName("outer-stars")[0]
    .getElementsByClassName("star");
  outerStars.forEach((star) => (star.src = "img/star-grey.svg"));
  for (let i = 0; i < starIndex + 1; i++) {
    stars[i].src = "img/star-filled.svg";
    outerStars[i].src = "img/star-filled.svg";
  }
}
