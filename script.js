const searchBtn = document.querySelector('.search');
const textField = document.querySelector('.text');
const formElement = document.querySelector('.form');

formElement.addEventListener('submit', event => {
  event.preventDefault();
  textField.classList.toggle('active');
  textField.classList.toggle('text');
});
