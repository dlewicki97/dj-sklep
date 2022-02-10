$(document).ready(function () {
  setTableRowMainsHeight();
  function setTableRowMainsHeight() {
    let mains = document.querySelectorAll(".comparison-table .main");
    let maxHeight = 0;
    mains.forEach((main) => {
      let height = main.getBoundingClientRect().height;
      if (height > maxHeight) maxHeight = height;
    });
    mains.forEach((main) => {
      main.style.height = `${maxHeight}px`;
    });
  }

  window.addEventListener("resize", setTableRowMainsHeight);
});
