const form = document.getElementById("date--form");

const dayRangeError = document.getElementById("day--error");
const dayEmptyError = document.getElementById("day--empty");
const aprilError = document.getElementById("april--error");

const monthEmptyError = document.getElementById("month--empty");
const monthRangeError = document.getElementById("month--error");

const yearRangeError = document.getElementById("year--error");
const yearEmptyError = document.getElementById("year--empty");

const errorLabel = document.querySelectorAll(".error--label");
const errorInput = document.querySelectorAll(".error--input");

// Input value
const day = document.getElementById("day--input").value;
const month = document.getElementById("month--input").value;
const year = document.getElementById("year--input").value;


// form
form.addEventListener("submit", (event) => {
  event.preventDefault();
  let hasError = false;

  // reset error
  dayEmptyError.style.display = "none";
  monthEmptyError.style.display = "none";
  yearEmptyError.style.display = "none";

  hasError = checkDayError(day) || checkMonthError(month) || checkYearError(year);

  if(!hasError) {
    removeErrorClass();
  }
});


function checkDayError(value) {
  if (!value) {
    dayEmptyError.style.display = "block";
    addErrorClass();
    return true;
  } else if (value < 1 || value > 31) {
    dayRangeError.style.display = "block"
    addErrorClass();
    return true;
  }  else {
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
    return false;
  }
}


function checkYearError(value) {
  if (!value) {
    yearEmptyError.style.display = "block";
    addErrorClass();
    return true;
  } else if (value < 1900 || value > 2099) {
    yearRangeError.style.display = "block"
    addErrorClass();
    return true;
  }  else {
    return false;
  }
}