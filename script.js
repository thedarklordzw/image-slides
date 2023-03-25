// const image1 = document.getElementById('image-1');
// const image2 = document.getElementById('image-2');
// const image3 = document.getElementById('image-3');
// const image4 = document.getElementById('image-4');
// const image5 = document.getElementById('image-5');

// const headingImage1 = document.getElementById('snow');
// const headingImage2 = document.getElementById('skyline');
// const headingImage3 = document.getElementById('river');
// const headingImage4 = document.getElementById('trees');
// const headingImage5 = document.getElementById('mountain');

// const images = [image1, image2, image3, image4, image5];

// const headings = [
//   headingImage1,
//   headingImage2,
//   headingImage3,
//   headingImage4,
//   headingImage5,
// ];

// image1.addEventListener('click', () => {
//   headings.forEach(element => element.classList.add('hidden'));

//   if (image1.classList.contains('width-small')) {
//     images.forEach(element => {
//       element.classList.add('width-small');
//       element.classList.remove('width-big');
//     });

//     image1.classList.add('width-big');
//     image1.classList.remove('width-small');
//     headingImage1.classList.remove('hidden');
//   }

//   if (image1.classList.contains('width-big')) {
//     return;
//   }
// });

// image2.addEventListener('click', () => {
//   headings.forEach(element => element.classList.add('hidden'));

//   if (image2.classList.contains('width-small')) {
//     images.forEach(element => {
//       element.classList.add('width-small');
//       element.classList.remove('width-big');
//     });

//     image2.classList.add('width-big');
//     image2.classList.remove('width-small');
//     headingImage2.classList.remove('hidden');
//   }

//   if (image2.classList.contains('width-big')) {
//     return;
//   }
// });

// image3.addEventListener('click', () => {
//   headings.forEach(element => element.classList.add('hidden'));

//   if (image3.classList.contains('width-small')) {
//     images.forEach(element => {
//       // hide headings
//       element.classList.add('width-small');
//       element.classList.remove('width-big');
//     });

//     image3.classList.add('width-big');
//     image3.classList.remove('width-small');
//     headingImage3.classList.remove('hidden');
//   }

//   if (image3.classList.contains('width-big')) {
//     return;
//   }
// });

// image4.addEventListener('click', () => {
//   headings.forEach(element => element.classList.add('hidden'));

//   if (image4.classList.contains('width-small')) {
//     images.forEach(element => {
//       // hide headings
//       element.classList.add('width-small');
//       element.classList.remove('width-big');
//     });

//     image4.classList.add('width-big');
//     image4.classList.remove('width-small');
//     headingImage4.classList.remove('hidden');
//   }

//   if (image4.classList.contains('width-big')) {
//     return;
//   }
// });

// image5.addEventListener('click', () => {
//   headings.forEach(element => element.classList.add('hidden'));

//   if (image5.classList.contains('width-small')) {
//     images.forEach(element => {
//       // hide headings
//       element.classList.add('width-small');
//       element.classList.remove('width-big');
//     });

//     image5.classList.add('width-big');
//     image5.classList.remove('width-small');
//     headingImage5.classList.remove('hidden');
//   }

//   if (image5.classList.contains('width-big')) {
//     return;
//   }
// });

// new code

const image1 = document.getElementById('image-1');
const image2 = document.getElementById('image-2');
const image3 = document.getElementById('image-3');
const image4 = document.getElementById('image-4');
const image5 = document.getElementById('image-5');

const headingImage1 = document.getElementById('snow');
const headingImage2 = document.getElementById('skyline');
const headingImage3 = document.getElementById('river');
const headingImage4 = document.getElementById('trees');
const headingImage5 = document.getElementById('mountain');

const copy1 = document.querySelector('.copy-1');
const copy2 = document.querySelector('.copy-2');
const copy3 = document.querySelector('.copy-3');
const copy4 = document.querySelector('.copy-4');
const copy5 = document.querySelector('.copy-5');

const allCopyArr = [copy1, copy2, copy3, copy4, copy5];

const images = [image1, image2, image3, image4, image5];

const headings = [
  headingImage1,
  headingImage2,
  headingImage3,
  headingImage4,
  headingImage5,
];

image1.addEventListener('click', () => {
  headings.forEach(element => element.classList.add('hidden'));
  allCopyArr.forEach(element => element.classList.add('hidden'));

  if (image1.classList.contains('inactive')) {
    images.forEach(element => {
      element.classList.add('inactive');
      element.classList.remove('width-big');
    });

    image1.classList.add('active');
    image1.classList.remove('inactive');
    headingImage1.classList.remove('hidden');
    copy1.classList.remove('hidden');
  }

  if (image1.classList.contains('active')) {
    return;
  }
});

image2.addEventListener('click', () => {
  headings.forEach(element => element.classList.add('hidden'));
  allCopyArr.forEach(element => element.classList.add('hidden'));

  if (image2.classList.contains('inactive')) {
    images.forEach(element => {
      element.classList.add('inactive');
      element.classList.remove('active');
    });

    image2.classList.add('active');
    image2.classList.remove('inactive');
    headingImage2.classList.remove('hidden');
    copy2.classList.remove('hidden');
  }

  if (image2.classList.contains('active')) {
    return;
  }
});

image3.addEventListener('click', () => {
  headings.forEach(element => element.classList.add('hidden'));
  allCopyArr.forEach(element => element.classList.add('hidden'));

  if (image3.classList.contains('inactive')) {
    images.forEach(element => {
      // hide headings
      element.classList.add('inactive');
      element.classList.remove('active');
    });

    image3.classList.add('active');
    image3.classList.remove('inactive');
    headingImage3.classList.remove('hidden');
    copy3.classList.remove('hidden');
  }

  if (image3.classList.contains('active')) {
    return;
  }
});

image4.addEventListener('click', () => {
  headings.forEach(element => element.classList.add('hidden'));
  allCopyArr.forEach(element => element.classList.add('hidden'));

  if (image4.classList.contains('inactive')) {
    images.forEach(element => {
      // hide headings
      element.classList.add('inactive');
      element.classList.remove('active');
    });

    image4.classList.add('active');
    image4.classList.remove('inactive');
    headingImage4.classList.remove('hidden');
    copy4.classList.remove('hidden');
  }

  if (image4.classList.contains('active')) {
    return;
  }
});

image5.addEventListener('click', () => {
  headings.forEach(element => element.classList.add('hidden'));
  allCopyArr.forEach(element => element.classList.add('hidden'));

  if (image5.classList.contains('inactive')) {
    images.forEach(element => {
      // hide headings
      element.classList.add('inactive');
      element.classList.remove('active');
    });

    image5.classList.add('active');
    image5.classList.remove('inactive');
    headingImage5.classList.remove('hidden');
    copy5.classList.remove('hidden');
  }

  if (image5.classList.contains('active')) {
    return;
  }
});
