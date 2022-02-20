

function pageright(){
    if(window.getComputedStyle(document.querySelector(".mainwindow")).display == "flex"){
        document.querySelector(".mainwindow").style.display = "none";
        document.querySelector(".secondwindow").style.display = "flex";
        console.log("gg")
    }
}
//window.getComputedStyle(document.querySelector(".body")).right


document.querySelector(".pageright").addEventListener("click",pageright);

let widths = window.innerWidth;
function pageleft(){
    if(window.getComputedStyle(document.querySelector(".mainwindow")).display == "none"){
        document.querySelector(".mainwindow").style.display = "flex";
        document.querySelector(".secondwindow").style.display = "none";
    }
}
document.querySelector(".pageleft").addEventListener("click",pageleft);