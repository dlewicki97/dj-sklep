var inputLeft = document.getElementById("input-left");
var inputRight = document.getElementById("input-right");

var thumbLeft = document.querySelector(".slider > .thumb.left");
var thumbRight = document.querySelector(".slider > .thumb.right");
var range = document.querySelector(".slider > .range");

function getOffset(value) {
  if (value <= 4) return value;
  else if (value > 4 && value <= 20) return value + 1;
  else if (value > 20 && value <= 40) return value + 2;
  else if (value > 40 && value <= 60) return value + 3;
  else if (value > 60 && value <= 80) return value + 4;
  else if (value > 80 && value <= 100) return value + 5;
}

function setLeftValue() {
  var _this = inputLeft,
    min = parseInt(_this.min),
    max = parseInt(_this.max);
  console.log(min, max);
  _this.value = Math.min(parseInt(_this.value), parseInt(inputRight.value));

  var percent = ((_this.value - min) / (max - min)) * 100;

  thumbLeft.style.left = getOffset(percent) + "%";
  range.style.left = percent + "%";
  if (percent > 95) inputLeft.style.zIndex = 3;
  else inputLeft.style.zIndex = 2;
  document.getElementsByClassName("left-input-value")[0].innerHTML =
    _this.value + " zł";
}
setLeftValue();

function setRightValue() {
  var _this = inputRight,
    min = parseInt(_this.min),
    max = parseInt(_this.max);

  _this.value = Math.max(parseInt(_this.value), parseInt(inputLeft.value));

  var percent = ((_this.value - min) / (max - min)) * 100;

  thumbRight.style.right = 100 - getOffset(percent) + "%";
  range.style.right = 100 - getOffset(percent) + "%";
  document.getElementsByClassName("right-input-value")[0].innerHTML =
    _this.value + " zł";
}
setRightValue();

inputLeft.addEventListener("input", setLeftValue);
inputRight.addEventListener("input", setRightValue);

inputLeft.addEventListener("mouseover", function() {
  thumbLeft.classList.add("hover");
});
inputLeft.addEventListener("mouseout", function() {
  thumbLeft.classList.remove("hover");
});
inputLeft.addEventListener("mousedown", function() {
  thumbLeft.classList.add("active");
});
inputLeft.addEventListener("mouseup", function() {
  thumbLeft.classList.remove("active");
});

inputRight.addEventListener("mouseover", function() {
  thumbRight.classList.add("hover");
});
inputRight.addEventListener("mouseout", function() {
  thumbRight.classList.remove("hover");
});
inputRight.addEventListener("mousedown", function() {
  thumbRight.classList.add("active");
});
inputRight.addEventListener("mouseup", function() {
  thumbRight.classList.remove("active");
});
