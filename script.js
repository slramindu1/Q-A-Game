const languages = ["HTML", "CSS", "JavaScript", "Python", "PHP"];
const correctAnswer = languages[Math.floor(Math.random() * languages.length)];

function checkGuess() {
    const userGuess = document.getElementById("guessInput").value.trim().toLowerCase();
    const resultElement = document.getElementById("result");

    if (userGuess === correctAnswer.toLowerCase()) {
        resultElement.textContent = `Correct! The answer is ${correctAnswer}.`;
        resultElement.style.color = "green";
    } else {
        resultElement.textContent = `Incorrect! Try again.`;
        resultElement.style.color = "red";
    }
}
