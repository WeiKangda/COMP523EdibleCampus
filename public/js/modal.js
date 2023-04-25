function setCookie(name, value, days) {
  const date = new Date();
  date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
  const expires = "; expires=" + date.toUTCString();
  document.cookie = name + "=" + value + expires + "; path=/";
}

function getCookie(name) {
  const nameEQ = name + "=";
  const ca = document.cookie.split(';');
  for (let i = 0; i < ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) === ' ') c = c.substring(1, c.length);
    if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length, c.length);
  }
  return null;
}

function checkFirstVisitAndShowModal() {
  const visitedBefore = getCookie("visitedBefore");
  if (!visitedBefore) {
    setCookie("visitedBefore", "true", 30); // Set a cookie to expire in 30 days
    modal.style.display = "block"; // Show the modal
  }
}

// Get the modal
const modal = document.getElementById("instructionsModal");

// Get the logo and the close button
const logo = document.querySelector("#navbar img");
const closeButton = document.querySelector(".close");

// Open the modal when the logo is clicked
logo.onclick = function () {
  modal.style.display = "block";
};

// Close the modal when the close button is clicked
closeButton.onclick = function () {
  modal.style.display = "none";
};

// Close the modal when the user clicks outside of it
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};

window.onload = function () {
  checkFirstVisitAndShowModal();
};