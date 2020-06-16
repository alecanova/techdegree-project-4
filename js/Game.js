/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */

 class Game {
    constructor() {
        this.missed = 0;
        this.phrases = this.createPhrases();
        this.activePhrase = null;

    }

    /**
    * Creates phrases for use in game
    * @return {array} An array of phrases that could be used in the game
    */
    createPhrases() {

        const randomPhrases = [
            new Phrase('Life is like a box of chocolates'),
            new Phrase('There is no trying'),
            new Phrase('May the force be with you'),
            new Phrase('You have to see the matrix for yourself'),
            new Phrase('You talking to me'),
        ];

        return randomPhrases;

    }

    /**
    * Selects random phrase from phrases property
    * @return {Object} Phrase object chosen to be used
    */
    getRandomPhrase() {

        const randomIndex = Math.floor(Math.random() * this.phrases.length);
        return this.phrases[randomIndex];

    }

    /**
    * Begins game by selecting a random phrase and displaying it to user
    */
    startGame() {
        const overlay = document.getElementById('overlay');
        overlay.style.display = 'none';
        this.activePhrase = this.getRandomPhrase();
        this.activePhrase.addPhraseToDisplay();
       
    }

}

