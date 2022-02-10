$(document).ready(function () {
  let owl = $(".owl-carousel").owlCarousel({
    items: 5,
    dots: false,
    nav: false,
    rewind: false,
  });

  document.querySelector(".carousel-arrow.prev").onclick = () => {
    owl.trigger("prev.owl.carousel");
  };
  document.querySelector(".carousel-arrow.next").onclick = () => {
    owl.trigger("next.owl.carousel");
  };
});
let magnifyInit = false;
// Open the Modal
function openModal() {
  document.getElementById("myModal").style.display = "block";
  if (!magnifyInit) {
    magnify("modal-main-photo", 2);
    magnifyInit = true;
  }
}

// Close the Modal
function closeModal() {
  document.getElementById("myModal").style.display = "none";
}

var slideIndex = 1;
// showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides((slideIndex += n));
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides((slideIndex = n));
}

function showSlides(n) {
  var i;
  var slide = document.getElementsByClassName("mySlides")[0];
  var dots = document.getElementsByClassName("demo");
  if (n > dots.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = dots.length;
  }

  for (i = 0; i < dots.length; i++) {
    dots[i].classList.remove("active");
  }
  document.querySelector(".slide-number").innerHTML = n;
  slide.querySelector("img").src = dots[slideIndex - 1].getAttribute(
    "data-src"
  );
  document.querySelector(
    ".img-magnifier-glass"
  ).style.backgroundImage = `url('${dots[slideIndex - 1].getAttribute(
    "data-src"
  )}')`;
  dots[slideIndex - 1].classList.add("active");
}
