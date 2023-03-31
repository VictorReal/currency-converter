const startAnimationBtn = document.getElementById('start-animation-btn');
const background = document.querySelector('.background');
const audio = document.getElementById("myAudio");

const navElement = document.querySelector("nav");
const mainElement = document.querySelector("main");
const gitElement = document.querySelector("#git_btn");
const cvElement = document.querySelector("#cv_btn");
const wgElement = document.querySelector("#wg_btn");

startAnimationBtn.addEventListener('click', function() {
  background.classList.remove('hidden')
  audio.play();
  navElement.style.backgroundColor = "#023020";
  mainElement.style.backgroundColor = "#023020";  
  gitElement.style.backgroundColor = "#023020";  
  cvElement.style.backgroundColor = "#023020";
  wgElement.style.backgroundColor = "#023020";
  startAnimationBtn.style.backgroundColor = "#023020";

});
