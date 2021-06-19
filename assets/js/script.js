const startButton = document.querySelector("#start-button");
const questionCard = document.querySelector(".question-card");
const buttonA = document.querySelector("#btnA");
const buttonB = document.querySelector("#btnB");
const buttonC = document.querySelector("#btnC");
const questionEl = document.querySelector("#question");
const timeEl = document.querySelector("#time-remaining");
const answerMessage = document.querySelector("#message");
const userScoreEl = document.querySelector(".user-score");
const quizContainer = document.querySelector("#quiz");

let secondsLeft = 20;
let userScore = 0;
let currentQuestion = 0;

var questionArray = [
  {
    question: "What is JSON?",
    answers: [
      "Jonathan's Sushi Order Naturally",
      "Javascript Object Notation",
      "Jordans shot on net",
    ],
    ansValue: 1,
  },
  {
    question: "What are var, const, and let?",
    answers: ["Ways to name a variable", "Regular Expressions", "Operators"],
    ansValue: 0,
  },
  {
    question: "What is the DOM?",
    answers: [
      "Division Or Multiplication",
      "Digest Oats More",
      "Document Object Model",
    ],
    ansValue: 2,
  },
  {
    question: "Which of the following is a javascript runtime environment?",
    answers: ["Node.js", "MySQL", "React"],
    ansValue: 0,
  },
  {
    question:
      "Which of the following is the most popular design pattern for building web servers?",
    answers: ["NoSQL", "ORM", "Model View Controller (MVC)"],
    ansValue: 2,
  },
];

function startTimer() {
  let timerInterval = setInterval(function () {
    secondsLeft--;
    timeEl.textContent = secondsLeft;
    if (secondsLeft <= 0) {
      timeEl.textContent = "";
      clearInterval(timerInterval);
      endPrompt();
    }
  }, 1000);
}

startButton.addEventListener("click", function () {
  startButton.style.display = "none";
  questionCard.style.visibility = "visible";
  userScoreEl.textContent = "User score: " + userScore;
  startTimer();
  populateQuestion(currentQuestion);
  //display score
});

function endPrompt() {
  questionCard.style.visibility = "hidden";
  quizContainer.innerHTML = `
  <h2>Thank you for playing!</h2>
  <h3>Final score is ${userScore}</h3>
  <p> Please enter your initials </p>
  `;
  // function so save a list with user inits and sscore in a table
  // show user input for name
  // display highscore card
  // button for main page or refresh?
}

function nextQuestion() {
  if (currentQuestion > 4) {
    secondsLeft = 0;
  } else {
    userScoreEl.textContent = "User score: " + userScore;
    populateQuestion(currentQuestion);
  }
}

function populateQuestion(i) {
  questionEl.textContent = questionArray[i].question;
  buttonA.textContent = questionArray[i].answers[0];
  buttonB.textContent = questionArray[i].answers[1];
  buttonC.textContent = questionArray[i].answers[2];
  buttonA.onclick = function () {
    if (questionArray[i].ansValue == buttonA.value) {
      userScore += 20;
      answerMessage.style.color = "green";
      answerMessage.textContent = "correct!";
      setTimeout(function () {
        answerMessage.textContent = "";
      }, 1000);
      currentQuestion++;
      nextQuestion();
    } else {
      secondsLeft -= 2;
      answerMessage.style.color = "red";
      answerMessage.textContent = "incorrect!";
      setTimeout(function () {
        answerMessage.textContent = "";
      }, 2000);
      currentQuestion++;
      nextQuestion();
    }
  };
  buttonB.onclick = function () {
    if (questionArray[i].ansValue == buttonB.value) {
      userScore += 20;
      answerMessage.style.color = "green";
      answerMessage.textContent = "correct!";
      setTimeout(function () {
        answerMessage.textContent = "";
      }, 1000);
      currentQuestion++;
      nextQuestion();
    } else {
      secondsLeft -= 2;
      answerMessage.style.color = "red";
      answerMessage.textContent = "incorrect!";
      setTimeout(function () {
        answerMessage.textContent = "";
      }, 2000);
      currentQuestion++;
      nextQuestion();
    }
  };
  buttonC.onclick = function () {
    if (questionArray[i].ansValue == buttonC.value) {
      userScore += 20;
      answerMessage.style.color = "green";
      answerMessage.textContent = "correct!";
      setTimeout(function () {
        answerMessage.textContent = "";
      }, 1000);
      currentQuestion++;
      nextQuestion();
    } else {
      secondsLeft -= 2;
      answerMessage.style.color = "red";
      answerMessage.textContent = "incorrect!";
      setTimeout(function () {
        answerMessage.textContent = "";
      }, 2000);
      currentQuestion++;
      nextQuestion();
    }
  };
}

// function selectAnswer(e) {
//   let selectedButton = e.target
//   if (selectedButton.value )
// }

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
    questionThree();
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
  buttonB.onclick = function () {
    secondsLeft -= 2;
    answerMessage.style.color = "red";
    answerMessage.textContent = "incorrect!";
    setTimeout(function () {
      answerMessage.textContent = "";
    }, 2000);
  };
  buttonA.onclick = function () {
    answerMessage.style.color = "green";
    answerMessage.textContent = "correct!";
    setTimeout(function () {
      answerMessage.textContent = "";
    }, 1000);
    showResults();
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

function showResults() {
  secondsLeft = 0;
  document.querySelector("#quiz").innerHTML = `
  <img src="https://static.coindesk.com/wp-content/uploads/2021/04/dogecoin.jpg">
  `;
}
