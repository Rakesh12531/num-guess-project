let display = document.getElementById("screen");
let myh3 = document.getElementById("myh3");
function append(input){
    display.value = "";
    display.value += input;
}
let guess = document.getElementById("gbtn");
let rand = Math.floor((Math.random()*10)+1);
console.log(rand);
gbtn.onclick = function(){
    let value = document.getElementById("screen").value;
    value = Number(value);
    if(value<rand){
        display.value = value+" is Too Low!";
        myh3.textContent = "Try Again!";
    }
    else if(value>rand){
        display.value = value+" is Too High!";
        myh3.textContent = "Try Again!";
    }
    else if(rand==value){
        display.value = value+" is correct!";
        myh3.textContent = "Congratulations!";
    }
    else if(value==NaN){
        display.value = "Enter Valid Number";
        myh3.textContent = "Try Again!";
    }
}