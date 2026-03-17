// Get elements from the DOM
const billInput = document.getElementById("billAmount");
const tipSelect = document.getElementById("tipPercentage");
const totalDisplay = document.getElementById("totalAmount");
const themeToggle = document.getElementById("themeToggle");
const themeLabel = document.getElementById("themeLabel");
const form = document.querySelector(".calculator");

// Function to calculate the tip and total amount
function calculateTotal(event) {
  // Prevent the form from submitting
  event.preventDefault();

  // Stop if either input is empty
  if (billInput.value === "" || tipSelect.value === "") {
    totalDisplay.innerText = "Total: Please enter both numbers";
    return;
  }

  // Get the bill amount and tip percentage from the inputs
  let bill = Number(billInput.value);
  let tip = Number(tipSelect.value);

  // Stop if either input is not a valid number
  if (isNaN(bill) || isNaN(tip)) {
    totalDisplay.innerText = "Total: Please enter valid numbers";
    return;
  }

  // Stop if the numbers are negative
  if (bill < 0 || tip < 0) {
    totalDisplay.innerText = "Total: Numbers cannot be negative";
    return;
  }

  // Calculate the total amount
  let total = bill + (bill * tip / 100);

  // Display the total amount with 2 decimal places
  totalDisplay.innerText = `Total: $${total.toFixed(2)}`;
}

// Function to toggle light/dark mode
function toggleTheme() {
  if (document.body.classList.contains("dark")) {
    document.body.classList.remove("dark");
    themeLabel.innerText = " Switch to Dark Mode";
  } else {
    document.body.classList.add("dark");
    themeLabel.innerText = " Switch to Light Mode";
  }
}

// Event listeners
form.addEventListener("submit", calculateTotal);
themeToggle.addEventListener("click", toggleTheme);
