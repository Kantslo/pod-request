document.getElementById("myForm").addEventListener("submit", function (event) {
  event.preventDefault();

  const emailInput = document.getElementById("email").value;

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!emailPattern.test(emailInput)) {
    document.getElementById("error").style.visibility = "visible";
  } else {
    document.getElementById("error").style.visibility = "hidden";

    console.log("Submitted email:", emailInput);
  }
});
