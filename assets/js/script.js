const startButton = document.querySelector("#start-button");
const questionCard = document.querySelector(".question-card");
const buttonA = document.querySelector("#btnA");
const buttonB = document.querySelector("#btnB");
const buttonC = document.querySelector("#btnC");
const questionEl = document.querySelector("#question");
const timeEl = document.querySelector("#time-remaining");
const answerMessage = document.querySelector("#message");
let secondsLeft = 30;

var questionArray = [
  {
    question: "What is JSON?",
    ansA: "Jonathan's Sushi Order Naturally",
    ansB: "Javascript Object Notation",
    ansC: "Jordans shot on net",
  },
  {
    question: "who?",
    ansA: "a",
    ansB: "b",
    ansC: "c",
  },
  {
    question: "what?",
    ansA: "a",
    ansB: "b",
    ansC: "c",
  },
];

function startTimer() {
  let timerInterval = setInterval(function () {
    secondsLeft--;
    timeEl.textContent = secondsLeft;
    if (secondsLeft <= 0) {
      timeEl.textContent = "";
      clearInterval(timerInterval);
      questionCard.innerHTML = `<p>times up! thanks for playing!</p>`;
    }
  }, 1000);
}

startButton.addEventListener("click", function () {
  startButton.style.display = "none";
  questionCard.style.visibility = "visible";
  startTimer();
  runTimedQuiz();
});

function runTimedQuiz() {
  questionOne();
}

function questionOne() {
  questionEl.textContent = questionArray[0].question;
  buttonA.textContent = questionArray[0].ansA;
  buttonB.textContent = questionArray[0].ansB;
  buttonC.textContent = questionArray[0].ansC;
  buttonA.onclick = function () {
    secondsLeft -= 2;
    answerMessage.style.color = "red";
    answerMessage.textContent = "incorrect!";
    setTimeout(function () {
      answerMessage.textContent = "";
    }, 2000);
  };
  buttonB.onclick = function () {
    answerMessage.style.color = "green";
    answerMessage.textContent = "correct!";
    setTimeout(function () {
      answerMessage.textContent = "";
    }, 1000);
    questionTwo();
  };
  buttonC.onclick = function () {
    secondsLeft -= 2;
    answerMessage.style.color = "red";
    answerMessage.textContent = "incorrect!";
    setTimeout(function () {
      answerMessage.textContent = "";
    }, 2000);
  };
}

function questionTwo() {
  questionEl.textContent = questionArray[1].question;
  buttonA.textContent = questionArray[1].ansA;
  buttonB.textContent = questionArray[1].ansB;
  buttonC.textContent = questionArray[1].ansC;
  buttonA.onclick = function () {
    secondsLeft -= 2;
    answerMessage.style.color = "red";
    answerMessage.textContent = "incorrect!";
    setTimeout(function () {
      answerMessage.textContent = "";
    }, 2000);
  };
  buttonC.onclick = function () {
    answerMessage.style.color = "green";
    answerMessage.textContent = "correct!";
    setTimeout(function () {
      answerMessage.textContent = "";
    }, 1000);
    questionTwo();
  };
  buttonB.onclick = function () {
    secondsLeft -= 2;
    answerMessage.style.color = "red";
    answerMessage.textContent = "incorrect!";
    setTimeout(function () {
      answerMessage.textContent = "";
    }, 2000);
  };
}

function questionThree() {
  questionEl.textContent = questionArray[2].question;
  buttonA.textContent = questionArray[2].ansA;
  buttonB.textContent = questionArray[2].ansB;
  buttonC.textContent = questionArray[2].ansC;
}

// function runQuiz() {
//   let i = 0;
//   questionCard.innerHTML = `
//             <p>Question ${i + 1}: ${questionArray[i].question}</p>
//             <div class="buttons">
//                 <button id="btn1"><span id="choiceA">a) ${
//                   questionArray[i].ansA
//                 }</span></button>
//                 <button id="btn2"><span id="choiceB">b) ${
//                   questionArray[i].ansCorrect
//                 }</span></button>
//                 <button id="btn3"><span id="choiceC">c) ${
//                   questionArray[i].ansC
//                 }</span></button>
//             </div>
//             `;
//   let correctAns = document.getElementById("btn2");
//   correctAns.onclick = function () {
//     questionCard.innerHTML = "<p>correct!</p>";
//   };
// }

/*
populate();

function Quiz(questions) {
    this.score = 0;
    this.questions = questions;
    this.questionIndex = 0;
}

Quiz.prototype.getQuestionIndex = function() {
    return this.questions[this.questionIndex];
}

Quiz.prototype.guess = function(answer) {
    if(this.getQuestionIndex().isCorrectAnswer(answer)) {
        this.score++;
    }

    this.questionIndex++;
}

Quiz.prototype.isEnded = function() {
    return this.questionIndex === this.questions.length;
}


function Question(text, choices, answer) {
    this.text = text;
    this.choices = choices;
    this.answer = answer;
}

Question.prototype.isCorrectAnswer = function(choice) {
    return this.answer === choice;
}


function populate() {
    if(quiz.isEnded()) {
        showScores();
    }
    else {
        // show question
        var element = document.getElementById("question");
        element.innerHTML = quiz.getQuestionIndex().text;

        // show options
        var choices = quiz.getQuestionIndex().choices;
        for(var i = 0; i < choices.length; i++) {
            var element = document.getElementById("choice" + i);
            element.innerHTML = choices[i];
            guess("btn" + i, choices[i]);
        }

        showProgress();
    }
};

function guess(id, guess) {
    var button = document.getElementById(id);
    button.onclick = function() {
        quiz.guess(guess);
        populate();
    }
};


function showProgress() {
    var currentQuestionNumber = quiz.questionIndex + 1;
    var element = document.getElementById("progress");
    element.innerHTML = "Question " + currentQuestionNumber + " of " + quiz.questions.length;
};

function showScores() {
    var gameOverHTML = "<h1>Result</h1>";
    gameOverHTML += "<h2 id='score'> Your scores: " + quiz.score + "</h2>";
    var element = document.getElementById("quiz");
    element.innerHTML = gameOverHTML;
};


var questions = [
    new Question("question1?", ["a", "b","c", "d"], "a"),
    new Question("question2?", ["a", "b", "c", "d"], "b"),
    new Question("question3?", ["a", "b","c", "d"], "d"),
    new Question("question4?", ["a", "b", "c", "d"], "a"),
    new Question("question5", ["a", "b", "c", "d"], "c")
];


var quiz = new Quiz(questions);*/
