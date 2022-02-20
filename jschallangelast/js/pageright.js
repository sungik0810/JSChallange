

function pageright(){
    if(window.getComputedStyle(document.querySelector(".mainwindow")).right == "0px"){
        document.querySelector(".mainwindow").style.right = "100vw";
    } else if(window.getComputedStyle(document.querySelector(".mainwindow")).right == `${window.innerWidth}px`){
        document.querySelector(".mainwindow").style.right = "200vw";
    }
}
//window.getComputedStyle(document.querySelector(".body")).right


document.querySelector(".pageright").addEventListener("click",pageright);

let widths = window.innerWidth;
function pageleft(){
    if(window.getComputedStyle(document.querySelector(".mainwindow")).right == "0px"){
    } else if(window.getComputedStyle(document.querySelector(".mainwindow")).right == `${widths}px`){
        console.log("gdsdd")
        document.querySelector(".mainwindow").style.right = "0vw";
    } else if(window.getComputedStyle(document.querySelector(".mainwindow")).right == `${parseInt(widths)*2}px`){
        document.querySelector(".mainwindow").style.right = "100vw";
        console.log("gds")
    }
}
document.querySelector(".pageleft").addEventListener("click",pageleft);