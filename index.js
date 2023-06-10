const startAnimationBtn = document.getElementById('start-animation-btn');
const background = document.querySelector('.background');
const audio = document.getElementById("myAudio");

const navElement = document.querySelector("nav");
const mainElement = document.querySelector("main");
const gitElement = document.querySelector("#git_btn");
const cvElement = document.querySelector("#cv_btn");
const wgElement = document.querySelector("#prj_btn");

let animationOn = false;

startAnimationBtn.addEventListener('click', function() {
  if (animationOn) {
    stopAnimation();
  } else {
    startAnimation();
  }
});

function startAnimation() {
  background.classList.remove('hidden');
  audio.play();
  navElement.style.backgroundColor = "#023020";
  mainElement.style.backgroundColor = "#023020";
  gitElement.style.backgroundColor = "#023020";
  cvElement.style.backgroundColor = "#023020";
  wgElement.style.backgroundColor = "#023020";
  startAnimationBtn.style.backgroundColor = "#023020";

  const numCoins = 10;
  const container = document.querySelector('.content');
  for (let i = 0; i < numCoins; i++) {
    const coin = document.createElement('div');
    coin.classList.add('coin');
    container.appendChild(coin);
  }

  animationOn = true;
}

function stopAnimation() {
  background.classList.add('hidden');
  audio.pause();
  navElement.style.backgroundColor = "";
  mainElement.style.backgroundColor = "";
  gitElement.style.backgroundColor = "";
  cvElement.style.backgroundColor = "";
  wgElement.style.backgroundColor = "";
  startAnimationBtn.style.backgroundColor = "";

  const coins = document.querySelectorAll('.coin');
  coins.forEach(function (coin) {
    coin.remove();
  });

  animationOn = false;
}
