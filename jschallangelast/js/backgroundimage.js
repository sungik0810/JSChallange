
function randomBackgroundImage(){
const backgroundImage = document.querySelector(".randombackgroundimage");
const images = ["00.jpg","01.jpg","02.jpg"];
let randomNum = Math.floor(Math.random()*images.length);
let randomImage = images[randomNum]
backgroundImage.src = `img/${randomImage}`;
}

document.addEventListener("submit",randomBackgroundImage);

function randomloginImage(){
    const loginImage = document.querySelector(".randomloginimage");
    const images = ["00.jpg","01.jpg","02.jpg"];
    let randomNumtwo = Math.floor(Math.random()*images.length);
    let randomImagetwo = images[randomNumtwo]
    loginImage.src = `img/${randomImagetwo}`;
    }

randomloginImage()
