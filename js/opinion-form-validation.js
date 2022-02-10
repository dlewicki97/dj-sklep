let opinionForm = document.getElementById("opinion-form");
opinionForm.addEventListener("submit", (e) => {
  e.preventDefault();
  if (parseInt(document.getElementById("stars-value").value) == 0)
    alert("Nie wybrano ani jednej gwiazdki!");
  else opinionForm.submit();
});
