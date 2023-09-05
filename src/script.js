// Get input elements
const dayInput = document.getElementById("dayInput");
const monthInput = document.getElementById("monthInput");
const yearInput = document.getElementById("yearInput");
const yearOutput = document.getElementById("yearOutput");
const monthOutput = document.getElementById("monthOutput");
const dayOutput = document.getElementById("dayOutput");
const btn = document.getElementById("btn");

function calculateAge() {
  const inputDay = parseInt(dayInput.value, 10);
  const inputMonth = parseInt(monthInput.value, 10);
  const inputYear = parseInt(yearInput.value, 10);

  if (isNaN(inputDay) || isNaN(inputMonth) || isNaN(inputYear)) {
    yearOutput.textContent = "- -";
    monthOutput.textContent = "- -";
    dayOutput.textContent = "- -";
  } else {
    const currentDate = new Date();
    const currentYear = currentDate.getFullYear();
    const currentMonth = currentDate.getMonth() + 1;
    const currentDay = currentDate.getDate();

    let years = currentYear - inputYear;
    let months = currentMonth - inputMonth;
    let days = currentDay - inputDay;

    if (days < 0) {
      months -= 1;
      days += 30;
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

btn.addEventListener("click", (e) => {
  e.preventDefault();

  calculateAge();
});
