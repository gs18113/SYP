function turnon(){
    document.getElementById("bulb").src="https://w3schools.com/js/pic_bulbon.gif";
}

function turnoff(){
    document.getElementById("bulb").src="https://w3schools.com/js/pic_bulboff.gif";
}

document.getElementById("onBtn").onclick=turnon;
document.getElementById("offBtn").onclick=turnoff;