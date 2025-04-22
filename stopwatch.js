let timer;
let counts = 0;
let seconds = 0;
let minutes = 0;
let hours = 0;
let isRunning = false;

const hoursDisplay = document.getElementById('hours');
const minutesDisplay = document.getElementById('minutes');
const secondsDisplay = document.getElementById('seconds');
const countsDisplay = document.getElementById('counts');



const startTimer = ()=>{
    if(!isRunning){
      //  resetTimer();
        isRunning = true;
        timer = setInterval(updateTime,10);
    }
}
const stopTimer= ()=>{
    if(isRunning){
        clearInterval(timer);
        isRunning = false;
    }
}
const resumeTimer =()=>{
    if(!isRunning && (hours > 0 || minutes > 0 ||seconds > 0 || counts > 0))
    {
        isRunning=true;
        timer = setInterval(updateTime, 10);
    }
}
const resetTimer =()=>{
    clearInterval(timer);
    isRunning = false;
    hours = 0;
    minutes = 0;
    seconds = 0;
    counts = 0;
    displayTime();
   
    startTimer();
    // isRunning = true;
    // timer =setInterval(updateTime, 10);
    //displayTime();
}
function updateTime(){
    counts++;
    if(counts === 100)
    {   
        counts = 0;
        seconds++;
        if(seconds === 60)
        {
            seconds =0;
            minutes++;
            if(minutes === 60)
            {
                minutes = 0;
                hours++;
            }
        }
    }
    displayTime();
}
function displayTime(){
    hoursDisplay.textContent = hours < 10 ? '0' +hours : hours;
    minutesDisplay.textContent = minutes < 10 ? '0' + minutes :minutes;
    secondsDisplay.textContent = seconds < 10 ? '0' +seconds : seconds;
    countsDisplay.textContent = counts < 10 ? '0' +counts :counts
}
document.getElementById('start').addEventListener('click',startTimer);
document.getElementById('stop').addEventListener('click',stopTimer);
document.getElementById('reset').addEventListener('click',resetTimer);
document.getElementById('resume').addEventListener('click',resumeTimer);