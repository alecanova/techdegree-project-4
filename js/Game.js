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
            new Phrase('Dazed and confused'),
            new Phrase('Requiem for a dream'),
            new Phrase('Down by law'),
            new Phrase('Halt and catch fire'),
            new Phrase('Eyes wide shut'),
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
    * Handles onscreen keyboard button clicks
    * @param (HTMLButtonElement) button - The clicked button element
    */
    handleInteraction(button) {

        button.disabled = true;

        if( this.activePhrase.checkLetter(button.innerHTML) ) {
            
            button.classList.add('chosen');
            this.activePhrase.showMatchedLetter(button.innerHTML);
            
            
            if( this.checkForWin() ) {

                this.gameOver(true);
                
            };
            
        } else {

                button.classList.add('wrong');
                this.removeLife()

        }
        
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
            this.resetGame();
                  
        } else {

            document.getElementById('overlay').style.display = '';
            document.getElementById('game-over-message').textContent = 'Wrong guess, try again!';
            document.getElementById('overlay').classList.add('lose');
            this.resetGame();

        }

    }

    /**
    * Resets the gameboard between games.
    */
    resetGame () {

        this.missed = 0;

        // Removes all `li` elements from the Phrase `ul` element.
        document.querySelector('#phrase ul').innerHTML = '';

        const lives = document.querySelectorAll(".tries img");
        const keys = document.querySelectorAll('.key, .wrong, .chosen');

        // Resets all of the heart images in the scoreboard.
        for(let i = 0; i < lives.length; i++) {

            lives[i].src = 'images/liveHeart.png';

        }

        // Enables all of the onscreen keyboard buttons and update each to use the `key` class.
        for(let i = 0; i < keys.length; i++) {

            keys[i].disabled = false;
            keys[i].className = 'key';

          }

    }

}





