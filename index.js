var guessCount;
var worldList=["test"];//TODO fill out word list
var chosenWord="";
var unpopulatedWord =[];
window.
document.addEventListener("keydown",playerGuess,checkState,false);

function setup() {
    var chosenWord=wordList[Math.floor(Math.random() * worldList.length)];
    for (let i = 0; i < chosenWord.length; i++) {
        unpopulatedWord[i]="";
    }
    //makes it so guesses depend on how long the word is
    guessCount=chosenWord.length + 2;
}

function playerGuess(event) {
    if(chosenWord.includes(event.key)) {
        unpopulatedWord[chosenWord.indexOf(event.key)] = event.key
    } else {
        guessCount--;
    }
    console.log(unpopulatedWord);
}

function checkState() {
    
}
