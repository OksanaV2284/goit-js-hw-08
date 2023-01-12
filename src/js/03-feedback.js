import throttle from 'lodash.throttle';
const KEY_LOCAL = 'feedback-form-state';
const form = document.querySelector('.feedback-form');
const rest = {
  textarea: document.querySelector('textarea'),
  input: document.querySelector('input'),
};

const formData = {
  email: '',
  message: '',
};

form.addEventListener('input', throttle(onTextInput, 500));
populateTextarea();
form.addEventListener('submit', onFormSubmit);
function onTextInput(e) {
  formData[e.target.name] = e.target.value;
  localStorage.setItem(KEY_LOCAL, JSON.stringify(formData));
}

function onFormSubmit(evt) {
  evt.preventDefault();
  const {
    elements: { email, message },
  } = evt.currentTarget;
  if (!email.value || !message.value) {
    alert('Всі поля повинні бути заповнені!');
  }
  evt.currentTarget.reset();
  localStorage.removeItem(KEY_LOCAL);
  console.log(formData);
}
function populateTextarea() {
  const savedMessege = JSON.parse(localStorage.getItem(KEY_LOCAL));

  if (savedMessege) {
    const dsds = JSON.stringify(savedMessege.email);
    const mas = JSON.stringify(savedMessege.message);

    rest.textarea.value = JSON.parse(mas);
    rest.input.value = JSON.parse(dsds);
  }
}
