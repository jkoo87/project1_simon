// let startInterval = null;
// let a = new Audio(["sound/51499__supadoh__sid-resbass-short-a-2.wav"]);
// let b = new Audio(["sound/51532__supadoh__sid-resbass-short-f-3.wav"]);
// let c = new Audio(["sound/51516__supadoh__sid-resbass-short-c3.wav"]);
// let d = new Audio(["sound/51520__supadoh__sid-resbass-short-d-3.wav"]);
// let e = new Audio(["sound/51527__supadoh__sid-resbass-short-e2.wav"]);
// let f = new Audio(["sound/51531__supadoh__sid-resbass-short-f-2.wav"]);
// let g = new Audio(["sound/51540__supadoh__sid-resbass-short-g-3.wav"]);
// let h = new Audio(["sound/51511__supadoh__sid-resbass-short-c-2.wav"]);
// let i = new Audio(["sound/51528__supadoh__sid-resbass-short-e3.wav"]);
// let j = new Audio(["sound/51514__supadoh__sid-resbass-short-c1.wav"]);
// let k = new Audio(["sound/51507__supadoh__sid-resbass-short-b2.wav"]);
// let l = new Audio(["sound/51504__supadoh__sid-resbass-short-a3.wav"]);
//
// let backgroundMusic = [a,b,c,d,e,f,g,h,i,j,k,l];
//
//
// function pickRandomSong() {
//     let randomMelody = backgroundMusic[Math.floor(Math.random() * backgroundMusic.length)];
//     randomMelody.play();
//     var colorR = Math.floor((Math.random() * 256));
//     var colorG = Math.floor((Math.random() * 256));
//     var colorB = Math.floor((Math.random() * 256));
//     $('h1').css("color", "rgb(" + colorR + "," + colorG + "," + colorB + ")");
//   }
//
// function randomSong() {
//   startInterval = setInterval(function(){
//     pickRandomSong();
//   }, 150);
// }
// randomSong();


let startButton = $("#startButton");
let resetButton = $("#resetButton");

let gameButtons = $(".gameButtons");
let redButton = $("#red");
let yellowButton = $("#yellow");
let greenButton = $("#green");
let blueButton = $("#blue");

let redSound = new Audio(["sound/51521__supadoh__sid-resbass-short-d-4.wav"]);
let yellowSound = new Audio(["sound/51533__supadoh__sid-resbass-short-f-4.wav"]);
let greenSound = new Audio(["sound/51513__supadoh__sid-resbass-short-c-4.wav"]);
let blueSound = new Audio(["sound/51501__supadoh__sid-resbass-short-a-4.wav"]);

let game = {
  intervalID: null,
  sequenceLength: 3,
  sequenceCount: 0,
  count: 0,
  score: 0,
  color : [redButton, yellowButton, greenButton, blueButton],
  sound: [redSound, yellowSound, greenSound, blueSound],
  randomSeries: [],
  playerSeries: [],
}




resetButton.hide();


startButton.on("click", changeFormStart);

function changeFormStart() {
  $(".line").removeClass("buttonsInitial").children().addClass("gameButtonsTransform");
  $(".livesTracker").css("display", "inline");
  $("header").css({"margin": "0", "transition": "2s"});
  $(".optionText").text("On your mark");
  clearInterval(startInterval);
  startButton.hide();
  resetButton.hide();
  redSound.play();
    setTimeout(function(){
      $(".optionText").text("Get Set");
      redSound.play();
    }, 2000);
    setTimeout(function(){
      $(".optionText").text("Start!");
      redSound.play();
      greenSound.play();
      yellowSound.play();
    }, 4000);
    setTimeout(function(){
      randomSquence();
      resetButton.show();
    }, 5000);

}

function pickRandomColor() {
    let randomColor = game.color[Math.floor(Math.random() * game.color.length)];
    buttonLightSound(randomColor);
    game.randomSeries.push(randomColor);
    console.log(game.randomSeries)
  }


function randomSquence() {
  game.sequenceCount = 0;

   game.intervalID = setInterval(function(){

    pickRandomColor();
    game.sequenceCount++;

    if(game.sequenceCount >= game.sequenceLength)
      clearInterval(game.intervalID);

  }, 1200);
}




if(game.count >= 1) {
  for (let i in game.color) {
    game.color[i].click(function(event) {
    game.playerSeries.push(game.color[i]);
    console.log(game.playerSeries);
    })
  }
}











function buttonLightSound(randomColor) {
    switch (randomColor) {
    case redButton:
      game.sound[0].play();
      randomColor.css("background-color", "#D62828");
      setTimeout(function(){
        randomColor.css("background-color", "");
      }, 600);
      break;
    case yellowButton:
      game.sound[1].play();
      randomColor.css("background-color", "#FCF40C");
      setTimeout(function(){
        randomColor.css("background-color", "");
      }, 600);
      break;
    case greenButton:
      game.sound[2].play();
      randomColor.css("background-color", "#1B9211");
      setTimeout(function(){
        randomColor.css("background-color", "");
      }, 600);
        break;
    case blueButton:
      game.sound[3].play();
      randomColor.css("background-color", "#006EBC");
      setTimeout(function(){
        randomColor.css("background-color", "");
      }, 600);
        break;
  }
}







resetButton.on("click", changeFormReset);

function changeFormReset() {
  $(".gameButtonsTransform").removeClass("gameButtonsTransform").parent().addClass("buttonsInitial");
  $(".livesTracker").css("display", "none");
  $("header").css({"margin": "200px 0 0 0", "transition": "2s"});
  $(".optionText").text("Play again?");
  clearInterval(game.intervalID);
  randomSong();
  startButton.show();
  resetButton.hide();
  game.randomSeries = [];
  game.playerSeries = [];
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
