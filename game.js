document.addEventListener("DOMContentLoaded", function() {
    let guessButton = document.getElementById("guessButton");
    guessButton.addEventListener("click", checkGuess);
});

function checkGuess() {
    let randomNumber = Math.floor(Math.random() * 10) + 1;
    let guessInput = document.getElementById("guessInput");
    let message = document.getElementById("message");

    let guess = parseInt(guessInput.value);
    guessInput.value = ""; // Clear the input field

    if (isNaN(guess)) {
        message.textContent = "Invalid input. Please enter a valid number.";
    } else if (guess === randomNumber) {
        message.textContent = "Congratulations! You guessed the correct number.";
    } else if (guess < randomNumber) {
        message.textContent = "Too low. Guess a higher number.";
    } else {
        message.textContent = "Too high. Guess a lower number.";
    }
}