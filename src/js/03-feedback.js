import throttle from 'lodash.throttle';

const pageForm = {
  form: document.querySelector('.feedback-form'),
  email: document.querySelector('.feedback-form input'),
  message: document.querySelector('.feedback-form textarea'),
};

const formDate = {};

const onInputForm = e => {
  formDate[e.target.name] = e.target.value;
  localStorage.setItem('feedback-form-state', JSON.stringify(formDate));
};

const onSubmitForm = e => {
  e.preventDefault();
  const submitValue = {
    email: pageForm.email.value,
    message: pageForm.message.value,
  };
  if (submitValue.email !== '' && submitValue.message !== '') {
    console.log(submitValue);
  }

  e.target.reset();
  localStorage.removeItem('feedback-form-state');
};

const addDateToLocalStorage = pageForm.form.addEventListener(
  'input',
  throttle(onInputForm, 500)
);
const submitForem = pageForm.form.addEventListener('submit', onSubmitForm);

const formInputValue = () => {
  const getDateFromLocalStorage = JSON.parse(
    localStorage.getItem('feedback-form-state')
  );
  if (getDateFromLocalStorage) {
    pageForm.email.value = getDateFromLocalStorage.email;
    pageForm.message.value = getDateFromLocalStorage.message;
  }
};

formInputValue();
