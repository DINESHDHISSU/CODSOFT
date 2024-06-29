const display = document.getElementById("display");

function addToDispaly(input) {
    display.value += input;
}

function Clear() {
    display.value = "";
}

function Ans() {
    try{
        display.value = eval(display.value);
    }
   
    catch(error){
        display.value = "Error"
    }
}
