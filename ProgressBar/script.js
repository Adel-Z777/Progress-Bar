let start = new Date("01-01-24");
let end = new Date();
let Deference = end - start ;
let valueNow = Math.floor((Deference / 1000 / 60 / 60 / 24) * 100 / 366);
const radialProgress = document.querySelector('.RadialProgress');

const setProgress = (progress) => {
  const value = `${progress}%`;
  radialProgress.style.setProperty('--progress', value)
  radialProgress.innerHTML = value
  radialProgress.setAttribute('aria-valuenow', value)
}

setProgress(valueNow);