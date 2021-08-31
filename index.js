var randomNumber1 = Math.floor(Math.random() * 6) + 1;
var randomNumber2 = Math.floor(Math.random() * 6) + 1;

var diceOneSrc = "images/dice" + randomNumber1 + ".png";
var diceTwoSrc = "images/dice" + randomNumber2 + ".png";



document.querySelector(".img1").setAttribute("src", diceOneSrc);
document.querySelector(".img2").setAttribute("src", diceTwoSrc);

if (randomNumber1 > randomNumber2) {
    document.querySelector("h1").innerHTML = "Player 1 Wins!";
}
else if (randomNumber2 === randomNumber1) {
    document.querySelector("h1").innerHTML = "Its a draw, try again!";
} else {
    document.querySelector("h1").innerHTML = "Player 2 Wins!";
}