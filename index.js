var miliSconds=0;
var seconds=0;
var minutes=0;

var ms=document.getElementById("ms");
var s=document.getElementById("sec");
var min=document.getElementById("min");
var startButton = document.getElementById("start");
var pauseButton = document.getElementById("pause");
var resetButton = document.getElementById("reset");
var interval;



function start(){
    interval = setInterval(() => {
        startButton.disabled = true;
        miliSconds++;
        ms.innerHTML = miliSconds;
        if(miliSconds >=10){
            seconds++;
            s.innerHTML = seconds;
            miliSconds = 0;
            if(seconds >=60){
                minutes++;
                min.innerHTML=minutes; 
                seconds = 0;
            }
        }
    
    
    }, 100);
}
function pause(){
    clearInterval(interval);
    startButton.disabled = false;
}

function reset(){
    ms.innerHTML = 0;
    s.innerHTML = 0;
    min.innerHTML = 0;
    clearInterval(interval);
    if(startButton.disabled == true){
        startButton.disabled = false;
    
    }

}
// var count = 0;
// var interval;

// function timer(){
//     count++;
//     console.log(count);
// }

// interval = setInterval(timer, 1000);

// setTimeout(function(){
//     clearInterval(interval);
// }, 5000)

