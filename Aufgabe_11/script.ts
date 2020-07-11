//var todosText = ["Lorem", "Ipsum", "Dolor"];
//var todosChecked = [true, false, false];

interface todo {
    text: string;
    checked: boolean;
}

var todolist: todo[] = [{
text: "Lorem",
checked: true },
{ 
    text: "Ipsum",
    checked: true
},
{ 
    text: "Dolor",
    checked: true
}
];

var inputDOMElement: HTMLInputElement;
var addButtonDOMElement: HTMLElement;
var todosDOMElement: HTMLElement;
var counterDOMElement: HTMLElement;

window.addEventListener("load", function () {
    
    inputDOMElement = document.querySelector("#inputTodo");
    addButtonDOMElement = document.querySelector("#addButton");
    todosDOMElement = document.querySelector("#todos");
    counterDOMElement = document.querySelector("#counter");
    
    addButtonDOMElement.addEventListener("click", addTodo);
    
    drawListToDOM();
});
function drawListToDOM() {
    
    todosDOMElement.innerHTML = "";
    var _loop_1 = function (index) {
        
        var todo = document.createElement("div");
        todo.classList.add("todo");
        
        todo.innerHTML = "<span class='check " + todolist[index].checked + "'><i class='fas fa-check'></i></span>"
            + todolist[index].text +
            "<span class='trash fas fa-trash-alt'></span>";
        // Zuweisen der Event-Listener für den Check- und den Trash-Button
        todo.querySelector(".check").addEventListener("click", function () {
            
            toggleCheckState(index);
        });
        todo.querySelector(".trash").addEventListener("click", function () {
            
            deleteTodo(index);
        });
        // Bis hier hin wurde das neue Todo "zusammengebaut", jetzt wird es in den DOM gerendert.
        todosDOMElement.appendChild(todo);
    };
    // das ToDo-Array durchlaufen (iterieren) und Todo für Todo in den DOM schreiben
    for (var index = 0; index < todolist.length; index++) {
        _loop_1(index);
    }
    updateCounter();
}
function updateCounter(): void {

    var opentasks: number = 0;
    var donetasks: number = 0;

    for (let index = 0; index < todolist.length; index++) {
     if (todolist[index].checked == true) {
         donetasks ++;
     }
     else {
         opentasks++;
     }
    }
    counterDOMElement.innerHTML = todolist.length + " in total " + opentasks + " open " + donetasks + " done ";
}

function addTodo() {
    
    if (inputDOMElement.value != "") {
        
        todolist.unshift(
            {  text: inputDOMElement.value,
                checked: false
            }
        );




        
        inputDOMElement.value = "";
        
        drawListToDOM();
    }
}

function toggleCheckState(index: number):void {
    
    todolist[index].checked = !todolist[index].checked;
    
    drawListToDOM();
}

function deleteTodo(index: number): void {
    
    todolist.splice(index, 1);
  
   
    drawListToDOM();
}


declare var Artyom: any;

window.addEventListener("load", function(): void {
    const artyom: any = new Artyom();
    
    artyom.addCommands({
        indexes: ["erstelle Aufgabe *"],
        smart: true,
        action: function( i: any, wildcard: string): void {
            console.log("Neue Aufgabe wird erstellt: " + wildcard);
           
            todolist.unshift({ 
                text: (wildcard),
               checked: false
                });
            drawListToDOM(); 
        }

    });
    
    function startContinuousArtyom(): void {
        artyom.fatality();
    
        setTimeout(
            function(): void {
                artyom.initialize({
                    lang: "de-DE",
                    continuous: true,
                    listen: true,
                    interimResults: true,
                    debug: true
                }).then(function(): void {
                    console.log("Ready!");
                });
            }, 
            250);
    }
    
    startContinuousArtyom();
    
});
