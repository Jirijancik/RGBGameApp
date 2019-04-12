

var amountOfSquares = 6;
var colors = generateRandomCollors(amountOfSquares);
var title = document.querySelector("#title-container");
var buttonNewCollors = document.querySelector(".button-new-collors");
var buttonEasy = document.querySelector(".button-easy");
var buttonHard = document.querySelector(".button-hard");
var tryAgain = document.querySelector("#tryAgain");
var squares = document.querySelectorAll(".square");
var colorDisplay = document.getElementById("colorDisplay");
var pickedColor = colors[randomCorrectCollor()];

//functions called at start of the app
colorDisplay.textContent = pickedColor;
giveCollors();
buttonEasy.addEventListener("click", appRestart());


//Function for restart of the app
function appRestart(){
    
    colors = generateRandomCollors(amountOfSquares);
    title.style.backgroundColor = document.body.style.backgroundColor;
    tryAgain.textContent = "";
    buttonNewCollors.textContent = "New Colors";
    pickedColor = colors[randomCorrectCollor()];
    colorDisplay.textContent = pickedColor;
    
    giveCollors();
}


//gives collors to squares
function giveCollors() {
    for (var i = 0; i < squares.length; i++){
        //add initial colors to squares
        squares[i].style.backgroundColor = colors[i];

        //add click listeners to squares
        squares[i].addEventListener("click", function(){
            //grab and compare the color of picked square
            var clickedColor = this.style.backgroundColor;
            if(clickedColor === pickedColor){
                tryAgain.textContent = "Correct";
                buttonNewCollors.textContent = "Play again ?";
                winColorChange(pickedColor);
                title.style.backgroundColor = pickedColor;
            }
            else{
                this.style.background = document.body.style.background
                tryAgain.textContent = "Try Again";
            }
        });
    }
}


//fnc check if difficulty btn was pressed
//restarts the game with different amountOfSquares
// TODO: it can be all marged to singe btn logic

function difficultyChange(){

//    resetSquaresCollor();
//    amountOfSquares = 3;
    document.appRestart();
}


// on correct answer colors title with same color
function winColorChange(color){
    for (var i = 0; i< squares.length; i++){
        squares[i].style.backgroundColor = color;
    }
}

// pick a random collor fromm array
function randomCorrectCollor(){
    let number = Math.random() * colors.length;
    return Math.floor(number);
}

//generates random RGB string and pushes it into arr
function generateRandomCollors(amount){
    
    var arr = [];
    function random (){
        let number= Math.floor(Math.random() * 255);
        return number;
    }
    for(var i = 0; i< amount; i++ ){
       var randomStringCollor = "rgb(" + random() + ", " + random() + ", " + random() + ")";
       arr.push(randomStringCollor);
    }
    return arr;
}

//add initial colors to squares
//function resetSquaresCollor(){
//    for (var i = 0; i <= amountOfSquares; i++){
//        //add initial colors to squares
//        squares[i].style.backgroundColor = HTMLBodyElement.body.style.backgroundColor;
//    }
//}