// Hangman Game
// Ver: 1.0.0

(function($){

"use strict";

// Game DOM Elements
const $btnStart = $('#btn-start');
const $gameForm = $('#form-game');

// Game Class
class Game {

    constructor(){
        this.words = ["reindeer", "wolverine", "gorilla", "giraffe", "salamander", "rabbit", "alligator", "kangaroo", "beaver", "hedgehog", "leopard", "cheetah", "turtle", "porcupine", "baboon", "elephant", "antelope", "raccoon", "koala", "panda", "coyote", "squirrel", "baboon", "tiger", "hippopotamus", "chameleon", "warthog", "moose", "chipmunk", "hyena", "badger", "buffalo", "skunk", "orangutan", "anteater", "rhinoceros", "alpaca", "gazelle", "lemur", "jackal", "chimpanzee", "weasel", "gopher", "wolverine", "zebra", "meerkat"]
        this.originalWords = this.words;
        this.word;
        this.maxIncorrectGuesses = 7;
    }

    init(playAgain){
        if(!playAgain){
            $btnStart.remove();
        }

        this.word = this._selectWord();

        console.log(this.word);

    }

    _selectWord(){
        // Check to make sure their is animal
        // left to select
        if(this.words.length === 0){
            this.words = this.originalWords;
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

}

// Create a new instance of the Game
// Class
const game = new Game();

console.log(game.words);
console.log(game.words.length);

// Game Event Handlers
$btnStart.click(_ => {
    game.init(false);
});

})(jQuery);