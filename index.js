const startAnimationBtn = document.getElementById('start-animation-btn');
const background = document.querySelector('.background');
const audio = document.getElementById("myAudio");

startAnimationBtn.addEventListener('click', function() {
  background.classList.remove('hidden')
   audio.play();
});


/*
const button = document.getElementById("start-animation-btn");

button.addEventListener("click", function() {
 ;
});*/
