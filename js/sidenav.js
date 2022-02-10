$(document).ready(function () {
  $(".button-collapse").sideNav({
    menuWidth: 300,
  });
  let customScrollbars = document.querySelectorAll(".custom-scrollbar");
  customScrollbars.forEach((scrollbar) => new PerfectScrollbar(scrollbar));
});

$(document).ready(function () {
  let isOpen = true;
  let $windowWidth = $(window).width();
  const $btnCollapse = $(".button-collapse");
  const $content = $("#content");
  if ($windowWidth >= 993) {
    $btnCollapse.click();
    $("#sidenav-overlay").css("display", "none");
  }
  $(window).resize(function () {
    $windowWidth = $(window).width();
    if ($windowWidth > 992) {
      isOpen = true;

      $content.css("padding-left", "250px");
    } else if ($windowWidth <= 992 && isOpen) {
      $content.css("padding-left", "0");
    } else {
      if (!isOpen) {
        $content.css("padding-left", "0");
      }
    }
  });

  $btnCollapse.on("click", () => {
    isOpen = !isOpen;
    if ($windowWidth >= 993) {
      const elPadding = isOpen ? "250px" : "0";
      $btnCollapse.css("left", elPadding);
      $content.css("padding-left", elPadding);
      $("#sidenav-overlay").css("display", "none");
    } else {
      $("#sidenav-overlay").css("display", "block");
    }
  });
});

let category_li = [...document.getElementsByClassName("category-li")];
category_li.forEach((li) => {
  let $windowWidth = $(window).width();
  if ($windowWidth < 993) {
    li.addEventListener("click", (e) => {
      let drop = li.querySelector(".subcategories-drop");
      if (li.classList.contains("active")) {
        drop?.classList.add("active");
      } else {
        drop?.classList.remove("active");
      }
    });
  } else {
    let drop = li.querySelector(".subcategories-drop");
    if (drop == null) return;
    li.addEventListener("mouseover", (e) => {
      let subcategory = li.getElementsByClassName("subcategories")[0];
      drop.classList.add("active");
      subcategory.classList.add("active");
    });
    li.addEventListener("mouseout", (e) => {
      if (!e.toElement.classList.contains("subcategories-drop")) {
        li.getElementsByClassName("subcategories-drop")[0].classList.remove(
          "active"
        );
        li.getElementsByClassName("subcategories")[0].classList.remove(
          "active"
        );
      }
    });
  }
});

document.querySelector(".main-scrollbar").addEventListener("click", (e) => {
  category_li.forEach((li) => {
    if (e.target == li || e.target == li.querySelector(".subcategories"))
      return;
    li.classList.remove("active");
    li.querySelector(".subcategories").classList.remove("active");
    let drop = li.querySelector(".subcategories-drop");
    if (drop != null) drop.classList.remove("active");
  });
});
