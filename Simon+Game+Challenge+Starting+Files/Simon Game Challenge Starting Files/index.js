var buttonColors = ["red", "blue", "green", "yellow"];
var gamePattern = new Array();
var userClickedPattern = new Array();
var userChosenColor;
var level = 0;

$("[type = 'button']").click(function () {
  var th = $(this);
  var buff;
  if (th.hasClass("red")) buff = "red";
  else if (th.hasClass("blue")) buff = "blue";
  else if (th.hasClass("green")) buff = "green";
  else if (th.hasClass("yellow")) buff = "yellow";

  playSound(buff);
  playAnimation(buff);
  userClickedPattern.push(buff);
  checkAnswer();
});

function playAnimation(name) {
  // $("#" + name)
  //   .fadeIn(1000)
  //   .fadeOut(1000)
  //.fadeIn(1000);
  $("#" + name).addClass("pressed");
  setTimeout(function () {
    $("#" + name).removeClass("pressed");
  }, 100);
}
function playSound(name) {
  var SoundFile = "sounds/" + name + ".mp3";

  var audio = new Audio(SoundFile);
  audio.play();
}

function nextSequence() {
  var randomChosenColor = buttonColors[Math.floor(Math.random() * 4)];

  playSound(randomChosenColor);
  playAnimation(randomChosenColor);
  gamePattern.push(randomChosenColor);
  level += 1;
}

$(document).keydown(function () {
  if (!level) {
    $("h1").text("Level " + level);
  }
  nextSequence();
});

function checkAnswer(currentLevel) {
  var x = 1;
  if (userClickedPattern.length !== gamePattern.length) {
    x = 0;
  }
  if (userClickedPattern[currentLevel] !== gamePattern[currentLevel]) {
    x = 0;
  }
  if (x) {
    setTimeout(function () {
      nextSequence();
    }, 1000);
    console.log("success");
  } else {
    level = 0;
    console.log("wrong");
    playSound("wrong");
    $("body").addClass("game-over");
    setTimeout(function () {
      $("body").removeClass("game-over");
    }, 200);
    $("h1").text("Game Over");
    setTimeout(function () {
      $("h1").text("Press A Key to Start");
    }, 3000);
  }
}
