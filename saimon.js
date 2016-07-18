/**
 * Created by t on 7/15/2016.
 */

//generate the saimon objc main game obj
var Saimon = function(){};

// add an empty list that holds all the game moves
Saimon.prototype.gameMoves = [];

//creates the function the takes the current button list and adds a number/color random number to it
Saimon.prototype.nextLevel = function(gameMoves){
    var item = Math.floor(Math.random()*4);
    gameMoves.push(item);
};

//this function willl later on be in charge of lighting up the game bars according to the list
Saimon.prototype.lightUp = function(gameMoves){
    for(i=0 ; i < gameMoves.length ; i++){
        console.log(gameMoves[i]);
        // will need to add a call here to a function for making sound based on button
    }
};

Saimon.prototype.isGuessCorrect = function(gameMoves,buttonClicked, currentUserGuess){
    if(buttonClicked != gameMoves[currentUserGuess]){
        // change to a dissent warning with boots strap warning
        alert("wrong number you lost, please click start game to try again");
    }
};

// a simple concept to reset current game
Saimon.prototype.resetGame = function(){
    Saimon.gameList = [];
};

Saimon.prototype.currentUserGuess = 0;

var game = new Saimon;

/*
Saimon.MakeSound = function (gamebutton){

// might work better with switches


// if red play this

// if blue play this

// if green play this

// if yellow play this




}



 */