"use strict";
//Ich habe mich etwas an Cara und Fiona orientiert, da es am Anfang irgendwie nicht funktioniert hat.
//Außerdem wollte ich den Variablen Typen geben, aber irgendwie funktioniert dann nichts mehr. 
//#NervlichAmEnde
var sound1 = new Audio('A.mp3');
var sound2 = new Audio('C.mp3');
var sound3 = new Audio('F.mp3');
var sound4 = new Audio('G.mp3');
var sound5 = new Audio('hihat.mp3');
var sound6 = new Audio('kick.mp3');
var sound7 = new Audio('laugh-1.mp3');
var sound8 = new Audio('laugh-2.mp3');
var sound9 = new Audio('snare.mp3');
// tslint:disable-next-line: typedef
var allsounds = [sound1, sound2, sound3, sound4, sound5, sound6, sound7, sound8, sound9];
// tslint:disable-next-line: typedef
var repeatArray = [6, 8, 5];
// tslint:disable-next-line: typedef
var clicking = false;
// tslint:disable-next-line: typedef
function clickbutton(x) {
    allsounds[x].play();
}
// tslint:disable-next-line: typedef
function repeat(array) {
    var i;
    var länge = array.length;
    for (i = 0; i < länge; i++) {
        clickbutton(array[i]);
    }
}
window.addEventListener('load', function () {
    //Drumpadgerüst von Aufgabe 7
    document.getElementById("b1").addEventListener("click", function () { clickbutton(0); });
    document.getElementById("b2").addEventListener("click", function () { clickbutton(1); });
    document.getElementById("b3").addEventListener("click", function () { clickbutton(2); });
    document.getElementById("b4").addEventListener("click", function () { clickbutton(3); });
    document.getElementById("b5").addEventListener("click", function () { clickbutton(4); });
    document.getElementById("b6").addEventListener("click", function () { clickbutton(5); });
    document.getElementById("b7").addEventListener("click", function () { clickbutton(6); });
    document.getElementById("b8").addEventListener("click", function () { clickbutton(7); });
    document.getElementById("b9").addEventListener("click", function () { clickbutton(8); });
    document.getElementById("deletebutton").addEventListener("click", function () { repeatArray = []; });
    document.getElementById("playbutton").addEventListener("click", function () { document.getElementById("playbutton").classList.add("hidden"); });
    document.getElementById("playbutton").addEventListener("click", function () { document.getElementById("playbutton").classList.remove("buttons"); });
    document.getElementById("playbutton").addEventListener("click", function () { document.getElementById("stopbutton").classList.add("buttons"); });
    document.getElementById("playbutton").addEventListener("click", function () { document.getElementById("stopbutton").classList.remove("hidden"); });
    document.getElementById("stopbutton").addEventListener("click", function () { document.getElementById("playbutton").classList.add("buttons"); });
    document.getElementById("stopbutton").addEventListener("click", function () { document.getElementById("stopbutton").classList.remove("buttons"); });
    document.getElementById("stopbutton").addEventListener("click", function () { document.getElementById("stopbutton").classList.add("hidden"); });
    document.getElementById("stopbutton").addEventListener("click", function () { document.getElementById("playbutton").classList.remove("hidden"); });
    var schleife;
    document.getElementById("playbutton").addEventListener("click", function () { schleife = setInterval(function () { repeat(repeatArray); }, 500); });
    document.getElementById("stopbutton").addEventListener("click", function () { clearInterval(schleife); });
    document.getElementById("microphonebutton").addEventListener("click", function () { clicking = true; });
    document.getElementById('playbutton').addEventListener("click", function () { clicking = false; });
    document.getElementById("microphonebutton").addEventListener("click", microphoneClick);
    function microphoneClick() {
        if (clicked === true) {
            document.getElementById("b1").addEventListener("click", function () { repeatArray.push(0); });
            document.getElementById("b2").addEventListener("click", function () { repeatArray.push(1); });
            document.getElementById("b3").addEventListener("click", function () { repeatArray.push(2); });
            document.getElementById("b4").addEventListener("click", function () { repeatArray.push(3); });
            document.getElementById("b5").addEventListener("click", function () { repeatArray.push(4); });
            document.getElementById("b6").addEventListener("click", function () { repeatArray.push(5); });
            document.getElementById("b7").addEventListener("click", function () { repeatArray.push(6); });
            document.getElementById("b8").addEventListener("click", function () { repeatArray.push(7); });
            document.getElementById("b9").addEventListener("click", function () { repeatArray.push(8); });
        }
        else if (clicked === false) {
            return;
        }
    }
});
//# sourceMappingURL=Aufgabe8.js.map