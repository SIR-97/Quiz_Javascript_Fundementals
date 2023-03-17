var highScores = JSON.parse(localStorage.getItem("highScores")) || [];
var highScoresList = document.getElementById("highscores");

for (var i = 0; i < highScores.length; i++) {
  var scoreItem = document.createElement("li");
  scoreItem.innerText = highScores[i].initials + " - " + highScores[i].score + " seconds!";
  highScoresList.appendChild(scoreItem);
};

var clearButton = document.getElementById("clear");
clearButton.addEventListener("click", function() {
  localStorage.clear();
  var highScoresList = document.getElementById("highscores");
  highScoresList.innerHTML = "";
});
