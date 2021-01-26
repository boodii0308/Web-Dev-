$("h1").addClass("big-title");
$("button").css("width", "200px").addClass("btn-primary");
$("h2").text("hellllllloo").addClass("background-color-warning");
$("button").html("<em> CLickk MEEEEE!!!! </em>");
$("a").attr("href", "https://www.yahoo.com");

$("h1").mouseover(function () {
  $("h1").css("color", "red");
});

$("button").click(function () {
  $("h1").css("color", "Yellow");
});

for (var i = 0; i < 5; i++) {
  document.querySelectorAll("button")[i].addEventListener("click", function () {
    document.querySelector("h1").style.color = "purple";
  });
}

$("input").keypress(function (event) {
  console.log(event.key);
  //$("button").show();
  $("button").fadeIn();
});

$(document).keypress(function (event) {
  $("h1").text(event.key);
});

// $("h1").on("mouseover", function () {
//   var s = $("h2").css("font-size");
//   $("h2").css("size", s + 1);
//   //console.log($("h2").style.);
// });
$("h1").before("<button class = 'btn-primary' > NewButton  </button>");
$("h1").after("<button class = 'btn-primary' > NewButton  </button>");
$("h1").prepend("<button class = 'btn-primary' > NewButton  </button>");
$("h1").append("<button class = 'btn-primary' > NewButton  </button>");
//$("h1").remove();

$("h1").on("click", function () {
  //$("button").hide();
  //$("button").toggle();
  //$("button").fadeOut();
  //$("button").fadeIn();
  //$("button").fadeToggle();
  $("button").slideToggle();
  $("button").animate({ opacity: 0.5 });
});
