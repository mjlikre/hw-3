var marvelChar = ['thanos', 'spider-man', "iron man","captain america", 'black widow','deadpool','thor', 'hulk', 
'loki', 'nebula','groot','gamora','wasp','rocket','mystique','strange'];
var charChosen='';
var lettersInChar=[];
var numBlanks =0;
var blanksAndSuccess=[];
var wrongLetters=[];
var win = 0;
var loss = 0;
var guessLeft=9;

var start = function(){
    charChosen = marvelChar[Math.floor(Math.random()*marvelChar.length)]
    console.log(charChosen);
}

start();





