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
            new Phrase('Frankly my dear I dont give a damn'),
            new Phrase('I love the smell of napalm in the morning'),
            new Phrase('Hard work beats talent'),
            new Phrase('You had me at hello'),
            new Phrase('Just keep swimming'),
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
        document.getElementById('overlay').style.display = 'none';
        this.activePhrase = this.getRandomPhrase();
        this.activePhrase.addPhraseToDisplay();
       
    }

    /**
    * Checks for winning move
    * @return {boolean} True if game has been won, false if game wasn't
    won
    */
    checkForWin() {

        const letterRevealed = document.getElementsByClassName('show');
        const selectLetter = document.getElementsByClassName('letter');

            if (selectLetter.length === letterRevealed.length) {

                return true

            } else {

                return false;

            }

        }

    /**
    * Increases the value of the missed property
    * Removes a life from the scoreboard
    * Checks if player has remaining lives and ends game if player is out
    */
    removeLife() {

        const tries = document.getElementsByClassName('tries');
        tries[this.missed].firstElementChild.src = 'images/lostHeart.png';
        this.missed ++;

        if (this.missed === 5) {

            this.gameOver(false);

        }

    }

    /**
    * Displays game over message
    * @param {boolean} gameWon - Whether or not the user won the game
    */
    gameOver(gameWon) {

        if (gameWon) {

            document.getElementById('overlay').style.display = '';
            document.getElementById('game-over-message').textContent = 'You nailed it! Well done!';
            document.getElementById('overlay').classList.add('win');

        } else {

            document.getElementById('overlay').style.display = '';
            document.getElementById('game-over-message').textContent = 'Wrong guess, try again!';
            document.getElementById('overlay').classList.add('lose');

        }

    }
    
}



