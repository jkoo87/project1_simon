let a = new Audio(["sound/51499__supadoh__sid-resbass-short-a-2.wav"]);
let b = new Audio(["sound/51509__supadoh__sid-resbass-short-b4.wav"]);
let c = new Audio(["sound/51513__supadoh__sid-resbass-short-c-4.wav"]);
let d = new Audio(["sound/51520__supadoh__sid-resbass-short-d-3.wav"]);
let e = new Audio(["sound/51527__supadoh__sid-resbass-short-e2.wav"]);
let f = new Audio(["sound/51531__supadoh__sid-resbass-short-f-2.wav"]);
let g = new Audio(["sound/51540__supadoh__sid-resbass-short-g-3.wav"]);
let h = new Audio(["sound/51511__supadoh__sid-resbass-short-c-2.wav"]);
let i = new Audio(["sound/51505__supadoh__sid-resbass-short-a4.wav"]);
let j = new Audio(["sound/51514__supadoh__sid-resbass-short-c1.wav"]);
let k = new Audio(["sound/51507__supadoh__sid-resbass-short-b2.wav"]);
let l = new Audio(["sound/51538__supadoh__sid-resbass-short-g-1.wav"]);

let backgroundMusic = [a,b,c,d,e,f,g,h,i,j,k,l];


function pickRandomSong() {
    // let randomMelody = backgroundMusic[Math.floor(Math.random() * backgroundMusic.length)];
    // randomMelody.play();
    let back = ["#ff0000","blue","gray"];
     let rand = back[Math.floor(Math.random() * back.length)];
     $('h1').css('color','rand');
  }

function randomSong() {
  startInterval = setInterval(function(){
    pickRandomSong();
  }, 140);
}
randomSong();
