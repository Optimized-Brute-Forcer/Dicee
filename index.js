var random1=Math.floor(Math.random()*6+1);
var random2=Math.floor(Math.random()*6+1);

var randPic1="image/dice"+random1+".png";
var randPic2="image/dice"+random2+".png";

console.log(random1+" "+random2);

if(random1===random2){
    document.querySelector(".winner").innerHTML="Draw";
}else if(random1>random2){
    document.querySelector(".winner").innerHTML="Player 1 wins";    
}else{
    document.querySelector(".winner").innerHTML="Player 2 wins";
}

document.querySelector(".dicePic1").setAttribute("src",randPic1);
document.querySelector(".dicePic2").setAttribute("src",randPic2);