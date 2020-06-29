"use strict";
//Wollte mal n anderen Cursor testen :D
//hab mich auch wieder an paar andere Ergebnisse orientiert. Löschen funktioniert so mehr oder weniger.
//Edit Datentypen: funktioniert nur, wenn ich es nachträglich in der .ts Datei bearbeite, sprich wenn es schon als .js umgewandelt ist.

let zuerledigen: string = ["fotografieren", "spazieren", "e-mails checken", "putzen"];


window.addEventListener("load", function () {
    
    var bin = document.querySelector(".fa-trash-alt");
    
    
    var todofeld: HTMLElement = document.querySelector(".toadd");
    todolist();
    
    
    var inputlist: HTMLInputElement = document.querySelector("#inputlist");
    console.log(inputlist);
    
    
    var button: HTMLElement = document.querySelector("#Button1");
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
            
            
            var close: HTMLElement = document.getElementsByClassName("fas fa-trash-alt");
            var i;
            for (i = 0; i < close.length; i++) {
                close[i].onclick = function () {
                    var div = this.parentElement;
                    div.style.display = "none";
                };
        
        }
        var anzahl: HTMLElement = document.querySelector("#anzahl");
        anzahl.innerHTML = zuerledigen.length;
    }
    }

});