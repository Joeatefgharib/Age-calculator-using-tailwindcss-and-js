// Get input elements
const dayInput = document.getElementById("dayInput");
const monthInput = document.getElementById("monthInput");
const yearInput = document.getElementById("yearInput");
const yearOutput = document.getElementById("yearOutput");
const monthOutput = document.getElementById("monthOutput");
const dayOutput = document.getElementById("dayOutput");
const btn = document.getElementById("btn");

// Function to calculate age
function calculateAge() {
  const inputDay = parseInt(dayInput.value, 10);
  const inputMonth = parseInt(monthInput.value, 10);
  const inputYear = parseInt(yearInput.value, 10);

  if (isNaN(inputDay) || isNaN(inputMonth) || isNaN(inputYear)) {
    // Invalid input, clear outputs
    yearOutput.textContent = "- -";
    monthOutput.textContent = "- -";
    dayOutput.textContent = "- -";
  } else {
    const currentDate = new Date();
    const currentYear = currentDate.getFullYear();
    const currentMonth = currentDate.getMonth() + 1; // Months are 0-indexed
    const currentDay = currentDate.getDate();

    let years = currentYear - inputYear;
    let months = currentMonth - inputMonth;
    let days = currentDay - inputDay;

    if (days < 0) {
      months -= 1;
      days += 30; // Assuming 30 days in a month for simplicity
    }

    if (months < 0) {
      years -= 1;
      months += 12;
    }

    yearOutput.textContent = years;
    monthOutput.textContent = months;
    dayOutput.textContent = days;
  }
}

// Event listener for button click
btn.addEventListener("click", calculateAge);
