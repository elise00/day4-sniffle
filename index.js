var count = 1;

function handleSubmit(event) {
    var form = event.target;
    var elements = form.elements;
    var guess = elements.guess.value;
    var guessElement = elements.guess;
    console.log(guessElement.disabled, guessElement.name);
    var result = document.getElementById('result');

    result.textContent = 'You made a guess of ' + guess;

    var correct = 2;
    // if equal -> correct!
    if (guess === 2) {
        result.textContent = 'Correct!';
        result.class = 'correct';
    }
    // else if less than --> too low!
    if (guess < 2) {
        result.textContent = 'Too low!';
        result.class = 'low';
    }
    // else -> too high!
    if (guess > 2) {
        result.textContent = 'Too high!';
        result.class = 'high';
    }
}