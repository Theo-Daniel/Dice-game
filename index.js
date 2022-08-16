var randomno1=Math.floor(Math.random() * 6) + 1;
var randomimage1="images/" + "dice" + randomno1 + ".png";
var image1=document.querySelectorAll("img")[0];
image1.setAttribute("src", randomimage1);

var randomno2=Math.floor(Math.random() * 6) + 1;
var randomimage2="images/" + "dice" + randomno2 + ".png";
var image2=document.querySelectorAll("img")[1];
image2.setAttribute("src", randomimage2);

if(randomno1 > randomno2){
  document.querySelector("h1").innerHTML="Player 1 Wins !"
}
else if (randomno2 > randomno1) {
  document.querySelector("h1").innerHTML="Player 2 Wins !"
}
else{
  document.querySelector("h1").innerHTML="Draw game !"
}
