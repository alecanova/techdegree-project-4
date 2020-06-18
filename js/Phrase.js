/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Phrase.js */

class Phrase {
    constructor(phrase) {
        this.phrase = phrase.toLowerCase();
    }

    /**
    * Display phrase on game board
    */
    addPhraseToDisplay() {
        const ul = document.querySelector('#phrase ul');
        let splitPhrase = this.phrase.split('');

        for(let i = 0; i < this.phrase.length; i++) {

            if (splitPhrase[i] === ' ') {
                const space = document.createElement('li');
                space.classList.add('space');
                space.innerHTML = ' ';
                ul.appendChild(space);

            } else {

                const letter = document.createElement('li');
                letter.classList.add('letter');
                letter.innerHTML = splitPhrase[i];
                ul.appendChild(letter);
                
            }

        }

    }

    /**
    * Checks if passed letter is in phrase
    * @param (string) letter - Letter to check
    */
    checkLetter(letter) {

        return this.phrase.includes(letter);

    }

    /**
    * Displays passed letter on screen after a match is found
    * @param (string) letter - Letter to display
    */
    showMatchedLetter(letter){

        const selectLetter = document.getElementsByClassName('letter');

        for(let i = 0; i < selectLetter.length; i++) {

            if (letter == selectLetter[i].innerHTML) {

                selectLetter[i].classList.add('show');

            }

        }

    }

}