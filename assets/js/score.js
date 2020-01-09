//value of letter
var scoreTable =[

    { point: 1,  letter:"A, E, I, O, U, L, N, S, T, R"}, 
    { point: 2,  letter:"D,G"},  
    { point: 3,  letter:"B, C, M, P"},
    { point: 4,  letter:"F, H, V, W, Y"},
    { point: 5,  letter:"K"},      
    { point: 8,  letter:"J, X"},   
    { point: 10, letter:"Q, Z"}

];

var wordSearched;



function getWord(params) {

    // wordSearched=  "this is a string"//  $('#word-search').val();
    // wordSearched.split("");
    // console.log(wordSearched)

    var str = $('#word-search').val();
    var res = str.split("");
    console.log("myfunction");
    console.log(res)
   
}


 $(document).ready(function () {

    getWord();
   
});

$("#searchBtn").on("click", function (event) {
    
    getWord();
    
});


// -- search on keypress of "enter" event --
$("#word-search").on("keypress", function (e) {
    if (e.which === 13) { 
        getWord();           
    };
    
});




