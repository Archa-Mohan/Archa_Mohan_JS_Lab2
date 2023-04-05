function Quiz(questions) {
  this.score = 0;
  this.questions = questions;
  this.qNo = 0;
}

function Questions(question, options, answer) {
  this.question = question;
  this.options = options;
  this.answer = answer;
}

Quiz.prototype.isEnded = function () {
  return this.qNo === this.questions.length;
};

Quiz.prototype.getQuestionIndex = function () {
  return this.questions[this.qNo];
};

Quiz.prototype.checkAnswer = function (option) {
  if (this.getQuestionIndex().isCorrect(option)) {
    this.score++;
  }
  if (quiz.isEnded) {
    this.qNo++;
  }
}

Questions.prototype.isCorrect = function (option) {
  return this.answer === option;
}

function showScores() {
  let result = "<h1>Result</h1>"
  result += "<h2> Your score is " + quiz.score + " and mark percentage is " + (quiz.score / questions.length * 100) + "&#37" + ".</h2>"
  let quizEle = document.getElementById("quiz")
  quizEle.innerHTML = result
}

function handleOptionClicked(btnNumber, option) {
  let btn = document.getElementById(btnNumber);
  btn.onclick = function () {
    quiz.checkAnswer(option)
    loadQuestions()
  }
}

function showProgress() {
  let curr = quiz.qNo + 1
  let progress = document.getElementById("progress");
  progress.innerHTML = `Question ${curr} of ${quiz.questions.length}`
}

function loadQuestions() {
  if (quiz.isEnded()) {
    showScores();
  } else {
    let questionTitle = document.getElementById("question");
    questionTitle.innerHTML = quiz.getQuestionIndex().question;
    let options = quiz.getQuestionIndex().options;
    for (let i = 0; i < options.length; i++) {
      let optnBtn = document.getElementById("choice" + i);
      optnBtn.innerHTML = options[i];
      handleOptionClicked("btn" + i, options[i]);
    }
    showProgress();
  }
}

let questions = [
  new Questions(
    "The capital of Andhra Pradesh is ",
    ["Amaravati", "Shimla", "Ranchi", "Kanpur"],
    "Amaravati"
  ),
  new Questions(
    "What color eyes do most humans have?",
    ["Black", "Green", "Blue", "Brown"],
    "Brown"
  ),
  new Questions(
    "Which planet is the hottest in the solar system?",
    ["Earth", "Venus", "Mercury", "Mars"],
    "Venus"
  ),
  new Questions(
    "Which is the smallest country in the world?",
    ["Rome", "Vatican City", "Maldives", "Barbados"],
    "Vatican City"
  ),
  new Questions(
    "How many hearts does an octopus have?",
    ["1", "2", "3", "4"],
    "3"
  ),
];

let quiz = new Quiz(questions);

loadQuestions();
