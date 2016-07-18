/**
 * Created by t on 7/18/2016.
 */

$( document).ready(function(){

    $("#startGame").on("click",function(){
        game.gameMoves = [];
        game.nextLevel(game.gameMoves);
        game.currentUserGuess += 1;
    });

});