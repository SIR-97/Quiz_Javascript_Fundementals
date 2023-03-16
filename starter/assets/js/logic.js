// Get necessary elements from HTML
var startButton = document.getElementById("start");
var timeEl = document.getElementById("time");
var questionTitleEl = document.getElementById("question-title");
var choicesEl = document.getElementById("choices");
var feedbackEl = document.getElementById("feedback");
var initialsEl = document.getElementById("initials");
var submitButton = document.getElementById("submit");
var finalScoreEl = document.getElementById("final-score");


// Set up quiz questions
var questions = [
  {
  title: "What does JS stand for?",
  choices: ["Java Style", "JavaScript", "Just Saying"],
  answer: "JavaScript"
},
{
  title: "Which of the following is NOT a valid primitive data type in JavaScript?",
  choices: ["string", "number", "array"],
  answer: "array"
},
{
  title: "What is the difference between == and === in JavaScript?",
  choices: ["== performs type coercion while === does not", "== and === perform the same operation", "== is used for comparing numbers while === is used for comparing strings"],
  answer: "== performs type coercion while === does not"
},
{ title: "What is the purpose of the 'if' statement in JavaScript?",    
  choices: ["To declare a variable", "To define a function", "To control the flow of execution based on a condition"],
  answer: "To control the flow of execution based on a condition"
},
{
  title: "What is the purpose of the 'for' loop in JavaScript?",
  choices: ["To declare a function", "To control the flow of execution based on a condition", "To execute a block of code repeatedly"],
  answer: "To execute a block of code repeatedly"
},
];



// Function to start the quiz
startButton.addEventListener("click", startQuiz);
function startQuiz() {
  // Hide start screen and show questions screen
  document.getElementById("start-screen").classList.add("hide");
  document.getElementById("questions").classList.remove("hide");

  // Show first question
showQuestion();

}

var questionIndex = 0;

// Function to show a question
function showQuestion() {
  // Get current question
  var question = questions[questionIndex];

  // Set question title
  questionTitleEl.textContent = question.title;

  // Clear choices
  choicesEl.innerHTML = "";

  // Add choices
  for (var i = 0; i < question.choices.length; i++) {
    var choice = question.choices[i];
    var button = document.createElement("button");
    button.textContent = choice;
    button.setAttribute("data-answer", choice);
    button.addEventListener("click", checkAnswer);
    choicesEl.appendChild(button);
  }
    // Show feedback
    feedbackEl.classList.remove("hide");
  }

  // Function to check answer
function checkAnswer(event) {
  // Get selected answer and correct answer
  var selectedAnswer = event.target.getAttribute("data-answer");
  var correctAnswer = questions[questionIndex].answer;

  // Check if answer is correct
  if (selectedAnswer === correctAnswer) {
    // Show correct feedback
    feedbackEl.textContent = "Correct!";
  } else {
    // Show incorrect feedback and subtract time
    feedbackEl.textContent = "Incorrect!";
  
  }

  // Move to next question or end quiz
  if (questionIndex < questions.length - 1) {
    questionIndex++;
    showQuestion();
  } else {
    endQuiz();
  }
}