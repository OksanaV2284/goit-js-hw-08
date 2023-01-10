import throttle from 'lodash.throttle';
const KEY = 'feedback-form-state';
const form = document.querySelector('.feedback-form');
const formData = {
  email: '',
  message: '',
};
form.addEventListener('input', listeningFormFillEvents);
form.addEventListener('submit', listEvents);

// function listeningFormFillEvents(evn) {
//   evn.preventDefault();
//   const {
//     elements: { email, password },
//   } = evn.currentTarget;
//   if (!email.value || !password.value) {
//     alert('Всі поля повинні бути заповнені! ');
//   }
//   formData.email = email.value;

//   formData.password = password.value;
//   evn.currentTarget.reset();
//   return console.log(formData);
// }
function listeningFormFillEvents(evn) {
  evn.preventDefault();
  const {
    elements: { email, message },
  } = evn.currentTarget;
  if (email.value || password.value) {
    localStorage.setItem(KEY_LOCAL, email.value);
  }
  formData.email = email.value;

  formData.password = password.value;
  evn.currentTarget.reset();
  return console.log(formData);
}
