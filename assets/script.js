function createQuiz(questions, quizContainer, resultsContainer, submitBtn){

    function showQuestions(questions, quizContainer){
        var output = [];
        var answers; 
        // for loop goes here?
    }

    function showScore(questions, quizContainer, resultsContainer){
    }

    showQuestions(questions, quizContainer);
    submitBtn.onclick = function(){
        showResults(questions, quizContainer, resultsContainer);
    }
}

var questions = [
    {
        prompt: "What color is the book 1Q84 by Haruki Murakami?\(a) green\n(b) black\n\(c) white",
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
var userscore = 0 // # of correct questions

for(var i=0; i < questions.length; i++){
    var select = window.prompt(questions[i].prompt) // loop X times per quetions in array
    if(select == questions[i].answer){
        userscore++;
        alert("You got it!")
    }else{
        alert("WRONGGG!");
        }
    }









/*
- I want to trigger a set of questions when a user hits the start button
- I want to loop through all questions in the array
- I want to get the number of the questions answered correctly
- When the first question is clicked I want a timer to start


- I want to show a score of correct questions vs. incorrect questions (results)
- I need a place to put the quiz, space for results, and a button
- I need to store output and answer choices