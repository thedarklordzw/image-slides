const button = document.querySelector('.btn');
const rectangle = document.querySelector('.rectangle');

button.addEventListener('click', () => {
  rectangle.classList.add('active');
});
