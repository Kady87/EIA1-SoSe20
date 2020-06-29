"use strict";
//Wollte mal n anderen Cursor testen :D
//hab mich auch wieder an paar andere Ergebnisse orientiert.
//Ich hab aber wieder das selbe Problem mit den Datentypen. Wenn ich sie hinzufüge, wird nichts mehr angezeigt.
//Bei Aufgabe 7 ging alles mit den Typen, nur jetzt irgendwie nicht mehr. lil bit confused..
let zuerledigen = ["fotografieren", "spazieren", "e-mails checken", "putzen"];
window.addEventListener("load", function () {
    var bin = document.querySelector(".fa-trash-alt");
    var todofeld = document.querySelector(".toadd");
    todolist();
    var inputlist = document.querySelector("#inputlist");
    console.log(inputlist);
    var button = document.querySelector("#Button1");
    button.addEventListener("click", function () {
        zuerledigen.push(inputlist.value);
        todolist();
        inputlist.value = "";
        console.log(zuerledigen);
    });
    function todolist() {
        todofeld.innerHTML = "";
        for (var index = 0; index < zuerledigen.length; index++) {
            todofeld.innerHTML += "<div>" + "<input type='checkbox'>" + zuerledigen[index] + "<i class='fas fa-trash-alt'id=delete></i>" + "</div>";
            
            
            var close = document.getElementsByClassName("fas fa-trash-alt");
            var i;
            for (i = 0; i < close.length; i++) {
                close[i].onclick = function () {
                    var div = this.parentElement;
                    div.style.display = "none";
                };
        
        }
        var anzahl = document.querySelector("#anzahl");
        anzahl.innerHTML = zuerledigen.length;
        }
    }
    
});
//# sourceMappingURL=Aufgabe9.js.map