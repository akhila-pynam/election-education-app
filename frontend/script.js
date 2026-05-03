function checkAnswers() {
let score = 0;

let q1 = document.getElementById("q1").value.trim();
let q2 = document.getElementById("q2").value.trim().toLowerCase();

if (q1 === "18") score++;
if (q2.includes("election commission")) score++;

document.getElementById("result").innerText = "Score: " + score + "/2";
}
