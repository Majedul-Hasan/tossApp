var randomNumber1 = Math.floor(Math.random()*6+1)
document.getElementById('player1').innerHTML='<h3>player 1</h3><img src="img/dice--0'+randomNumber1+'.png" alt="">'
var randomNumber2 = Math.floor(Math.random()*6+1)
document.getElementById('player2').innerHTML='<h3>player 2</h3><img src="img/dice--0'+randomNumber2+'.png" alt="">'
console.log(randomNumber2)
//rresult
if(randomNumber1>randomNumber2){
    document.getElementById('result').innerHTML= '&#128681; player 1 wins'
}else if(randomNumber1<randomNumber2){
    document.getElementById('result').innerHTML= 'player 2 wins &#128681;'
}else {
    document.getElementById('result').innerHTML= '&#127884; draw &#127884;'
}