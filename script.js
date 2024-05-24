var winCount = 0;
var roundCount = 0;

var roundDisplay = document.getElementById('roundCounter');
var winDisplay = document.getElementById('winCounter');
var startButton = document.getElementById('start');
var readyMsg = document.getElementById('go');

function shuffle() { /* Function to start new round upon hitting the 'Shuffle Cards' button */
    let cardBox = document.getElementById('cards');

    /* Make a random card correct */
    for (const child of cardBox.children) {
        let rand = Math.floor(Math.random() * 10);

        if (rand === 5) {
            child.classList.add('correct');
            break;
        }
    }

    /* Add 'incorrect' class to all other cards, and add 'ready' class */
    for (const kid of cardBox.children) {
        
        kid.classList.add('ready');

        if (!kid.classList.contains('correct')) {
            kid.classList.add('incorrect');
        }
    }

    /* Hide start button */
    startButton.classList.add('hidden');
    /* Increment round counter */
    roundCount++;
    roundDisplay.innerHTML = `Rounds played: ${roundCount}`;
}
startButton.addEventListener('click', shuffle, false); /* Makes shuffle button do the thing */


function pickWrong() {
    let cardBox = document.getElementById('cards');

    /* Unhide start button */
    startButton.classList.remove('hidden');

    for (const child of cardBox.children) {
        if (child.classList.contains('correct')) {
            child.classList.remove('correct');
            child.classList.add('correctChosen');
        } else if (child.classList.contains('incorrect')) {
            child.classList.remove('incorrect');
            child.classList.add('incorrectChosen');
        }
    }
}

var wrongChoice = document.getElementsByClassName('incorrect');
var rightChoice = document.getElementsByClassName('correct');

console.log(wrongChoice);

wrongChoice.addEventListener('click', pickWrong, false);