const todoinput = document.querySelector(".todoinput")
const todolistup = document.querySelector(".todolistup")
const list = document.querySelector(".list")
let todoArray = []

// delete function 
function deleteButton(event){
    const litarget = event.target.parentElement
    litarget.remove()

    todoArray = todoArray.filter((toDo) => toDo.id !== parseInt(litarget.id));
    localStorage.setItem("todolist",JSON.stringify(todoArray))
}

// create new list line on browser && if click the button, delete line on browser 
function makeNew(newToDo){
    const makeNewLine = document.createElement("li");
    makeNewLine.classList.add("li")
    makeNewLine.id = newToDo.id
    
    
    const makeNewText = document.createElement("span");
    makeNewText.innerText = newToDo.text;
    makeNewText.classList.add("span")
    

    const makeNewDeleteButton = document.createElement("button")
    makeNewDeleteButton.innerText ="　";
    makeNewDeleteButton.classList.add("deletebutton")

    makeNewDeleteButton.addEventListener("click",deleteButton)

    list.appendChild(makeNewLine);
    makeNewLine.appendChild(makeNewText)
    makeNewLine.appendChild(makeNewDeleteButton)
}

//push on localStorage && execute to make new line 
function listup(event){
    event.preventDefault();
    let todoinputvalue = todoinput.value;
    todoinput.value ="";
    const newToDoObj = {
        text : todoinputvalue,
        id : Date.now(),
    };
    todoArray.push(newToDoObj);
    makeNew(newToDoObj);
    localStorage.setItem("todolist",JSON.stringify(todoArray)) // make String including "[""]"
}
document.addEventListener("submit",listup)



// just showing localstorage value on browser(list)
const saveToDos = localStorage.getItem("todolist")

if(saveToDos !== null){
    let parsedToDos = JSON.parse(saveToDos) // again make Array 
    todoArray = parsedToDos // todoArray = [] -> todoArray = [saving thing,...]
    parsedToDos.forEach(makeNew) // parsedToDos.forEach((item) => makeNew(item)) short cut -> don't need function name
    //localStorage.setItem("todolist",JSON.stringify(parsedToDos))
    
}