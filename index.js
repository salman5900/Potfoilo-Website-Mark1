var typed = new Typed(".dynamic", {
  strings: ["Salman Ahamed", "Devloper", "Desginer", "Freelancer"],
  typeSpeed: 150,
  backSpeed: 150,
  loop: true,
});

// Popup functionality
// Select all buttons that open the popup
const openBtns = document.querySelectorAll(".openPopup");
// Select all modals
const popups = document.querySelectorAll(".popupModal");
// Select all close buttons
const closeBtns = document.querySelectorAll(".closePopup");

// Function to open the modal
openBtns.forEach((button) => {
  button.addEventListener("mousedown", (e) => {
    e.preventDefault(); // Prevent the default action to avoid flicker
    // Get the modal id from the data-target attribute
    const modalId = button.getAttribute("data-target");
    const targetModal = document.querySelector(modalId);

    // Ensure the modal is displayed immediately
    targetModal.classList.add("show");
  });
});

// Function to close the modal
closeBtns.forEach((button) => {
  button.addEventListener("click", () => {
    const popup = button.closest(".popupModal");
    popup.classList.remove("show");
  });
});

// Close the modal when clicking outside
window.addEventListener("click", (e) => {
  popups.forEach((popup) => {
    if (e.target === popup) {
      // Close the modal if the background is clicked
      popup.classList.remove("show");
    }
  });
});
