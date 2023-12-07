// global (to refer to outside of functions)
let correctAnswers = 0;
let timerStart = 100;
let userScore = 0;
let quizTimer; // open variable
let scoreBoard = [];
let userSave;
let currentQuestion;
let currentQuestionIndex = 0;

const timePenalty = 10;

// questions/multiple choice arrays
const questions = [
    {
        question: "What color is the book '1Q84' by Haruki Murakami?", 
        choice: ["Green", "Black", "Red", "White"],
        answer: 3
    },
    {
        question: "Who is Anton Chigurh?",
        choice: ["A policeman", "A milkman", "An assassin", "An optometrist"],
        answer: 2
    },
    {
        question: "In Neil Gaiman's 'Sandman' who are the 3 Nightmares?", 
        choice: ["Gorf, Hulpert, & Brega", "Corinthian, Fiddler's Green, & Gault","Terry, Howard & Ryan", "Omega, Alomar, & Torson"],
        answer: 2
    },
    {
        question: "In Netflix's 'Daredevil', who is Matt Murdock's legal partner?", 
        choice: ["Michael", "Hubert", "Foggy", "Franklin"],
        answer: 3
    },
    // add more questions here
];

function startQuiz() {
    const quizBtn = document.getElementById("start-btn")
    quizBtn.addEventListener("click", function(){startQuiz})
    currentQuestionIndex = 0;
    showQuestion();
    startTimer();
}

function startTimer(){
    quizTimer = setInterval(function () {
        timerStart--;
        updateTimer();

    if(timerStart <= 0) {
        clearInterval(quizTimer)
        endQuiz();
    }
}, 1000);
}

function updateTime(){
    const timeDisplay = document.getElementById("time-display")
}

function showQuestion() {
    const quizContainer = document.getElementById("quiz-container");
    quizContainer.innerHTML = "";

    const currentQuestion = questions[0];
    const questionElement = document.createElement("div");
    questionElement.textContent = currentQuestion.question;

    const choiceContainer = document.createElement("choice-container");
    currentQuestion.choice.forEach((choice, index) => {
        const choiceButton = document.createElement("button");
        choiceButton.textContent = choice;
        choiceButton.addEventListener("click", function(){checkAns}(index))
        choiceContainer.appendChild(choiceButton);
    });

    quizContainer.appendChild(questionElement);
    quizContainer.appendChild(choiceContainer);
}

    /* const questionHeading = document.createElement('h2');
    questionHeading.textContent = questions[currentQuestionIndex].question // topdown order of questions
    
    quiztionContainer.appendChild(questionHeading);
    
    for (let i = 0; i < questions[currentQuestionIndex].choice.length; i++) {
    const choiceBtn = document.createElement("button");
    choiceBtn.textContent = questions[currentQuestionIndex].choice[i];
    choiceBtn.addEventListener("click", () => checkAns(i));
    questionContainer.appendChild(choiceBtn);   
    }
}*/

// answer check + score/penalty
function checkAns(userChoice){
    if (userChoice === questions[currentQuestionIndex].answer) {
        correctAnswers++;
        userScore == 10; // adds score based on boolean = true
    } else {
        userScore -= timePenalty;
    }
    incrQuestion();    
}

// +1 question after being answered or end quiz
function incrQuestion(){
    currentQuestionIndex++;
    if (currentQuestion < questions.length) {
        showQuestion();
    } else {
        endQuiz();
    }
}

function endQuiz() {
    // if no time left, endQuiz
    // if no more questions, endQuiz
    // on endQuiz show listUsers
    console.log("endQuiz")// address HTML/CSS first
}

function gameOver(){
    listUsers();
    saveResults();
}

function saveResults(){
    const userSig = document.getElementById("input-initials").value; 
    const userResult = {
        initials: userSig,
        score: userScore,
    };
    localStorage.setItem("results", JSON.stringify(userResult));
}

function loadResults(){
    const finalResults = localStorage.getItem("results");
    const userResult = JSON.parse(userResultString);
    if (userResult){  
        scoreBoard.push(finalResults);
        listScore();
    };   
}

function listScore(){
    const scoreContainer = document.getElementById("score-board");
    scoreContainer.innerHTML = "";

    for(const user of scoreBoard) {
        const userElement = document.createElement("div");
        userElement.textContent = "";
    }
    // need to create <ul> 
    // need to create <li>
    // need to enter initials/save score
    // play again <btn>
    
    // getting a handle on this div
    // scoreContainer.textContent = scoreBoard

function listUsers(){
    const userContainer = document.getElementById("user-container");
    userContainer.innerHTML = "";
}




}










    


/* const choices = document.querySelectorAll(".choice");
    choices.forEach((choice, index) => {
        choice.textContent = questions[currentQuestion].choice[index];
    });


/* submit functions to show results 
    function showResults(questions, quizContainer, resultsContainer){
        showQuestions(questions, quizContainer);
        subtmitButton.onclick - function(){
            showResults(questions, quizContainer, resultsContainer);
        }
       
    showQuestions(questions, quizContainer);
    submitBtn.onclick = function(){
        showResults(questions, quizContainer, resultsContainer);
    }
} 









/* PSEUDO
- I want to trigger a set of questions when a user hits the start button
- I want to loop through all questions in the array
- I want to get the number of the questions answered correctly
- When the first question is clicked I want a timer to start

- I want to show a score of correct questions vs. incorrect questions (results)
- I need a place to put the quiz, space for results, and a button
- I need to store output and answer choices */





