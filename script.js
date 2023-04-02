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
  background.style.filter = 'blur(' + map(load, 0, 100, 70, 0) + 'px)';

  // if (textOpacity >= 0) {
  //   blur = '0px';
  // }

  // if (textOpacity >= 0.75) {
  //   blur = '17.5px';
  // }
  // if (textOpacity >= 0.5) {
  //   blur = '35px';
  // }
  // if (textOpacity >= 0.25) {
  //   blur = '52.5px';
  // }

  // background.style.filter = `blur(${blur})`;
};

let int = setInterval(blurring, 30);
