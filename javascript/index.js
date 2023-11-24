let myArray = ['Truth', 'Truth', 'Truth', 'False', 'Truth', 'False', 'False', 'Truth'];

let btn = document.querySelector('[cal]');

let btn2 = document.querySelector('[clear]');

btn.addEventListener('click', countTruth);

btn2.addEventListener('click', clear);

let display = document.querySelector('[total]');

function countTruth() {
  let count = 0;

  for (let i = 0; i < myArray.length; i++) {
    if (myArray[i] === 'Truth') {
      count++;
    }
  }

  let x = count;

  console.log(x);

  display.value = x;
}

function clear() {
    document.querySelector('[total]').value = '';
}
