/* var score = 0; 
for(var i=0; i < questions.length; i++){
    var response = window.prompt(questions[i].prompt) 
    if(response == questions[i].answer){ 
        score++;
        alert("You got it!")
    } else {
        alert("WRONGGG!");
    }
}
alert("Your score was " + score + "/" + questions.length) */

const quizQuestions = [
    {
        question: "What color is the book '1Q84' by Haruki Murakami?", 
        select: ["Green", "Black", "Red", "White"],
        answer: 3
    },
    {
        question: "Who is Anton Chigurh?",
        select: ["A policeman", "A milkman", "An assassin", "An optometrist"],
        answer: 2
    },
    {
        question: "In Neil Gaiman's 'Sandman' who are the 3 Nightmares?" 
        select: ["Gorf, Hulpert & Brega", "Corinthian, Fiddler's Green, & Gault","Terry, Howard & Ryan", "Omega, Alomar, & Torson"],
        answer: 2
    },
];

function createQuiz(questions, quizContainer, resultsContainer, submitBtn){
    }
    function showQuestions(questions, quizContainer){
        var output = [];
        var answers; 
        for(var i=0; i < questions.length; i++){
            answers = []
            for(letter in questions[i].answers){
                answers.push(
                    '<label>'
                        + '<input type="radio" name="question'+i+'" value="'+letter+'">'
                        + letter + ': '
                        + questions[i].answers[letter]
                    + '</label>'
                );
            }
        output.push(
            '<div class="question">' + questions[i].question + '</div>',
            + '<div class="answers">'+ answers.join('') + '</div>'
            );
        }
        quizContainer.innerHTML = output.join('');
    }

    function showScore(questions, quizContainer, resultsContainer){
    }


// submit functions to show results 
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




/*
- I want to trigger a set of questions when a user hits the start button
- I want to loop through all questions in the array
- I want to get the number of the questions answered correctly
- When the first question is clicked I want a timer to start


- I want to show a score of correct questions vs. incorrect questions (results)
- I need a place to put the quiz, space for results, and a button
- I need to store output and answer choices */