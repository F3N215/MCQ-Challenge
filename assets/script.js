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
        question: "What color is the book '1Q84' by Haruki Murakami?", // question 0, etc.
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
    console.log("I got here!")
    correctAnswers = 0;
    userScore = 0;
    currentQuestionIndex = 0;
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

    // const currentQuestion = questions[currentQuestionIndex];
    currentQuestion = questions[currentQuestionIndex];
  
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

// +1 question after being answered or end quiz
function incrQuestion(){
    currentQuestionIndex++;
    if (currentQuestion < questions.length) {
        showQuestion();
    } else {
        endQuiz();
    }
}

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

function endQuiz() {
    clearInterval(quizTimer);
    // gameOver();
    listScore();
    saveResults();
    // endQuiz -> reset timer
    // if no more questions, endQuiz
    // on endQuiz show listUsers
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
    const userResult = JSON.parse(final);
    if (userResult){  
        scoreBoard.push(finalResults);
        listScore();
    };   
}

/* function listUsers(){
    const userContainer = document.getElementById("score-board");
    userContainer.innerHTML = "";
    for (const user of scoreBoard){
        const userElmnt = document.createElement("div");
        userElmnt.textContent

    }
} */

function listScore(){
    const scoreContainer = document.getElementById("score-board");
    scoreContainer.innerHTML = "";

    for(const user of scoreBoard) {
        const userElmnt = document.createElement("div");
        userElmnt.textContent = 'User Score: ' + user.score;
        scoreContainer.appendChild(scoreElmnt);
    }
}

    // need to create <ul> 
    // need to create <li>
    // need to enter initials/save score
    // play again <btn>
    
    // getting a handle on this div
    // scoreContainer.textContent = scoreBoard






// }

document.getElementById("startQuiz").addEventListener("click", startQuiz)






    


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





