let counterValue = 0;

const counterDisplay = document.getElementById("counterValue");
const increaseButton = document.getElementById("increase");
const decreaseButton = document.getElementById("decrease");
const resetButton = document.getElementById("reset");
const messageSpan = document.getElementById("message");


function updateDisplay() {
  counterDisplay.textContent = counterValue;


  if (counterValue <= 0) {
    decreaseButton.disabled = true;
  } else {
    decreaseButton.disabled = false;
  }

  // "Free Shipping" message at 10 and hide below 10 or above 19
  if (counterValue === 10) {
    messageSpan.textContent = "You have free shipping!";
  } else if (counterValue < 10 || counterValue > 19) {
    messageSpan.textContent = "";
  }

  // Change increase button color to red at 20 and display "Out of Stock" message
  if (counterValue === 20) {
    increaseButton.style.backgroundColor = "#e74c3c";
    messageSpan.textContent = "Out of stock";
  } else if (counterValue < 20) {
    increaseButton.style.backgroundColor = "#2ecc71";
  }
}

// Increase counter
increaseButton.addEventListener("click", () => {
  if (counterValue < 20) {
    counterValue++;
    updateDisplay();
  }
});

// Decrease counter
decreaseButton.addEventListener("click", () => {
  if (counterValue > 0) {
    counterValue--;
    updateDisplay();
  }
});

// Reset counter
resetButton.addEventListener("click", () => {
  counterValue = 0;
  updateDisplay();
});


updateDisplay();