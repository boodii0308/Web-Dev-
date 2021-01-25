// document.querySelector("button").addEventListener("click", handleClick);

// function handleClick() {
//   alert("I got clicked!");

//}
var j = document.querySelectorAll(".drum").length;

for (var i = 0; i < j; i++) {
  document.querySelectorAll("button")[i].addEventListener("click", function () {
    var buttonname = this.innerHTML;
    playAudio(buttonname);
  });
}

document.addEventListener("keydown", function (event) {
  playAudio(event.key);
});

function playAudio(buttonname) {
  var text;
  switch (buttonname) {
    case "w":
      text = "sounds/crash.mp3";
      break;
    case "a":
      text = "sounds/kick-bass.mp3";
      break;
    case "s":
      text = "sounds/snare.mp3";
      break;
    case "d":
      text = "sounds/tom-1.mp3";
      break;
    case "j":
      text = "sounds/tom-2.mp3";
      break;
    case "k":
      text = "sounds/tom-3.mp3";
      break;
    case "l":
      text = "sounds/tom-4.mp3";
      break;
  }
  buttonAnimation(buttonname);
  var audio = new Audio(text);
  audio.play();
}

function buttonAnimation(currentkey) {
  var activeButton = document.querySelector("." + currentkey);
  activeButton.classList.add("pressed");
  setTimeout(function () {
    activeButton.classList.remove("pressed");
  }, 100);
}
