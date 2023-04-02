const loadingText = document.querySelector('.loading-text');
const background = document.querySelector('.bg');

let load = 0;
let blur = '70px';

const map = function (num, in_min, in_max, out_min, out_max) {
  return ((num - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min;
};

const blurring = () => {
  load++;

  if (load > 99) {
    clearInterval(int);
  }

  // code  runs always
  loadingText.innerHTML = `${load}%`;

  const value = load / 100;
  const textOpacity = value === 0 ? 1 : value === 1 ? 0 : 1 - value;

  console.log(map(load, 0, 100, 70, 0));

  loadingText.style.opacity = textOpacity;
  background.style.filter = 'blur(' + map(load, 0, 100, 30, 0) + 'px)';
};

let int = setInterval(blurring, 30);
