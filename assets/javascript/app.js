$(document).ready(function() {
  
  //Variables
  
  // An array of objects that hold each question, answer options, answers, and correct answer image
  var questionsAndAnswers = [{
    question: "What type of farm does Dwight own?",
    answer: ["A Beetle Farm", "An Artichoke Farm", "A Beet Farm", "A Bumblebee Farm"],
    correct: "2",
    image: ("assets/images/dwight_beets.png")
  }, {
    question: "What name did Pam and Angela fight over for their babies?",
    answer: ["Charles", "Phillip", "William", "Ace"],
    correct: "2",
    image: ("assets//images/pamandangela.jpg")
  }, {
    question: "What resturant is Pam barred from for Life?",
    answer: ["Chilis", "Fridays", "Applebees", "TGIFs"],
    correct: "0",
    image: ("assets//images/pamandangela.jpg")
  }, {
    question: "Which of Angela's cats does Dwight freeze?",
    answer: ["Sparkles", "Sprinkles", "Fluffy", "Cupcake"],
    correct: "1",
    image: ("assets//images/angelaands.jpg")
  }];
  
  // User starts the game with zeros 
  var correctAnswers = 0;
  var incorrectAnswers = 0;
  var unansweredQuestions = 0;
  var timeRemaining = 10;
  var intervalID;
  var questionIndex = 0;
  var answered = false // used to control the timer based on user answereing
  var correct;
  
  //==================== Function Delclarations ===============================
  function startGame() {
    console.log("The game has begun") 
    // reset user stats to zeros
    correctAnswers = 0;
    incorrectAnswers = 0;
    unansweredQuestions = 0;
    loadQuestionsAndAnswers()
    // 
    $('.startButton').remove();
  }
  
  // 
  function loadQuestionsAndAnswers () { 
    answered = false; // When false the question timer runs
    timeRemaining = 10; // Reset time remaining to 10 seconds
    intervalID = setInterval(timer, 1000); 
    if (answered === false) {
      timer();
    }
    
    correct = questionsAndAnswers[questionIndex].correct;
    var question = questionsAndAnswers[questionIndex].question;
    
    $('.question-display').html(question);
    for (var i = 0; i < 4; i++) {
      var answer = questionsAndAnswers[questionIndex].answer[i];
      $('.answer-display').append('<h4 class= answersAll id=' + i + '>' + answer + '</h4>');
    }
    
    $("h4").click(function () {
      var id = $(this).attr('id');
      if(id === correct) {
        answered = true; // This flips the timer off
        $('.question-display').text("The answer is:" + questionsAndAnswers[questionIndex].answer[correct]);
        // calls the correct answer function
        correctAnswer();
      } else {
        answered = true; // This flips the timer off
        $('question-display').text("Your answer was : " + questionsAndAnswers[questionIndex].answer[id] + "but thats wrong the right answer is" +  questionsAndAnswers[questionIndex].answer[correct]);
        // calls the wrong answer function 
        incorrectAnswer();
      }
    });
  }
  
  // 
  function timer() {
    if (timeRemaining === 0) {
      answered = true;
      clearInterval(intervalID);
      $('.question-display').text("THE CORRECT ANSWER IS: " + questionsAndAnswers[questionIndex].answer[correct]);
      unansweredQuestion();
    } else if (answered === true) {
      clearInterval(intervalID);
    } else {
      timeRemaining--;
      $('.timeRemaining').text('YOU HAVE ' + timeRemaining + ' SECONDS TO CHOOSE');
    }
  };
  
  // Function gets called when a user answers correctly
  function correctAnswer() {
    //increments correct answers when this is called
    correctAnswers++;
    console.log(correctAnswers)
    // Replace the time remaining with a message
    $('.timeRemaining').text("YOU ARE CORRECT").css({'color': '#3D414F'});
    resetRound();
  };
  
  // Function gets called when a user answers incorrectly 
  function incorrectAnswer() {
    incorrectAnswers++;
    console.log(incorrectAnswers)
    // Replace the time remaining with a message
    $('.timeRemaining').text("YOU ARE INCORRECT").css({'color': '#3D414F'});
    resetRound();
  };
  
  // Function that 
  function unansweredQuestion() {
    unansweredQuestions++;
    console.log(unansweredQuestions)
    $('.timeRemaining').text("YOU HAVE FAILED TO CHOOSE IN TIME!!").css({'color': '#3D414F'});
    resetRound();
  };
  
  
  // Function to reset to a new round
  function resetRound() {
    $('.answersAll').remove();
    $('.answer-display').append('<img class=answerImage width="150" height="150" src="' + questionsAndAnswers[questionIndex].image + '">');
    questionIndex++ // 
    if (questionIndex < questionsAndAnswers.length) {
      setTimeout(function () {
        loadQuestionsAndAnswers();
        $('.answerImage').remove();
      }, 5000); // Removes previous answer image
    } else { setTimeout(function() {
                $('.question').remove(); // removes previous question
                $('.timeRemaining').remove(); // removes previous time remaining
                $('.answerImage').remove(); // removes previous image
                $('.answers').append('<h4 class= answersAll end>CORRECT ANSWERS: ' + correctAnswers + '</h4>');
                $('.answers').append('<h4 class= answersAll end>INCORRECT ANSWERS: ' + incorrectAnswers + '</h4>');
                $('.answers').append('<h4 class= answersAll end>UNANSWERED QUESTIONS: ' + unansweredQuestions + '</h4>');
                setTimeout(function() {
                  location.reload(); //method reloads the current resource, like the Refresh button.
                }, 7000);
            }, 5000);
          }
        };

$('.startButton').on("click",function () {
  startGame();
});


}); // closes the document ready function


