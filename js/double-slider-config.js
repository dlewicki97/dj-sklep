$(document).ready(function () {
  let minValue = 0;
  let max = 8250;
  let slider = document.getElementById("price-slider");

  noUiSlider.create(slider, {
    start: [992, 5450],
    connect: true,
    range: {
      min: minValue,
      max: max,
    },
    step: 1,
    format: wNumb({
      decimals: 0,
    }),
    ariaFormat: wNumb({
      decimals: 0,
      suffix: " zł",
    }),
  });

  let inputMin = document.getElementById("price-range-min");
  let inputMax = document.getElementById("price-range-max");

  slider.noUiSlider.on("update", function (values, handle) {
    let value = values[handle];
    if (handle === 0) {
      /*min*/ inputMin.value = value + " zł";
      showProducts(inputMin.value, inputMax.value);
    } else {
      inputMax.value = value + " zł";
      showProducts(inputMin.value, inputMax.value);
    }
  });

  function showProducts(min, max) {
    min = parseInt(min);
    max = parseInt(max);
    let products = document.getElementsByClassName("product-container");
    products.forEach((product) => {
      let price = product.getElementsByClassName("product-price")[0].innerText;
      price = price.replace(" ", "");
      price = parseInt(price);
      if (price >= min && price <= max) {
        product.style.display = "flex";
      } else {
        product.style.display = "none";
      }
    });
  }

  inputMin.addEventListener("change", function () {
    slider.noUiSlider.setHandle(0, this.value);
  });

  inputMax.addEventListener("change", function () {
    slider.noUiSlider.setHandle(1, this.value);
  });
});
