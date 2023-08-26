const form = document.getElementById("date--form");

const dayError = document.getElementById("day--error");
const dayEmptyError = document.getElementById("day--empty");
const aprilError = document.getElementById("april--error");

const monthEmptyError = document.getElementById("month--empty");
const monthError = document.getElementById("month--error");

const yearError = document.getElementById("year--error");
const yearEmptyError = document.getElementById("year--empty");

const errorLabel = document.querySelectorAll(".error--label");
const errorInput = document.querySelectorAll(".error--input");


form.addEventListener("submit", (event) => {
  event.preventDefault();
  let hasError = false;

  const day = document.getElementById("day--input").value;
  const month = document.getElementById("month--input").value;
  const year = document.getElementById("year--input").value;

  hasError = checkEmptyField(day, dayEmptyError);
  hasError = checkEmptyField(month, monthEmptyError);
  hasError = checkEmptyField(year, yearEmptyError);

});


function checkEmptyField(value, error) {
  if(!value) {
    error.style.display = "block";
    addErrorClass();
    return true;
  } else {
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