const todoinput = document.querySelector(".todoinput")
const todolistup = document.querySelector(".todolistup")
const list = document.querySelector(".list")
const todoLocalStorage =[]


function makeNew(newToDo){
    let makeNewLine = document.createElement("li");
    let makeNewText = document.createElement("span");
    let makeNewDeleteButton = document.createElement("button")
    makeNewLine.appendChild(makeNewText)
    makeNewText.innerText = newToDo;
    makeNewDeleteButton.innerText = "X";
    makeNewLine.classList.add("li")
    makeNewText.classList.add("span")
    makeNewDeleteButton.classList.add("button")
    makeNewLine.appendChild(makeNewDeleteButton)
    list.appendChild(makeNewLine);
    
}

function listup(event){
    event.preventDefault();
    event.preventDefault();
    let todoinputvalue = todoinput.value;
    localStorage.setItem("todolist",todoLocalStorage)
    todoinput.value = "";
    makeNew(todoinputvalue);

    
    
}





document.addEventListener("submit",listup)

