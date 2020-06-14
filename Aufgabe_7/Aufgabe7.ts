"use strict";
var sound1 = new Audio('A.mp3');
var sound2 = new Audio('C.mp3');
var sound3 = new Audio('F.mp3');
var sound4 = new Audio('G.mp3');
var sound5 = new Audio('hihat.mp3');
var sound6 = new Audio('kick.mp3');
var sound7 = new Audio('laugh-1.mp3');
var sound8 = new Audio('laugh-2.mp3');
var sound9 = new Audio('snare.mp3');

var allsounds = [sound1, sound2, sound3, sound4, sound5, sound6, sound7, sound8, sound9];

function clickbutton(x) {
    allsounds[x].play();
}
//wiederholung
function repeat() {
    setInterval(function () { clickbutton(6); clickbutton(8); clickbutton(5); }, 500);
}
window.addEventListener('load', function () {
    
    document.getElementById("b1").addEventListener("click", function () { clickbutton(0); });
    document.getElementById("b2").addEventListener("click", function () { clickbutton(1); });
    document.getElementById("b3").addEventListener("click", function () { clickbutton(2); });
    document.getElementById("b4").addEventListener("click", function () { clickbutton(3); });
    document.getElementById("b5").addEventListener("click", function () { clickbutton(4); });
    document.getElementById("b6").addEventListener("click", function () { clickbutton(5); });
    document.getElementById("b7").addEventListener("click", function () { clickbutton(6); });
    document.getElementById("b8").addEventListener("click", function () { clickbutton(7); });
    document.getElementById("b9").addEventListener("click", function () { clickbutton(8); });
    document.getElementById("playbutton").addEventListener("click", repeat);
});