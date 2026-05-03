function goToSteps() {
window.location.href = "steps.html";
}

function goToWhy() {
window.location.href = "why.html";
}

function goToQuiz() {
window.location.href = "quiz.html";
}

const questions = [
{ question: "What is voting age in India?", answer: "18" },
{ question: "Who conducts elections?", answer: "election commission" },
{ question: "Which ID is used?", answer: "voter id" }
];

let current = 0;
let score = 0;

function startQuiz() {
current = 0;
score = 0;
showQuestion();
}

function showQuestion() {
document.getElementById("question").innerText = questions[current].question;
document.getElementById("answer").value = "";
document.getElementById("result").innerText = "";
}

function nextQuestion() {
let ans = document.getElementById("answer").value.toLowerCase();

if (ans === questions[current].answer) score++;

current++;

if (current < questions.length) {
showQuestion();
} else {
document.getElementById("question").innerText = "Quiz Finished!";
document.getElementById("result").innerText =
"Score: " + score + "/" + questions.length;
}
}
