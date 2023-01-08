const form = document.querySelector('.feedback-form');
const formData = {
  email: '',
  password: '',
};
form.addEventListener('submit', listeningFormFillEvents);
function listeningFormFillEvents(evn) {
  evn.preventDefault();
  const {
    elements: { email, password },
  } = evn.currentTarget;
  if (!email.value || !password.value) {
    alert('Всі поля повинні бути заповнені!');
  }
  formData.email = email.value;

  formData.password = password.value;
  evn.currentTarget.reset();
  return console.log(formData);
}
