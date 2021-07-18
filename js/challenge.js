const countDisplay = document.getElementById("counter");
const minusBtn = document.getElementById("minus");
const plusBtn = document.getElementById("plus");
const heartBtn = document.getElementById("heart");
const pauseBtn = document.getElementById("pause");
const likes = document.getElementsByClassName("likes");
const li = document.createElement("li");
const p = document.createElement("p");
const commentForm = document.getElementById("comment-form");
const commentList = document.querySelector("#list");

let intervalId = 0;
let count = 0;
let btnCounterArr = [];
let pauseCheck = false;

//EventListners
minusBtn.addEventListener("click", countDown);
plusBtn.addEventListener("click", countUp);
heartBtn.addEventListener("click", CaptureState);
pauseBtn.addEventListener("click", pauseFunc);
commentForm.addEventListener("submit",submitFun);

//Auto count up function
document.addEventListener("DOMContentLoaded", AutoCountUp);
function AutoCountUp(){
    pauseCheck === false ? intervalId = setInterval(countUp, 1000) : clearInterval(intervalId);
}

//Increment counts
function countUp(){
    count++;
    countDisplay.innerHTML = count;
}

//Decrement counts
function countDown(){
    count--;
    countDisplay.innerHTML = count;
}

//Capture count state with like btn
function CaptureState(){
    let CountNum = countDisplay.innerHTML;
    let btnCounter = 0;
    btnCounterArr.push(CountNum);
    for (let i = 0; i < btnCounterArr.length; i++) {
        if(btnCounterArr[i] === CountNum)
        btnCounter++;
    }
likes[0].appendChild(li);
likes[0].children[0].innerHTML = `${CountNum} has been liked ${btnCounter} times`;
}

//Pause counts / Restart counts
function pauseFunc(){
    if(pauseCheck === false){
        disables(true);
        AutoCountUp();
        pauseBtn.innerHTML = "restart";
    } else {
        disables(false);
        AutoCountUp();
        pauseBtn.innerHTML = "pause";
    }
}

//Disable buttons
function disables(a){
    pauseCheck = a;
    minusBtn.disabled = a;
    plusBtn.disabled = a;
    heartBtn.disabled = a;
    submit.disabled = a;
}

//Display comments
function submitFun(e){
    e.preventDefault();
    p.innerHTML = document.getElementById("comment-input").value;
    commentList.appendChild(p);
    document.getElementById("comment-input").value = "";
}