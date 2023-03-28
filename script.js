const progress = document.getElementById('progress');
const prevBtn = document.getElementById('prev');
const nextBtn = document.getElementById('next');
const circles = document.querySelectorAll('.circle');

let currentActive = 1;

const update = () => {
  if (currentActive > 1) {
    prevBtn.disabled = false;
  }

  if (currentActive === 1) {
    prevBtn.disabled = true;
    nextBtn.disabled = false;
  }

  if (currentActive === circles.length) {
    nextBtn.disabled = true;
  }

  circles.forEach((circle, index) => {
    // circle.classList.remove('active');

    if (index < currentActive) {
      circle.classList.add('active');
    } else {
      circle.classList.remove('active');
    }
  });

  const actives = document.querySelectorAll('.active');

  const fraction = ((actives.length - 1) / (circles.length - 1)) * 100;
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

  console.log(currentActive);

  update();
});
