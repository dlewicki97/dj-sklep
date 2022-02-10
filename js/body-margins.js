window.onload = () => {
  let marginLeft = document.querySelector(".margin-left");
  let marginRight = document.querySelector(".margin-right");
  let bodyHeight = document.body.getBoundingClientRect().height;

  setMarginsHeight();

  function setMarginsHeight() {
    console.log(bodyHeight);
    marginLeft.style.height = bodyHeight + "px";
    marginRight.style.height = bodyHeight + "px";
  }

  window.onresize = () => setMarginsHeight();
};
