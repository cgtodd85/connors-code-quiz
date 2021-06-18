const startButton = document.querySelector("#start-button");
const questionCard = document.querySelector(".question-card");
const buttonA = document.querySelector("#btnA");
const buttonB = document.querySelector("#btnB");
const buttonC = document.querySelector("#btnC");
const questionEl = document.querySelector("#question");
const timeEl = document.querySelector("#time-remaining");
const answerMessage = document.querySelector("#message");
let secondsLeft = 400;
let userScore = 0;

var questionArray = [
  {
    question: "What is JSON?",
    ansA: "Jonathan's Sushi Order Naturally",
    ansB: "Javascript Object Notation",
    ansC: "Jordans shot on net",
  },
  {
    question: "Question 2?",
    ansA: "not a",
    ansB: "not b",
    ansC: "answer c",
  },
  {
    question: "Question 3",
    ansA: "answer a",
    ansB: "not b",
    ansC: "not c",
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
