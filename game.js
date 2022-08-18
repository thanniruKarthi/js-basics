var textArray = [
    'rock',
    'paper','scissor'
];
var randomIndex = Math.floor(Math.random() * textArray.length); 
var randomElement = textArray[randomIndex];
console.log(randomElement);
var str=prompt("enter the rock or paper or scissor");
if(randomElement=="rock")
    {
        if(str=="rock")
        {
            alert("draw");
        }
        if(str=="paper")
        {
            alert("you won");
        }
        if(str=="scissor")
        {
            alert("you loss");
        }
    }
if(randomElement=="paper")
    {
         if(str=="rock")
        {
            alert("you won");
        }
        if(str=="paper")
        {
            alert("draw");
        }
        if(str=="scissor")
        {
            alert("you loss");
        }
    }
if(randomElement=="scissor")
    {
         if(str=="rock")
        {
            alert("you won");
        }
        if(str=="paper")
        {
            alert("you loss");
        }
        if(str=="scissor")
        {
            alert("you draw");
        }
 }
