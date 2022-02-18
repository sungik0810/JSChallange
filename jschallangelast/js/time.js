const timeTagYearClass = document.querySelector(".year");
const timeTagDateClass = document.querySelector(".date");
const timeTagTimeClass = document.querySelector(".time");

function timer(){
let time = new Date
let getyear = String(time.getFullYear());
let getMonth = String(time.getMonth()+1).padStart(2,"0");
let getDate = String(time.getDate()).padStart(2,"0");
let getDay = time.getDay();
let day = ["일","월","화","수","목","금","토"];
for(let i=0; i<day.length; i++){
    if(getDay == i){
window["days"] = `${day[i]}`;
}
}
let getHour = String(time.getHours()).padStart(2,"0");
let getMinute = String(time.getMinutes()).padStart(2,"0");
let getSecond = String(time.getSeconds()).padStart(2,"0");

timeTagYearClass.innerText = `${getyear}`;
timeTagDateClass.innerText = `${getMonth}/${getDate} (${days})`;
timeTagTimeClass.innerText = `${getHour}:${getMinute}:${getSecond}`;
}
timer();
setInterval(timer, 1000);
