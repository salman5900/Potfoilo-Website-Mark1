var typed = new Typed(".dynamic", {
  strings: ["Salman Ahamed", "Devloper", "Desginer", "Freelancer"],
  typeSpeed: 150,
  backSpeed: 150,
  loop: true,
});

// Popup functionality
// vitual coloumn popup
/// Get DOM elements
const openBtn = document.getElementById("openPopup");
const closeBtn = document.getElementById("closePopup");
const modal = document.getElementById("popupModal");

// Open modal
openBtn.addEventListener("click", (e) => {
  e.preventDefault(); // Prevent default action of the button
  modal.style.display = "flex"; // Use flex to center content
});

// Close modal
closeBtn.addEventListener("click", () => {
  modal.style.display = "none";
});

// Optional: Close on outside click
window.addEventListener("click", (e) => {
  if (e.target === modal) {
    modal.style.display = "none";
  }
});

// hybrid popup
// Get new DOM elements
const openPopup2 = document.getElementById("openPopup2");
const closePopup2 = document.getElementById("closePopup2");
const popupModal2 = document.getElementById("popupModal2");

// Open the modal
openPopup2.addEventListener("click", (e) => {
  e.preventDefault();
  popupModal2.style.display = "flex";
});

// Close the modal
closePopup2.addEventListener("click", () => {
  popupModal2.style.display = "none";
});

// Optional: Click outside to close
window.addEventListener("click", (e) => {
  if (e.target === popupModal2) {
    popupModal2.style.display = "none";
  }
});

// inPerson popup
// Get DOM elements for popup 3
const openPopup3 = document.getElementById("openPopup3");
const closePopup3 = document.getElementById("closePopup3");
const popupModal3 = document.getElementById("popupModal3");

// Open popup 3
openPopup3.addEventListener("click", (e) => {
  e.preventDefault();
  popupModal3.style.display = "flex";
});

// Close popup 3
closePopup3.addEventListener("click", () => {
  popupModal3.style.display = "none";
});

// Close on outside click for popup 3
window.addEventListener("click", (e) => {
  if (e.target === popupModal3) {
    popupModal3.style.display = "none";
  }
});
