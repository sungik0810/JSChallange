
var thisfilefullname = String(document.URL.substring(document.URL.lastIndexOf('/') + 1, document.URL.length));


if(thisfilefullname == "id.html" || thisfilefullname == "id.html?"){
    
    
    
    
    
    function randomBackgroundImage(){
    const mainbackgroundImage = document.querySelector(".mainrandombackgroundimage");
    const secondbackgroundImage = document.querySelector(".secondrandombackgroundimage");
    const images = ["00.jpg","01.jpg","02.jpg"];
    let randomNum = Math.floor(Math.random()*images.length);
    let randomImage = images[randomNum]
    mainbackgroundImage.src = `img/${randomImage}`;
    secondbackgroundImage.src = `img/${randomImage}`;
    }
    //document.addEventListener("submit",randomBackgroundImage);
    randomBackgroundImage();
} else if(thisfilefullname !== "id.html" ){
    
    
    function randomloginImage(){
        const loginImage = document.querySelector(".randomloginimage");
        const images = ["03.jpg","04.jpg","05.jpg","06.jpg"];
        let randomNumtwo = Math.floor(Math.random()*images.length);
        let randomImagetwo = images[randomNumtwo]
        loginImage.src = `img/${randomImagetwo}`;
        }
     randomloginImage()
    }
