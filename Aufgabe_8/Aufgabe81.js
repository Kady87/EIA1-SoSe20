"use strict";
//Hab's jetzt etwas anders geregelt, weil ich durcheinander gekommen bin. Müsste jetzt funktionieren.
//Ich habe es nocheinmal mit den Datentypen versucht, aber es funktioniert dennoch nichts mehr, wenn ich sie eingebe.
//Deshalb lasse ich es so, dass wenigstens der Teil erfüllt ist.
//#NervlichAmEnde2.0
var sound1 = new Audio('A.mp3');
var sound2 = new Audio('C.mp3');
var sound3 = new Audio('F.mp3');
var sound4 = new Audio('G.mp3');
var sound5 = new Audio('hihat.mp3');
var sound6 = new Audio('kick.mp3');
var sound7 = new Audio('laugh-1.mp3');
var sound8 = new Audio('laugh-2.mp3');
var sound9 = new Audio('snare.mp3');
window.addEventListener('load', function () {
    document.getElementById("b1").addEventListener("click", function () { clickbutton("A.mp3"); });
    document.getElementById("b2").addEventListener("click", function () { clickbutton("C.mp3"); });
    document.getElementById("b3").addEventListener("click", function () { clickbutton("F.mp3"); });
    document.getElementById("b4").addEventListener("click", function () { clickbutton("G.mp3"); });
    document.getElementById("b5").addEventListener("click", function () { clickbutton("hihat.mp3"); });
    document.getElementById("b6").addEventListener("click", function () { clickbutton("kick.mp3"); });
    document.getElementById("b7").addEventListener("click", function () { clickbutton("laugh-1.mp3"); });
    document.getElementById("b8").addEventListener("click", function () { clickbutton("laugh-2.mp3"); });
    document.getElementById("b9").addEventListener("click", function () { clickbutton("snare.mp3"); });
    document.querySelector("#playbutton").addEventListener("click", playandstop);
    document.querySelector("#microphonebutton").addEventListener("click", recording);
    var defbeat = ["snare.mp3", "hihat.mp3", "kick.mp3"];
    var i = 0;
    var interbeat;
    function playBeats() {
        interbeat = setInterval(function () {
            clickbutton(defbeat[i]);
            i++;
            if (i >= defbeat.length) {
                i = 0;
            }
        }, 500);
    }
    function playandstop() {
        var playstopbutton = document.querySelector("#playbutton");
        if (playstopbutton.getAttribute("class") == "fas fa-play") {
            playstopbutton.setAttribute("class", "fas fa-pause");
            playBeats();
        }
        else {
            playstopbutton.setAttribute("class", "fas fa-play");
            stopBeat();
        }
    }
    function stopBeat() {
        clearInterval(interbeat);
    }
    //Aufnehmen
    var rec = false;
    function recording() {
        if (rec) {
            rec = false;
        }
        else {
            rec = true;
        }
    }
    function clickbutton(mp3) {
        if (rec) {
            defbeat.push(mp3);
        }
        const sound = new Audio(mp3);
        sound.play();
    }
    //Löschen
    document.getElementById("deletebutton").addEventListener("click", function () {
        defbeat = [];
    });
});
//# sourceMappingURL=Aufgabe81.js.map