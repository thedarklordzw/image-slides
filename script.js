const nextBtn = document.getElementById('next');
const line1 = document.getElementById('line-1');
const step2 = document.getElementById('step-2');

let activeElNumber;

const steps = document.querySelectorAll('.step');
const stepsArr = Array.from(steps);

nextBtn.addEventListener('click', () => {
  const activeElement = stepsArr.find(element =>
    element.classList.contains('active')
  );

  activeElNumber = activeElement.textContent - 1;

  stepsArr.forEach((element, i) => {
    element.classList.remove('active');
  });

  if (activeElNumber < stepsArr.length) {
    stepsArr[activeElNumber + 1].classList.add('active');
  } else return;

  line1.classList.add('active-line');
});
