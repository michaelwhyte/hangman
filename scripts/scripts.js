// Hangman Game
// Ver: 1.0.0

(function($){

"use strict";

// Game DOM Elements
const $btnStart = $('#btn-start');
const $gameForm = $('#form-game');

// Game Class
class Game {

    constructor(wordContainer, inputEl){
        this.words = ["reindeer", "wolverine", "gorilla", "giraffe", "salamander", "rabbit", "alligator", "kangaroo", "beaver", "hedgehog", "leopard", "cheetah", "turtle", "porcupine", "baboon", "elephant", "antelope", "raccoon", "koala", "panda", "coyote", "squirrel", "baboon", "tiger", "hippopotamus", "chameleon", "warthog", "moose", "chipmunk", "hyena", "badger", "buffalo", "skunk", "orangutan", "anteater", "rhinoceros", "alpaca", "gazelle", "lemur", "jackal", "chimpanzee", "weasel", "gopher", "wolverine", "zebra", "meerkat"]
        this.originalWords = this.words.slice(0);
        this.maxIncorrectGuesses = 7;
        this.wordContainer = wordContainer;
        this.guessInput = inputEl;
    }

    init(playAgain){
        if(!playAgain){
            $btnStart.remove();
        }

        this._setProps();

        console.log(this.word);
        
        this._outputLetters();

    }

    processGuess(){
        // Validate guess then check guess

        // Get guess and trim value
        let guess = $.trim(this.guessInput.val());

        if(!this._validate(guess)){
            return false;
        }

        // Guess is valid...Process guess
        guess = guess.toLowerCase();

        // Select the letters in the DOM
        const $letters = $(`.${guess}`);

        // Check if they did not guess a
        // correct letter
        // If not display a part of the hangman
        // to the user
        if($letters.length === 0){
            this.incorrectGuesses++;
            this._displayHangman(this.incorrectGuesses);
        }

        // Check if user has maxed out their
        // available incorrect guesses
        // -> if yes end the game
        if(this.incorrectGuesses === this.maxIncorrectGuesses){
            this._endGame(false);
        }


    }

    _setProps(){
        this.word = this._selectWord();
        this.wordLength = this.word.length;
        this.incorrectGuesses = 0;
        this.gameOver = false;
        this.playAgain = false;
    }

    _selectWord(){
        // Check to make sure their is animal
        // left to select
        if(this.words.length === 0){
            this.words = this.originalWords.slice(0);
        }

        // Select a random number between
        // 0 and the length of the words
        // array
        const ranNum =  Math.floor(Math.random() * this.words.length);

        // Select word from the words array, 
        // delete it from the array and
        // return the selected word
        return  this.words.splice(ranNum, 1).toString();
    }

    _outputLetters(){
        // $.each(this.word, (i, letter) => {
        //     console.log(letter);
        // });
        for(let i = 0, l = this.word.length; i < l; i++){
            const letter = this.word.charAt(i);
            $('<span />')
                .addClass(`letter ${letter}`)
                .data('letter', letter)
                .appendTo(this.wordContainer);
        }
    }

    _validate(value){

        // Check if value is greater than one character
        // long
        if(value.length > 1){
            alert('Only a single character can be entered at once. Please try again.');
            return false;
        }

        // Check if value is an English alphabet character
        if(!this._isLetter(value)){
            alert('Please enter a letter character (A - Z).');
            return false;
        }

        return true;

    }

    _displayHangman(partNumber){
        console.log(partNumber);
        $(`#hangman-part-0${partNumber}`).show();
    }

    _endGame(win){

        this.gameOver = true;

        if(!win){
            setTimeout( _ => {
                alert('Aghhh!!! You Lose!');
                this.playAgain = confirm('Do you want to play again?');
            }, 300);
            
            if(this.playAgain === true){
                this.init(true);
            }

        }

    }

    // Utility Functions

    // Function to determine if a character is an
    // English alphabet character
    // Code modified from this Stackoverflow 
    // question and answer:
    // https://stackoverflow.com/questions/9862761/how-to-check-if-character-is-a-letter-in-javascript
    _isLetter(str) {
        return str.length === 1 && str.match(/[a-z]/i);
    }

}

// Create a new instance of the Game
// Class
const game = new Game($('#word-container'), $('#guess'));

console.log(game.words);
console.log(game.words.length);

// Game Event Handlers
$btnStart.click( _ => {
    game.init(false);
});

$gameForm.submit(e => {
    e.preventDefault();
    game.processGuess();
});

})(jQuery);