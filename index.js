var guessCount;
var wordList=["test"];//TODO fill out word list
var chosenWord="";
var unpopulatedWord =[];
window.
document.addEventListener("keydown",playerGuess,false);

function setup() {
    //the error from previously was becuse I was doing var chosenWord insted of modifying the existing chosenWord
    chosenWord=wordList[Math.floor(Math.random() * worldList.length)];
    for (let i = 0; i < chosenWord.length; i++) {
        unpopulatedWord[i]="";
    }
    //makes it so guesses depend on how long the word is
    guessCount=chosenWord.length + 2;
}

function playerGuess(event) {
    if(chosenWord.includes(event.key)) {

        unpopulatedWord[chosenWord.indexOf(event.key)] = event.key
        checkState()
    } else {
        checkState();
        guessCount--;
    }
    console.log(unpopulatedWord);
}

function checkState() {
    var counter=0;
    for (let i = 0; i < chosenWord.length; i++) {
        if(chosenWord[i]===unpopulatedWord[i]) {
            counter++;
        } 
    }
    if (counter === chosenWord.length) {
        alert("You win!");
        setup();
    }
    //check whether or not the the player has lost
    if(guessCount<=0) {
        alert("You lost. The word was " + chosenWord + ".");
        setup();
    } 
}
