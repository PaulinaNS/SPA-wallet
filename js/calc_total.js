var card1 = document.querySelector("#card1");
var card2 = document.querySelector("#card2");
var card3 = document.querySelector("#card3");

let circle = document.querySelector('.basicCircle');
let radius = circle.r.baseVal.value;  //taking radius from circle
let circumference = radius * 2 * Math.PI; //formula for border

circle.style.strokeDasharray = `${circumference} ${circumference}`;
circle.style.strokeDashoffset = `${circumference}`;

function setProgress(percent) {
    const offset = circumference - percent / 100 * circumference;
    circle.style.strokeDashoffset = offset;
}
let circle1 = document.querySelector('.basicCircle1');


circle1.style.strokeDasharray = `${circumference} ${circumference}`;
circle1.style.strokeDashoffset = `${circumference}`;

function setProgress(percent) {
    const offset = circumference - percent / 100 * circumference;
    circle.style.strokeDashoffset = offset;
    circle1.style.strokeDashoffset = offset;
}

setProgress(0); //start with zero

function animateText(id, start, end, duration){
    let text = document.getElementById(id);
    let range = end - start;
    let minTimer = 50;
    let stepTime = Math.abs(Math.floor(duration / range));
    stepTime = Math.max(stepTime, minTimer);
    let startTime = new Date().getTime();
    let endTime = startTime + duration;
    let timer;

    function run(){
        let now = new Date().getTime();
        let remaining = Math.max((endTime - now) / duration, 0);
        let value = Math.round(end - (remaining * range));
        text.innerHTML = value + '$';
        if (value === end) {
            clearInterval(timer);
        }
    }
    timer = setInterval(run, stepTime);
    run();
}

function launchFC(){
    animateText('fText', 0, 4445, 1500);
    setProgress(85);
    return 'sucess';
}

function launchZero(){
    setProgress(0);
    setTimeout(launchFC,200);
}
function launchFC1(){
    animateText('fText1', 0, 935, 1500);
    setProgress(95);
    return 'sucess';
}

function launchZero1(){
    setProgress(0);
    setTimeout(launchFC1,200);
}



card1.addEventListener("click", launchZero );

card2.addEventListener("click", launchZero1 );


