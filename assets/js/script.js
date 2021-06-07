var timer;
const startButton = document.querySelector("#start-button");
const questionCard = document.querySelector(".question-card");

var questionArray = [
  {
    question: "What is JSON?",
    ansA: "Jonathan's Sushi Order Naturally",
    ansCorrect: "Javascript Object Notation",
    ansC: "Jordans shot on net",
  },
  {
    question: "who?",
    ansA: "a",
    ansB: "b",
    ansC: "c",
  },
  {
    question: "who?",
    ansA: "a",
    ansB: "b",
    ansC: "c",
  },
];

var question1 = questionArray[0].question;

startButton.addEventListener("click", function () {
  startButton.style.display = "none";
  questionCard.style.visibility = "visible";
});

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
