var startButton = document.querySelector(".start-button")
console.log(startButton)
startButton.addEventListener('click',startGame)

 
var timeLeft = document.getElementById("timer");
var secondsLeft = 60;
//timer function
function countdown() {
        
    var timerInterval = setInterval(function () {

      secondsLeft--;
      timeLeft.textContent = "Time left: " + secondsLeft + " s";

        if (secondsLeft <= 0){
            clearInterval(timerInterval);
            timeLeft.textContent = "Time's up!!"; 
            finish.textContent = "Time's up !!";
            quizEnd();

            clearInterval(timerInterval);
            quizEnd();
            } 
}, 1000);
}



function startQuiz() {
    introEl.style.display = "none";
    questionsEl.style.display = "block";
    questionCount = 0;

    setTime();
    setQuestion();
}



// when click start button this function will go
function startGame () {
    document.querySelector(".quiz-intro").classList.add("hide")
    document.querySelector(".quiz-main").classList.remove("hide")

    countdown()

buildQuestioncard ()
}
var index=0
function buildQuestioncard () {
    var questionTitle = document.querySelector(".question-text")
    questionTitle.textContent = questions[index].title

    var questionButton = document.querySelector(".button-box");
questionButton.innerHTML = ""
    questions[index].choices.forEach(function(choice){
var button = document.createElement("button")
button.textContent = choice
button.setAttribute("value",choice)
button.onclick = function() {
    if(this.value !==questions[index].answer){
        console.log("wrong")
    }
    else{
        console.log('right')
    }
    index++
    buildQuestioncard ()
}
questionButton.appendChild(button)
    })

    

}


// questions for quiz
var questions = [
    {
        title:"What is the largest commercial aircraft ?",
        choices: ["airbus a380","boeing 747","airbus a319","boeing 777"],
        answer : "airbus a380"
    },
    {
        title:"What is another name for the boeing 787?",
        choices: ["dreamlifter","beluga","dreamliner","luxuryliner"],
        answer : "dreamliner"
    },
    {
        title:"How many wheels are on a boeing 747",
        choices: ["22","10","12","18"],
        answer : "18"
    },
    {
        title:"After touchdown on landing, panels are raised on top of the wings. These are called what?",
        choices: ["spoilers","airelons","winglets","flaps"],
        answer : "spoilers"
    },
    {
        title:"Which is the oldest airline in the world?",
        choices: ["Qantas","KLM Royal Dutch Airlines","Lufthansa","Delta"],
        answer : "KLM Royal Dutch Airlines"
    },   
]



