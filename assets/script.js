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
var userscore = 0

for(var i=0; i < questions.length; i++){
    var select = window.prompt(questions[i].prompt)
    if(select == questions[i].answer){
        userscore++;
        alert("You got it!")
    }else{
        alert("WRONGGG!");
        }
    }








    
    /*
- I want to trigger a set of questions when a user hits the start button
- When the question appears I want a timer to start


- I want to show a score of correct questions vs. incorrect questions
- I want to start a timer when the question apepars