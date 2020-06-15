"use strict";
var sound1:HTMLAudioElement = new Audio('A.mp3');
var sound2:HTMLAudioElement = new Audio('C.mp3');
var sound3:HTMLAudioElement = new Audio('F.mp3');
var sound4:HTMLAudioElement = new Audio('G.mp3');
var sound5:HTMLAudioElement = new Audio('hihat.mp3');
var sound6:HTMLAudioElement = new Audio('kick.mp3');
var sound7:HTMLAudioElement = new Audio('laugh-1.mp3');
var sound8:HTMLAudioElement = new Audio('laugh-2.mp3');
var sound9:HTMLAudioElement = new Audio('snare.mp3');

var allsounds:HTMLAudioElement = [sound1, sound2, sound3, sound4, sound5, sound6, sound7, sound8, sound9];

function clickbutton(x:number) {
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