function changeProductsView(type) {
  let products = document.getElementsByClassName("products")[0];
  if (type === "rows") {
    products.classList.remove("columns");
  } else if (type === "columns") {
    products.classList.add("columns");
  }
}

$(function () {
  var $h3s = $(".change-view-container").click(function () {
    $h3s.removeClass("active");
    $(this).addClass("active");
  });
});
