// global (to refer to outside of functions)
// lexical scope: these variables can only function within curly braces
let correctAnswers = 0;
let timerStart = 100;
let userScore = 0;
let quizTimer; // open variable
let scoreBoard = JSON.parse(localStorage.getItem("results")) || [];
let userSave;
let currentQuestion;
let currentQuestionIndex = 0;

const timePenalty = 10;

// questions/multiple choice arrays
const questions = [
    {
        question: "Which of the following is not a primitive data type in JavaScript?", // question 0, etc.
        choice: ["Number", "Object", "String", "Boolean"],
        answer: 1
    },
    {
        question: "What does the “this” keyword refer to in JavaScript?",
        choice: ["Current function", "Global object", "Object belonging to function", "Parent object"],
        answer: 2
    },
    {
        question: "Which of the following is not a loop in JavaScript?", 
        choice: ["for", "while", "do ... while", "next"],
        answer: 3
    },
    {
        question: "Which JavaScript label catches all the values, except for the ones specified?",
        choice: ["catch", "label", "try", "default"],
        answer: 3
    },
    {
        question: "Which are the correct “if” statements to execute certain code if “x” is equal to 2?",
        choice: ["if(x 2)", "if(x=2)", "if(x==2)", "if(x !=2)"],
        answer: 2
    },
    {
        question: "How do you call the function named 'partyFunction'?",
        choice: ["partyFunction()", "call function partyFunction()", "call partyFunction()", "welike to partyFunction()"],
        answer: 0
    },
    {
        question: "How do you call the function named 'partyFunction'?",
        choice: ["partyFunction()", "call function partyFunction()", "call partyFunction()", "welike to partyFunction()"],
        answer: 0
    },
    // add more questions here
];

function hideInfobox(){
    const infobox = document.getElementById('infoBox');
    infobox.style.display = 'none';
    document.querySelector('.testyourmight h4').classList.remove('hidden');
}

function showQuizbox(){
    const quizbox = document.getElementById('quizBox');
    quizbox.style.display = 'block';
}

function startQuiz() {
    console.log("I got here!")
    correctAnswers = 0;
    userScore = 0;
    currentQuestionIndex = 0;
    hideInfobox();
    showQuizbox();
    showQuestion();
    startTimer();
}

// starts timer
function startTimer(){ 
    quizTimer = setInterval(function () {
        timerStart--;
        updateTime();
    if(timerStart <= 0) {
        clearInterval(quizTimer)
        endQuiz();
    }
}, 1000);
}

function updateTime(){
    const timeDisplay = document.querySelector(".seconds");
    timeDisplay.textContent = timerStart
}

function showQuestion() {
    const quizContainer = document.querySelector(".showquest");
    quizContainer.innerHTML = "";

    currentQuestion = questions[currentQuestionIndex];
  
    const questionElement = document.createElement("div");
    questionElement.textContent = currentQuestion.question;

    const choiceContainer = document.createElement("div");
    currentQuestion.choice.forEach((choice, index) => {
        const choiceButton = document.createElement("button");
        choiceButton.textContent = choice;
        choiceButton.addEventListener("click", function(){
            rankAns(index);
        });
        choiceContainer.appendChild(choiceButton);
    });
    quizContainer.appendChild(questionElement);
    quizContainer.appendChild(choiceContainer);
}

// +1 question after being answered or end quiz
function incrQuestion(){
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        showQuestion();
    } else {
        endQuiz();
    }
}

// answer check + score/penalty
function checkAns(userChoice){
    if (userChoice === currentQuestion.answer) {
        correctAnswers++;
        userScore += 10; // adds score based on boolean = true
    } else {
        userScore -= timePenalty;
        timerStart -= 10; // deducts time 
    }
    incrQuestion();    
}

function rankAns(index){
    checkAns(index);
    incrQuestion();
}

function endQuiz() {
    clearInterval(quizTimer);
    listScore();
    saveResults();

    const quizbox = document.getElementById('quizBox');
    quizbox.innerHTML = '';

    const finalScoreElement = document.createElement('div');
    finalScoreElement.textContent = 'Your Final Score: ' + userScore;
    quizbox.appendChild(finalScoreElement);

    const initialsContainer = document.createElement('div');
    initialsContainer.classList.add('input-initials');
    const initialsLabel = document.createElement('label');
    initialsLabel.textContent = 'Enter Your Initials:';
    const initialsInput = document.createElement('input');
    initialsInput.setAttribute('type', 'text');
    initialsInput.setAttribute('id', 'input-initials');
    initialsContainer.appendChild(initialsLabel);
    initialsContainer.appendChild(initialsInput);
    quizbox.appendChild(initialsContainer);

    const submitButton = document.createElement('button');
    submitButton.textContent = 'Submit';
    submitButton.addEventListener('click', function () {
        saveResults();
    });
    quizbox.appendChild(submitButton);
}

function saveResults(){
    const userSig = document.getElementById("input-initials").value; 
    const userResult = {
        initials: userSig,
        score: userScore,
    };
    scoreBoard.push(userResult);
    localStorage.setItem("results", JSON.stringify(scoreBoard));
}

function loadResults(){
    const finalResults = localStorage.getItem("results");
    const userResult = JSON.parse(results);
    if (userResult){  
        scoreBoard.push(finalResults);
        listScore();
    };   
}

function listScore(){
    const scoreContainer = document.getElementById("score-board");
   // scoreContainer.innerHTML = "";

    loadResults();

    for(const user of scoreBoard) {
        const userElmnt = document.createElement("div");
        userElmnt.textContent = 'User Score: ' + user.score;
        scoreContainer.appendChild(userElmnt);
    }
}

document.getElementById("startQuiz").addEventListener("click", startQuiz)