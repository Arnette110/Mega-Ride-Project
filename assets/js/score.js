//value of letter
var scoreTable ={"a":1, "b":3, "c":3, "d":2, "e":1, "f":4, "g":2, "h":4, "i":1, "j":8, "k":5, "l":1, "m":3, "n":1, "o":1, "p":3, "q":10, "r":1, "s":1, "t":1, "u":1, "v":4, "w":4, "x":8, "y":4, "z":10};


 
var wordSearched;
//var eachCharacter;
var findCharacter;
var scoreByLetter;
var TotalScore;


function getWord() {

  //$("#divPoints").empty();
    wordSearched= $('#word-search').val();
    wordSearched =wordSearched.split("");
  //  console.log(wordSearched)
   
    TotalScore=0;

    for (let index = 0; index < wordSearched.length; index++) {
      
        findCharacter = wordSearched[index];//show the letter

        
        scoreByLetter = scoreTable[findCharacter];
        console.log(wordSearched[index])
        TotalScore=TotalScore+ scoreByLetter;


//show the letter
        var createId="";
        createId=findCharacter +index;
        console.log(createId)

        $("#divLetters").append("<h2 id='"+createId +"'class= 'box'>"+findCharacter+"</h2>"); 
        $("#"+createId).css("display", "inline"); 

//show the value by letter

        createId=scoreTable[findCharacter] +index;
        $("#divLetters").append("<h2 id='"+createId+"'> <sub>"+scoreTable[findCharacter]+" </sub></h2>");
        //$("#"+createId).css("background-color", "red");

     
    }   //for loop

//show the score get for the word
    $("#divScore").append("<h2 id='scoreT' class= ' tile is-child '>  Score by word is: "+TotalScore+"</h3>");
    $("#scoreT").css("display", "inline"); 
}
 
// function cleanBoxScore() {
//     $("#divScore").empty();    
//     $("#divLetters").empty();
//     $("#divPoints").empty();   

    
// }

$("#searchBtn").on("click", function (event) {
        getWord();    
});


// -- search on keypress of "enter" event --
$("#word-search").on("keypress", function (e) {
    if (e.which === 13) { 
        getWord();           
    };
    
});







