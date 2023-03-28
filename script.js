const progress = document.getElementById('progress');
const prevBtn = document.getElementById('prev');
const nextBtn = document.getElementById('next');
const circles = document.querySelectorAll('.circle');

let currentActive = 1;

const update = () => {
  circles.forEach((circle, index) => {
    // circle.classList.remove('active');

    if (index < currentActive) {
      circle.classList.add('active');
    }
  });

  const actives = document.querySelectorAll('.active');
  console.log(actives.length, circles.length);

  const fraction = (actives.length / circles.length) * 100;
  progress.style.width = fraction + '%';
};

nextBtn.addEventListener('click', () => {
  currentActive++;

  if (currentActive > circles.length) {
    currentActive = circles.length;
  }

  update();
});

prevBtn.addEventListener('click', () => {
  currentActive--;

  if (currentActive < 1) {
    currentActive = 1;
  }

  update();
});
