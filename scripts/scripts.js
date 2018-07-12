// Hangman Game
// Ver: 1.0.0

(function($){

"use strict";

// Game Class
class Game {

    constructor(){
        this.words = [
            'reindeer',
            'wolverine',
            'gorilla',
            'giraffe',
            'salamander',
            'rabbit',
            'alligator',
            'kangaroo',
            'beaver',
            'hedgehog',
            'leopard',
            'cheetah',
            'turtle',
            'porcupine',
            'baboon',
            'elephant',
            'antelope',
            'raccoon',
            'koala',
            'panda',
            'coyote',
            'squirrel',
            'baboon',
            'tiger',
            'hippopotamus',
            'chameleon',
            'warthog',
            'moose',
            'chipmunk',
            'hyena',
            'badger',
            'buffalo',
            'skunk',
            'orangutan',
            'anteater',
            'rhinoceros',
            'alpaca',
            'gazelle',
            'lemur',
            'jackal',
            'chimpanzee',
            'weasel',
            'gopher',
            'wolverine',
            'zebra',
            'meerkat'
        ]
    }

}

// Game DOM Elements
const $btnStart = $('#btn-start');
const $gameForm = $('#form-game');

// Create a new instance of the Game
// Class
const game = new Game();

console.log(game.words);
console.log(game.words.length);

// Game Event Handlers

})(jQuery);