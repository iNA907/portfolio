var randomNumber1 = Math.floor(Math.random() * 4) + 1;
var randomCard1 = Math.floor(Math.random() * 13) + 1;
document.querySelectorAll("img")[0].setAttribute
("src", "images/" + randomNumber1 + "/" + randomCard1 + ".png");

var randomNumber2 = Math.floor(Math.random() * 4) + 1;
var randomCard2 = Math.floor(Math.random() * 13) + 1;
document.querySelectorAll("img")[1].setAttribute
("src", "images/" + randomNumber2 + "/" + randomCard2 + ".png");

if(randomCard1 > randomCard2){
    document.querySelector("h1").innerHTML = "🎉Player 1 wins!"
}
else if(randomCard1 < randomCard2){
    document.querySelector("h1").innerHTML = "Player 2 wins!🎉"
}
else{
    document.querySelector("h1").innerHTML = "It's a draw..."
}