import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');
const rest = {
  messageText: document.querySelector('textarea'),
  emailInput: document.querySelector('input'),
};
const KEY_LOCAL = 'feedback-form-state';
populateTextarea();
form.addEventListener('input', throttle(onTextInput, 500));

form.addEventListener('submit', onFormSubmit);

function onTextInput(e) {
  const formData = {
    email: this.email.value,
    message: this.message.value,
  };

  localStorage.setItem(KEY_LOCAL, JSON.stringify(formData));
}

function populateTextarea() {
  try {
    const savedMessege = JSON.parse(localStorage.getItem(KEY_LOCAL));

    if (savedMessege) {
      rest.emailInput.value = savedMessege.email;
      rest.messageText.value = savedMessege.message;
    }
  } catch (error) {
    console.error('Get state error', error.message);
  }
}
function onFormSubmit(evt) {
  evt.preventDefault();
  console.log({ email: this.email.value, message: this.message.value });
  localStorage.removeItem(KEY_LOCAL);
  form.reset();
}
