/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */

let game;

document.getElementById('btn__reset').addEventListener('click', function() {

    game = new Game();
    game.startGame();

});

/******** */
const keys = document.getElementsByClassName('key');

for(let i = 0; i < keys.length; i++) {

    keys[i].addEventListener('click', function(e) {

        game.handleInteraction(e.target);

    });
}
