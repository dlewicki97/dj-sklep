[...document.getElementsByTagName("p")].forEach((p) => {
  if (p.innerText == "") p.style.height = ".8rem";
});
