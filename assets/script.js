var questions = [
    {
        prompt: "What color is the book '1Q84' by Haruki Murakami?\(a) green\n(b) black\n\(c) white",
        answer: "c"
    },
    {
        prompt: "Who is Anton Chigurh?\(a) a policeman\n(b) an assassin\n\(c) a milkman",
        answer: "b"
    },
    {
        prompt: "In Neil Gaiman's 'Sandman' who are the 3 nightmares?\(a) Gorf, Hulpert & Brega\n(b) Corinthian, Fiddler's Green, & Gault\n\(c) Terry, Howard & Ryan",
        answer: "b"
    },
]
console.log(alert)

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

function createQuiz(questions, quizContainer, resultsContainer, submitBtn){
    }
    function showQuestions(questions, quizContainer){
    function showResults(questions, quizContainer, resultsContainer){
        showQuestions(questions, quizContainer);
        subtmitButton.onclick - function(){
            showResults(questions, quizContainer, resultsContainer);
        }
    }
        var output = [];
        var answers; 
        for(var i=0; i < questions.length; i++){
            answers = []
            for(a in questions[i].answers){
                answers.push(

                )
            }

    }

    function showScore(questions, quizContainer, resultsContainer){
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