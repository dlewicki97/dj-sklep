$(document).ready(function () {
  setAttributesHeight();
  function setAttributesHeight() {
    let attributes = document.querySelectorAll(".comparison-table .attribute");
    let maxHeight = 0;
    attributes.forEach((attribute) => {
      let height = attribute.getBoundingClientRect().height;
      if (height > maxHeight) maxHeight = height;
    });
    attributes.forEach((attribute) => {
      attribute.style.height = `${maxHeight}px`;
    });
  }

  window.addEventListener("resize", setAttributesHeight);
});
