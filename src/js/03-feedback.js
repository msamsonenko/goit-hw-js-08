import throttle from 'lodash.throttle';
//storage key name
const STORAGE_KEY = 'feedback-form-state';
//an empty object for storing input fields values
let userMessage = {};
//get access to to form elelement
const form = document.querySelector('.feedback-form');
//handling form input values update
form.addEventListener('input', throttle(handleUserInput, 500));
//handling form submit
form.addEventListener('submit', handleFormSubmit);
populateForm();
//on form submit, prevents default behaviour,
//shows the saved object in console,
//clears form input fields,
//and clears local storage
function handleFormSubmit(e) {
  e.preventDefault();
  console.log(JSON.parse(localStorage.getItem(STORAGE_KEY)));
  e.currentTarget.reset();
  userMessage = {};
  localStorage.clear();
}
//on input value update, creates/updates key/value of the userMessage obj,
//and saves data to local storage
function handleUserInput(e) {
  userMessage[e.target.name] = e.target.value;
  localStorage.setItem(STORAGE_KEY, JSON.stringify(userMessage));
}
//on page load checks if local storage has data, and populates it to form fields if true
function populateForm() {
  const formInputsData = localStorage.getItem(STORAGE_KEY);

  if (formInputsData) {
    const input = document.querySelector('input');
    const textarea = document.querySelector('textarea');

    const { email, message } = JSON.parse(formInputsData);

    input.value = email;
    textarea.value = message;
  }
}
