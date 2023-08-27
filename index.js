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


function checkDayError(day, month) {
  if (!day) {
    dayEmptyError.style.display = "block";
    addErrorClass();
    return true;
  } else if (day < 1 || day > 31) {
    dayRangeError.style.display = "block";
    addErrorClass();
    return true;
  } else if (
    (month == 2 && day > 28) || 
    ((month == 4 || month == 6 || month == 9 || month == 11) && day > 30)
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


function checkMonthError(month) {
  if (!month) {
    monthEmptyError.style.display = "block";
    addErrorClass();
    return true;
  } else if (month < 1 || month > 12) {
    monthRangeError.style.display = "block"
    addErrorClass();
    return true;
  }  else {
    monthEmptyError.style.display = "none";
    monthRangeError.style.display = "none";
    return false;
  }
}


function checkYearError(year) {
  if (!year) {
    yearEmptyError.style.display = "block";
    addErrorClass();
    return true;
  } else if (year < 1900 || year > 2099) {
    yearRangeError.style.display = "block";
    addErrorClass();
    return true;
  }  else {
    yearEmptyError.style.display = "none";
    yearRangeError.style.display = "none";
    return false;
  }
}