const form = document.getElementById("date--form");

const dayRangeError = document.getElementById("day--error");
const dayEmptyError = document.getElementById("day--empty");
const invalidDay = document.getElementById("invalid--day");

const monthEmptyError = document.getElementById("month--empty");
const monthRangeError = document.getElementById("month--error");

const yearRangeError = document.getElementById("year--error");
const yearEmptyError = document.getElementById("year--empty");

const errorLabel = document.querySelectorAll(".error--label");
const errorInput = document.querySelectorAll(".error--input");


// form
form.addEventListener("submit", (event) => {
  event.preventDefault();
  let hasError = false;


  // Input value
  const day = document.getElementById("day--input").value;
  const month = document.getElementById("month--input").value;
  const year = document.getElementById("year--input").value;

  // reset error
  dayEmptyError.style.display = "none";
  monthEmptyError.style.display = "none";
  yearEmptyError.style.display = "none";

  hasError = checkDayError(day, month);
  hasError = checkMonthError(month);
  hasError = checkYearError(year);

  if(!hasError) {
    removeErrorClass();
  }
});


function checkDayError(value, month) {
  if (!value) {
    dayEmptyError.style.display = "block";
    addErrorClass();
    return true;
  } else if (value < 1 || value > 31) {
    dayRangeError.style.display = "block";
    addErrorClass();
    return true;
  } else if (
    (month == 2 && value > 28) || 
    ((month == 4 || month == 6 || month == 9 || month == 11) && value > 30)
    ) {
    invalidDay.style.display = "block";
    dayRangeError.style.display = "none";
    dayEmptyError.style.display = "none";
    return true;
  } else {
    dayEmptyError.style.display = "none";
    invalidDay.style.display = "none";
    dayRangeError.style.display = "none";
    return false;
  }
}


function addErrorClass() {
  errorLabel.forEach((element) => {
    element.classList.add("error");
  });

  errorInput.forEach((element) => {
    element.classList.add("error");
  });
}


function removeErrorClass() {
  errorLabel.forEach((element) => {
    element.classList.remove("error");
  });

  errorInput.forEach((element) => {
    element.classList.remove("error");
  });

  dayEmptyError.style.display = "none";
  monthEmptyError.style.display = "none";
  yearEmptyError.style.display = "none";
}


function checkMonthError(value) {
  if (!value) {
    monthEmptyError.style.display = "block";
    addErrorClass();
    return true;
  } else if (value < 1 || value > 12) {
    monthRangeError.style.display = "block"
    addErrorClass();
    return true;
  }  else {
    monthEmptyError.style.display = "none";
    monthRangeError.style.display = "none";
    return false;
  }
}


function checkYearError(value) {
  if (!value) {
    yearEmptyError.style.display = "block";
    addErrorClass();
    return true;
  } else if (value < 1900 || value > 2099) {
    yearRangeError.style.display = "block";
    addErrorClass();
    return true;
  }  else {
    yearEmptyError.style.display = "none";
    yearRangeError.style.display = "none";
    return false;
  }
}