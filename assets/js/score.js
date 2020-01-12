//value of letter
var scoreTable = {
    "a": 1,
    "b": 3,
    "c": 3,
    "d": 2,
    "e": 1,
    "f": 4,
    "g": 2,
    "h": 4,
    "i": 1,
    "j": 8,
    "k": 5,
    "l": 1,
    "m": 3,
    "n": 1,
    "o": 1,
    "p": 3,
    "q": 10,
    "r": 1,
    "s": 1,
    "t": 1,
    "u": 1,
    "v": 4,
    "w": 4,
    "x": 8,
    "y": 4,
    "z": 10
};



var wordSearched;
//var eachCharacter;
var findCharacter;
var scoreByLetter;
var TotalScore;


function cleanScoreBox() {

    $("#divScore").empty();
}


function getWord() {

    cleanScoreBox();
    
    wordSearched = $('#wordSearch').val();
    wordSearched = wordSearched.split("");
     console.log(btnSearched)

    TotalScore = 0;

    for (let index = 0; index < wordSearched.length; index++) {

        findCharacter = wordSearched[index]; //show the letter


        scoreByLetter = scoreTable[findCharacter];
        console.log(wordSearched[index])
        TotalScore = TotalScore + scoreByLetter;


        //show the letter
        var createId = "";
        createId = findCharacter + index;
        console.log(createId)

        $("#definition").append("<div class='has-text-danger' id='" + createId + "'> ( " + findCharacter + "<sub>" + scoreByLetter + "</sub>" + " ) </div>");
        $("#" + createId).css("display", "inline");


        //show the value by letter

        createId = scoreTable[findCharacter] + index;


    } //for loop

    //show the score get for the word
    $("#definition").prepend("<h2 id='scoreT' class='tile is-child subtitle'>  Base Word Score: " + TotalScore + " </h2>");
    $("#scoreT").css("display", "flex");

}
