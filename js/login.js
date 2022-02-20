let loginWindow = document.querySelector(".logindiv")
let loginImage = document.querySelector(".randomloginimage")
let id = document.querySelector(".loginform")
let idinput = document.querySelector("#idinput")
let passwordinput = document.querySelector("#passwordinput")
let moveWindow = document.querySelector(".moveid")
let checkbox = document.querySelector(".checkbox")


function login(event){
    event.preventDefault();
    
    let idvalue = idinput.value; //aaa
    let passwordvalue = passwordinput.value; //123
    if( localStorage.getItem(`${String(idvalue)}`) == String(passwordvalue)){
        moveWindow.setAttribute("onclick","location.href='id.html'")

    } else if(localStorage.getItem(`${String(idvalue)}`) == null){
        localStorage.setItem(`${String(idvalue)}`,String(passwordvalue));
        alert("create new id");
    } else{
        alert("wrong password");
    }

}

document.addEventListener("submit",login)
