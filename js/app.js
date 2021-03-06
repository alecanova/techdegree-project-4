/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */


let game;
const keys = document.getElementsByClassName('key');
const btnReset = document.getElementById('btn__reset');

// 'click' event listener for the "Start Game" button.
btnReset.addEventListener('click', function() {

    game = new Game();
    game.startGame();

});

// 'click' event listener for each of the onscreen keyboard buttons.
for(let i = 0; i < keys.length; i++) {

    keys[i].addEventListener('click', function(e) {

        game.handleInteraction(e.target);

    });

}

// 'keydown' event listener for physical computer keyboard.
document.addEventListener('keydown', (e) => {

    for(let i = 0; i < keys.length; i++) {

        if ( (e.key === keys[i].innerHTML) &&
           (keys[i].disable !== true) ) {

            game.handleInteraction(keys[i]);

           }

    }

});



