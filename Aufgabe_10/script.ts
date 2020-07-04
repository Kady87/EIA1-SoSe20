
var todosText: string[] = ["Lorem", "Ipsum", "Dolor"];
var todosChecked: boolean[] = [true, false, false];

interface Todo {
    text: string;
    isChecked: boolean;
}

var todolist = [{
        text: "Lorem", isChecked: true
    },
    {
        text: "Ipsum", isChecked: false
    },
    {
        text: "Dolor", isChecked: false
    }
];

var inputDOMElement;
var addButtonDOMElement;
var todosDOMElement;
var counterDOMElement;

window.addEventListener("load", function () {
    
    inputDOMElement = document.querySelector("#inputTodo");
    addButtonDOMElement = document.querySelector("#addButton");
    todosDOMElement = document.querySelector("#todos");
    counterDOMElement = document.querySelector("#counter");
    
    addButtonDOMElement.addEventListener("click", addTodo);
    
    drawListToDOM();
});
function drawListToDOM() {
    // alle todos erst einmal aus dem DOM löschen
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
        
        todosDOMElement.appendChild(todo);
    };
    
    for (var index = 0; index < todolist.length; index++) {
        _loop_1(index);
    }
    updateCounter();
}
function updateCounter() {
    var opentasks = 0;
    var donetasks = 0;
    for (let index = 0; index < todolist.length; index++) {
        if (todolist[index].checked == true) {
            donetasks++;
        }
        else {
            opentasks++;
        }
    }
    counterDOMElement.innerHTML = todolist.length + " in total " + opentasks + " open " + donetasks + " done ";
}

function addTodo() {
    
    if (inputDOMElement.value != "") {
        
        todolist.unshift({ text: inputDOMElement.value,
            checked: false
        });
        
        inputDOMElement.value = "";
        
        drawListToDOM();
    }
}

function toggleCheckState(index) {
    
    todolist[index].checked = !todolist[index].checked;
    
    drawListToDOM();
}

function deleteTodo(index) {
    
    todolist.splice(index, 1);
    
    drawListToDOM();
}