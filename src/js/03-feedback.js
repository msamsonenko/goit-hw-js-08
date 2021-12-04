import throttle from 'lodash.throttle';

const STORAGE_KEY = 'feedback-form-state';

const userMessage = {};
const form = document.querySelector('.feedback-form');

form.addEventListener('input', throttle(handleUserInput, 500));

form.addEventListener('submit', handleFormSubmit);
populateForm();

function handleFormSubmit(e) {
  e.preventDefault();
  console.log(JSON.parse(localStorage.getItem(STORAGE_KEY)));
  e.currentTarget.reset();
  localStorage.clear();
}

function handleUserInput(e) {
  userMessage[e.target.name] = e.target.value;
  localStorage.setItem(STORAGE_KEY, JSON.stringify(userMessage));
}

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
