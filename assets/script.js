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

var quizQuestions = [
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
            '<div class="question">' + questions{i}.question + '</div>'
            + '<div class="answers">'+ answers.join('') + '</div>'
            );
        }
        quizContainer.innerHTML = output.join('');
    }

    function showScore(questions, quizContainer, resultsContainer){
    }

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