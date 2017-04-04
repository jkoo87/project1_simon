// let titleColor = setInterval(function() {
//   setColor()}, 300);
// function setColor() {
//   let title = $("h1");
//   title.style.color =
//   title.style.color ==
//   "white" ? "blue" : "white";
// }



let startButton = $("#startButton");
let resetButton = $("#resetButton");


let gameButtons = $(".gameButtons");
let redButton = $("#red");
let yellowButoon = $("#yellow");
let greenButton = $("#green");
let blueButton = $("#blue");

let redSound = new Audio(["sound/51521__supadoh__sid-resbass-short-d-4.wav"]);
let yellowSound = new Audio(["sound/51533__supadoh__sid-resbass-short-f-4.wav"]);
let greenSound = new Audio(["sound/51513__supadoh__sid-resbass-short-c-4.wav"]);
let blueSound = new Audio(["sound/51501__supadoh__sid-resbass-short-a-4.wav"]);


let game = {
  count: 0,
  score: 0,
  color : [redButton, yellowButoon, greenButton, blueButton],
  sound: [redSound, yellowSound, greenSound, blueSound],
  randomSeries: [],
  playerSeries: [],
}



startButton.on("click", changeFormStart);

function changeFormStart() {
  $(".line").removeClass("buttonsInitial").children().addClass("gameButtonsTransform");
  $(".livesTracker").css("display", "inline");
  $("header").css({"margin": "0", "transition": "2s"});
    $(".optionText").delay(800).text("Get Set");
      $(".optionText").delay(400).text("Start");
}

game.color[0].on("click", function(){
  return game.sound[0].play();
});
game.color[1].on("click", function(){
  return game.sound[1].play();
});
game.color[2].on("click", function(){
  return game.sound[2].play();
});
game.color[3].on("click", function(){
  return game.sound[3].play();
});







resetButton.on("click", changeFormReset);

function changeFormReset() {
  $(".gameButtonsTransform").removeClass("gameButtonsTransform").parent().addClass("buttonsInitial");
  $(".livesTracker").css("display", "none");
  $("header").css({"margin": "200px 0 0 0", "transition": "2s"});
}
