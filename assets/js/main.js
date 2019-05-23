var marvelChar = ['thanos', 'spider-man', "iron man","captain america", 'black widow','deadpool','thor', 'hulk', 
'loki', 'nebula','groot','gamora','wasp','rocket','mystique','strange'];
var charChosen='';
var lettersInChar=[];
var numBlanks =0;
var blanksAndSuccess=[];
var wrongLetters=[];
var win = 0;
var loss = 0;
var guessLeft=15;
var lettersGuessed = '';

var start = function(){


    charChosen = marvelChar[Math.floor(Math.random()*marvelChar.length)];
    lettersInChar = charChosen.split('');
    numBlanks= lettersInChar.length;


    guessLeft= 15;
    wrongLetters=[];
    blanksAndSuccess = [];

    for (var i =0; i < numBlanks; i++){
        blanksAndSuccess.push("_")
    }

    document.getElementById("blanks").innerHTML = blanksAndSuccess.join(" ");
    document.getElementById('guessesLeft').innerHTML = guessLeft;
    document.getElementById('winCounter').innerHTML = win;
    document.getElementById('lossCounter').innerHTML = loss; 

   
}




var checker = function(letter){
    var letterFound = false;
    for (var i = 0; i< numBlanks; i++){
        if (lettersInChar[i] === letter){
            letterFound = true;
        }
    }

    if (letterFound){
        for (var i = 0; i < lettersInChar.length; i++){
            if (lettersInChar[i] === letter){
                blanksAndSuccess[i] = letter;
            }
        }

    }
    else{
        wrongLetters.push(letter);
        guessLeft --; 
    }
    
    

}

var roundComplete = function(){
    console.log("Win Count: " + win + "| Loss Count: " + loss + "| Guesses Left: " + guessLeft);

    document.getElementById("guessesLeft").innerHTML = guessLeft;
    document.getElementById("blanks").innerHTML = blanksAndSuccess.join(" ");
    document.getElementById("wrongLetters").innerHTML = wrongLetters.join(" ");

    
   
    if (lettersInChar.toString()===blanksAndSuccess.toString()){
        win++;
        alert("You Won!");

        document.getElementById("winCounter").innerHTML = win;
        start();
    }
    else if(guessLeft == 0){
        loss ++;
        alert("You Lost!");

        document.getElementById("lossCounter").innerHTML = loss;
        start();
    }

}

document.onkeyup=function(event){
    lettersGuessed = String.fromCharCode(event.keyCode).toLowerCase();
    checker(lettersGuessed); 
    roundComplete();
}

start();







