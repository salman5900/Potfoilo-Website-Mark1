// Typed text
var typed = new Typed(".dynamic", {
  strings: ["Salman Ahamed", "Developer", "Designer", "Freelancer"],
  typeSpeed: 150,
  backSpeed: 150,
  loop: true,
});

// Popup functionality
// vitual coloumn popup
const openBtn = document.getElementById("openPopup");
const closeBtn = document.getElementById("closePopup");
const modal = document.getElementById("popupModal");

// Open modal
openBtn.addEventListener("click", (e) => {
  e.preventDefault();
  modal.style.display = "flex";
  setTimeout(() => modal.classList.add("show"), 10);
});

// Close modal
closeBtn.addEventListener("click", () => {
  modal.classList.remove("show");
  setTimeout(() => (modal.style.display = "none"), 300);
});

// Optional: Close on outside click
window.addEventListener("click", (e) => {
  if (e.target === modal) {
    modal.classList.remove("show");
    setTimeout(() => (modal.style.display = "none"), 300);
  }
});

// hybrid popup
const openPopup2 = document.getElementById("openPopup2");
const closePopup2 = document.getElementById("closePopup2");
const popupModal2 = document.getElementById("popupModal2");

// Open the modal
openPopup2.addEventListener("click", (e) => {
  e.preventDefault();
  popupModal2.style.display = "flex";
  setTimeout(() => popupModal2.classList.add("show"), 10);
});

// Close the modal
closePopup2.addEventListener("click", () => {
  popupModal2.classList.remove("show");
  setTimeout(() => (popupModal2.style.display = "none"), 300);
});

// Optional: Click outside to close
window.addEventListener("click", (e) => {
  if (e.target === popupModal2) {
    popupModal2.classList.remove("show");
    setTimeout(() => (popupModal2.style.display = "none"), 300);
  }
});

// inPerson popup
const openPopup3 = document.getElementById("openPopup3");
const closePopup3 = document.getElementById("closePopup3");
const popupModal3 = document.getElementById("popupModal3");

// Open popup 3
openPopup3.addEventListener("click", (e) => {
  e.preventDefault();
  popupModal3.style.display = "flex";
  setTimeout(() => popupModal3.classList.add("show"), 10);
});

// Close popup 3
closePopup3.addEventListener("click", () => {
  popupModal3.classList.remove("show");
  setTimeout(() => (popupModal3.style.display = "none"), 300);
});

// Close on outside click for popup 3
window.addEventListener("click", (e) => {
  if (e.target === popupModal3) {
    popupModal3.classList.remove("show");
    setTimeout(() => (popupModal3.style.display = "none"), 300);
  }
});
