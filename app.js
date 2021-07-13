// Selectors
const todoInput= document.getElementById("todo-input");
const todoButton = document.getElementById("todo-button");
const todoList = document.getElementById("todo-list");
//Event listiners 

todoButton.addEventListener('click', addTodo);


//Functions

function addTodo(Event){
    //prevent form from submitting
    Event.preventDefault();

    //todo div
    const todoDiv = document.createElement("div");
    todoDiv.setAttribute('id', "todo-item");

    //add tailwind class
    todoDiv.setAttribute("class","flex");

    //create li
    const newTodo = document.createElement("li");
    
    //adds a id list name to the list item
    newTodo.setAttribute("id", "todo-item");
 
    //changes inner text to hey
    newTodo.innerText = document.getElementById('todo-input').value;

    // add class to newTodo
    
    
    //Puts newTodo inside todoDiv
    todoDiv.appendChild(newTodo);

    //create a complete button
    const completedButton = document.createElement('button');
    completedButton.innerHTML = '<i class="fas fa-check"></i>';
    completedButton.setAttribute("id",'complete-btn');
    todoDiv.appendChild(completedButton);  

    //trash button
    const trashButton = document.createElement('button');
    trashButton.innerHTML = '<i class="fas fa-trash"></i>';
    trashButton.setAttribute("id","trash-btn");
    todoDiv.appendChild(trashButton); 

    // append to list 
    todoList.appendChild(todoDiv);

}