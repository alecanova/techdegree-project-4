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

            if(splitPhrase[i] === ' ') {
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

}