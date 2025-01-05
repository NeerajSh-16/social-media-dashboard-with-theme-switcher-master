// Get the toggle switch element
const slider = document.getElementById("toggle-switch");

// Function to toggle the dark theme
function toggleDarkTheme() {
    document.body.classList.toggle("dark-theme");
}

// Add event listener to the slider
slider.addEventListener("click", toggleDarkTheme);
