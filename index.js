var num1 = Math.ceil(Math.random()*6);
var firstPlayer = "./images/dice" + num1 + ".png";

var num2 = Math.ceil(Math.random()*6);
var secondPlayer = "./images/dice" + num2 + ".png";


if (num1===0 || num2===0){
    reload();
}

else if(num1===num2){
    document.querySelector("h1").textContent="Seems to be a tie";
}

else if(num1>num2){
    document.querySelector("h1").textContent="🏆Player1 Wins";
}

else{
    document.querySelector("h1").textContent="Player2 Wins🏆";
}


document.getElementsByTagName("img")[0].setAttribute("src",firstPlayer); 
document.getElementsByTagName("img")[1].setAttribute("src",secondPlayer);