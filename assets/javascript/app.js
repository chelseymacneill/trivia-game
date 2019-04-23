$(document).ready(function() {

//Variables
var roundTime = 10000;
var questionTime = 2000;
var questions = ["How many miles between the Earth and Moon?", 
                 "What galaxy is the earth in?",
                 "What did scientist recently capture a picture of?"]



// When a user clicks on a button it should start a new game.
$("#start-button").click(function() {
console.log("This button will start the game");
// displays first question in the questions array
$("#question-display").text(questions[0]);
// calls the set timeout function that ends the round 
setTimeout(RoundTimeout, roundTime) 
// calls the function that displays new questions on an interval
setInterval(newQuestionTimer, questionTime)
});

// Function used to keep track of the round (is called when start button is pushed.)
function RoundTimeout() {
    $("#round-timer").text("Times Up")
};

// Have the new question timer display a new question that it grabs from an array on each interval (is called when start button is pressed)
function newQuestionTimer() {
    questionIndex = 1;
    $("#question-display").fadeIn().text(questions[questionIndex]);
    questionIndex = questionIndex < questions.length - 1 ? questionIndex + 1 : 0;
    };




// This needs to repeat until the timer runs out. 
// The start of the game starts a game round timer 30 seconds, a question timer, and displays the first question. 


// If the users chooses the correct answer they get a message that says correct and a picture or gif of the correct answer

// If the user chooses an incorrect answer they get a message saying they were wrong, what the right message was and a picture of the right answer.

// After the time runs up on that round the total wins, losses will be displayed along with a button asking if they want to play again. 

}); // closes the document ready function



  