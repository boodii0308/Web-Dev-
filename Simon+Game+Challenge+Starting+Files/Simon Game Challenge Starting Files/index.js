var buttonColors = ["red", "blue", "green", "yellow"];
var gamePattern = [];
var userClickedPattern = [];
var userChosenColor;
var level = 0;
var stared = false;

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

$(document).keydown(function () {
  if (!stared) {
    started = true;
    $("h1").text("Level " + level);
    nextSequence();
  }
});

function nextSequence() {
  var randomChosenColor = buttonColors[Math.floor(Math.random() * 4)];
  level++;
  $("#level-title").text("Level " + level);
  playSound(randomChosenColor);
  playAnimation(randomChosenColor);
  gamePattern.push(randomChosenColor);
}

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
  checkAnswer(userClickedPattern.length - 1);
});

function checkAnswer(currentLevel) {
  for (var i = 0; i < userClickedPattern.length; i++) {
    console.log(currentLevel);
    console.log(i);
    console.log(userClickedPattern[i]);
    console.log(gamePattern[i]);
  }
  if (gamePattern[currentLevel] === userClickedPattern[currentLevel]) {
    if (userClickedPattern.length === gamePattern.length) {
      console.log("success");

      setTimeout(function () {
        nextSequence();
      }, 1000);
    }
  } else {
    console.log("wrong");
    playSound("wrong");
    $("body").addClass("game-over");
    setTimeout(function () {
      $("body").removeClass("game-over");
    }, 200);
    $("h1").text("Game Over, Press A Key to Start");
    startOver();
  }
}

function startOver() {
  level = 0;
  gamePattern = [];
  userClickedPattern = [];
  started = false;
}
