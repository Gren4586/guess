var winCount = 0;
var roundCount = 0;

var roundDisplay = document.getElementById('roundCounter');
var winDisplay = document.getElementById('winCounter');
var startButton = document.getElementById('start');

function shuffle() {
    let cardBox = document.getElementById('cards');

    /* Make a random card correct */
    for (const child of cardBox.children) {
        let rand = Math.floor(Math.random() * 10);

        if (rand === 5) {
            child.classList.add('correct');
            break;
        }
    }

    /* Add 'incorrect' class to all other cards */
    for (const kid of cardBox.children) {
        if (!kid.classList.contains('correct')) {
            kid.classList.add('incorrect');
        }
    }

    /* Hide start button */
    startButton.style.display('none');
}

startButton.addEventListener('click', shuffle, false);