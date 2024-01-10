// Iteration 2: Generate 2 random number and display it on the screen
let numberBox1 = document.getElementById("number1");
let numberBox2 = document.getElementById("number2");

let randomNumber1 = Math.floor(Math.random() * 100);
let randomNumber2 = Math.floor(Math.random() * 100);

numberBox1.innerHTML = randomNumber1;
numberBox2.innerHTML = randomNumber2;

// Iteration 3: Make the options button functional
let greaterThan = document.getElementById("greater-than");
let equalTo = document.getElementById("equal-to");
let lesserThan = document.getElementById("lesser-than");
let score = 0;

greaterThan.addEventListener("click", function(){
    if(randomNumber1 > randomNumber2){
        score++;
        resetTime(timerId)
    } else {
        location.href = "./gameover.html";
    }
    randomNumber1 = Math.floor(Math.random() * 100);
    randomNumber2 = Math.floor(Math.random() * 100);
    numberBox1.innerHTML = randomNumber1;
    numberBox2.innerHTML = randomNumber2;
})

lesserThan.addEventListener("click", function(){
    if(randomNumber1 < randomNumber2){
        score++;
        resetTime(timerId)
    } else {
        location.href = "./gameover.html";
    }
    randomNumber1 = Math.floor(Math.random() * 100);
    randomNumber2 = Math.floor(Math.random() * 100);
    numberBox1.innerHTML = randomNumber1;
    numberBox2.innerHTML = randomNumber2;
})

equalTo.addEventListener("click", function(){
    if(randomNumber1 == randomNumber2){
        score++;
        resetTime(timerId)
    } else {
        location.href = "./gameover.html";
    }
    randomNumber1 = Math.floor(Math.random() * 100);
    randomNumber2 = Math.floor(Math.random() * 100);
    numberBox1.innerHTML = randomNumber1;
    numberBox2.innerHTML = randomNumber2;
})

// Iteration 4: Build a timer for the game
let time = 10;
let timer = document.getElementById("timer");
let timerId;

function startTimer(){
    time = 10;
    time.innerHTML = time;
    timerId = setInterval(function(){
        time--;
        if(time == 0){
            location.href = "./gameover.html";
        }
    timer.innerHTML = time;
    localStorage.setItem("gameScore", score);
    }, 1000)
}

startTimer();

function resetTime(timerId){
    clearInterval(timerId);
    startTimer();
}