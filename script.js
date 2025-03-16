var winCount = 0;
var roundCount = 0;
var loseCount = 0;

var roundDisplay = document.getElementById('roundCounter');
var winDisplay = document.getElementById('winCounter');
var loseDisplay = document.getElementById('loseCounter');
var startButton = document.getElementById('start');
var disabledButton = document.getElementById('disabled');
var noticeMsg = document.getElementById('notice');
var milestoneMsg = document.getElementById('milestone');
var cardButton = document.getElementById('cards').children;
var winMessages = [ // array index (actual number)
    "Lucky guess!", // 0 (1)
    "Wow!", // 1 (2)
    "How did you do that?", // 2 (3)
    "How lucky are you?", // 3 (4)
    "What?!", // 4 (5)
    "Incredible!" // 5 (6)
];
var loseMessages = [
    "Oh no!", // 0 (1)
    "HA!", // 1 (2)
    "Too bad!", // 2 (3)
    "Seriously?", // 3 (4)
    "How did you do that?", // 4 (5)
    "I can't believe it!" // 5 (6)
];

function newRound() { /* Function to start new round upon hitting the 'Shuffle Cards' button */
    let cardBox = document.getElementById('cards');

    /* Make a random card correct */
    let rando = Math.floor(Math.random() * 10);
    cardBox.children[rando].classList.add('correct');

    /* Add 'incorrect' class to all other cards, and add 'ready' class */
    for (const kid of cardBox.children) {
        if (!kid.classList.contains('ready')) {
            kid.classList.add('ready');
        }

        if (!kid.classList.contains('correct')) {
            kid.classList.add('incorrect');
        }
    }

    /* Remove chosen classes from cards and set default notice message (for subsequent rounds played) */
    for (const son of cardBox.children) {
        if (son.classList.contains('incorrectChosen')) {
            son.classList.remove('incorrectChosen');
        } else if (son.classList.contains('correctChosen')) {
            son.classList.remove('correctChosen');
        }
    }

    milestoneMsg.innerHTML = "";
    noticeMsg.innerHTML = "Cards shuffled!";

    /* Hide start button, replace with greyed out button */
    startButton.classList.add('hidden');
    disabledButton.classList.remove('hidden');
    /* Increment round counter */
    roundCount++;

    if (roundCount == 50) {
        milestoneMsg.innerHTML = "Wow! 50 rounds played! How much longer can you go?";
    } else if (roundCount == 100) {
        milestoneMsg.innerHTML = "Awesome! 100 rounds strong! You sure are dedicated!";
    } else if (roundCount == 150) {
        milestoneMsg.innerHTML = "Spectacular dedication! 150 rounds played!";
    }

    roundDisplay.innerHTML = `Rounds played: ${roundCount}`;
}



startButton.addEventListener('click', newRound, false); /* Makes shuffle button do the thing */


function pick(event) {
    let cardBox = document.getElementById('cards');
    let cardChildren = cardBox.children;
    
        /* Unhide start button and hide greyed out button*/
    startButton.classList.remove('hidden');
    disabledButton.classList.add('hidden');

    handleScore(event.target);

    for (const child of cardBox.children) { /* Set card colors */
        if (child.classList.contains('correct')) {
            child.classList.remove('correct');
            child.classList.add('correctChosen');
        } else if (child.classList.contains('incorrect')) {
            child.classList.remove('incorrect');
            child.classList.add('incorrectChosen');
        }
    }

    startButton.focus({focusvisible: true, preventScroll: true});

}

function handleScore(item) {
    let rando = Math.floor(Math.random() * 6);

    if (item.classList.contains('correct')) {
        noticeMsg.innerHTML = winMessages[rando] + " You guessed the right card!";
        winCount++;
        winDisplay.innerHTML = `Wins: ${winCount}`;
    } else if (item.classList.contains('incorrect')) {
        noticeMsg.innerHTML = loseMessages[rando] + " You guessed the wrong card!";
        loseCount++;
        loseDisplay.innerHTML = `Rounds lost: ${loseCount}`;
    }

    if (winCount == 20) {
        milestoneMsg.innerHTML = "Holy moly! 20 wins, good job!";
    } else if (winCount == 60) {
        milestoneMsg.innerHTML = "FANTASTIC! 60 wins!";
    } else if (winCount == 100) {
        milestoneMsg.innerHTML = "STUPENDOUS!!! ONE HUNDRED WINS!!!";
    } else if (loseCount == 20) {
        milestoneMsg.innerHTML = "Aw, shucks. 20 losses. Don't sweat it!";
    } else if (loseCount == 60) {
        milestoneMsg.innerHTML = "Yikes... Don't let those 60 losses get to you.";
    } else if (loseCount == 100) {
        milestoneMsg.innerHTML = "That's super rough, losing 100 times. No worries if you wanna take a break.";
    }
}

for (var i = 0; i < cardButton.length; i++) {
    cardButton[i].addEventListener('click', pick, false);
    cardButton[i].addEventListener('keypress', pick, false);
}