var winCount = 0;
var roundCount = 0;

var roundDisplay = document.getElementById('roundCounter');
var winDisplay = document.getElementById('winCounter');
var startButton = document.getElementById('start');
var noticeMsg = document.getElementById('notice');
var cardButton = document.getElementById('cards').children;

function shuffle() { /* Function to start new round upon hitting the 'Shuffle Cards' button */
    let cardBox = document.getElementById('cards');
    let cards = cardBox.children;

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

    /* Remove chosen classes from cards and clear notice message (for subsequent rounds played) */
    for (const son of cardBox.children) {
        if (son.classList.contains('incorrectChosen')) {
            son.classList.remove('incorrectChosen');
        } else if (son.classList.contains('correctChosen')) {
            son.classList.remove('correctChosen');
        }
    }

    noticeMsg.innerHTML = "";

    /* Hide start button */
    startButton.classList.add('hidden');
    /* Increment round counter */
    roundCount++;
    roundDisplay.innerHTML = `Rounds played: ${roundCount}`;
}
startButton.addEventListener('click', shuffle, false); /* Makes shuffle button do the thing */


function pick() {
    let cardBox = document.getElementById('cards');
    let cardChildren = cardBox.children;
    
        /* Unhide start button */
    startButton.classList.remove('hidden');

    for (const child of cardBox.children) { /* Set card colors */
        if (child.classList.contains('correct')) {
            child.classList.remove('correct');
            child.classList.add('correctChosen');
        } else if (child.classList.contains('incorrect')) {
            child.classList.remove('incorrect');
            child.classList.add('incorrectChosen');
        }
    }
}

function handleScore(item) {
    if (item.id = "correct") {
        noticeMsg.innerHTML = "Good job! You guessed the right card!";
        winCount++;
    }
}

for (var i = 0; i < cardButton.length; i++) {
    cardButton[i].addEventListener('click', pick, false);
    cardButton[i].addEventListener('click', handleScore, false);
}
