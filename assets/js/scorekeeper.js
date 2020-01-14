var p1Button = $("#p1");
var p2Button = $("#p2");
// var p1Display = $("#p1Display");
var myElements = $(p1Display)
var p1Display = '';
var p2Display = '';
var p1Score = 0;
var p2Score = 0;
var gameOver = false;
var winningScore = 5;

console.log(p2Score)

p1Button.on("click", function(){
    if(!gameOver){
        p1Score++;
        if(p1Score === winningScore){
            gameOver = true;
        }
    //  p1Display.text(p1Display); 
     $( "#p1Display" ).text( p1Score );
     console.log(p1Score)
    }
    document.getElementById("p1Display").addEventListener("click", function(){
        
      });
});
p2Button.on("click", function(){
    if(!gameOver){
        p2Score++;
        if(p2Score === winningScore){
            gameOver = true;
        }
        //p2Display.textContent = p2score;
        $( "#p2Display" ).text( p2Score );
        console.log(p2Score);
    }
});
