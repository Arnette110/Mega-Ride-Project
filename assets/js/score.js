//value of letter
var scoreTable ={"a":1, "b":3, "c":3, "d":2, "e":1, "f":4, "g":2, "h":4, "i":1, "j":8, "k":5, "l":1, "m":3, "n":1, "o":1, "p":3, "q":10, "r":1, "s":1, "t":1, "u":1, "v":4, "w":4, "x":8, "y":4, "z":10};


 
var wordSearched;
var eachCharacter;
var findCharacter;
var scoreByLetter;


function getWord() {

    wordSearched=    $('#word-search').val();
    wordSearched =wordSearched.split("");
    console.log(wordSearched)


    for (let index = 0; index < wordSearched.length; index++) {
        findCharacter = wordSearched[index];

       alert( scoreTable[findCharacter]);


        

       
    //    var x = scoreTable.find(findPoint);
    //    alert(x)

    //     scoreByLetter= (x.point);




        var x = scoreTable.find(findUrl);
        var searchParam= (x.point);
        alert(searchParam)


      //  findPoint();
      
        console.log(eachCharacter);
        console.log(scoreByLetter);    
    
    }   
}

// function findPoint(pPoint) { //get the value in the array (point)
//     return pPoint.point === findCharacter; 
//   }

  function findUrl(song) { 
      alert("alert for inside is "+findCharacter)
    return song.point === "q"; 
  }



$("#searchBtn").on("click", function (event) {
        getWord();    
});


// -- search on keypress of "enter" event --
$("#word-search").on("keypress", function (e) {
    if (e.which === 13) { 
        getWord();           
    };
    
});







