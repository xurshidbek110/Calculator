const display = document.getElementById("display");

// input buttons
function appendToDisplay(input) {
    display.value += input;
}

// SqRT
function appendToDisplay1() {
    display.value = Math.sqrt(display.value);
    
}

function appendToDisplay2() {
    display.value = Math.cbrt(display.value);
}

// Trigonometric functions
function sin() {
    display.value = Math.sin(display.value * (Math.PI / 180)); 
}

function cos() {
    display.value = Math.cos(display.value * (Math.PI / 180));
}

function tan() {
    display.value = Math.tan(display.value * (Math.PI / 180));
}

// del
function del() {
    display.value = display.value.toString().slice(0, -1)
}

// Factorial using a chatGPT
function factorial() {
    let num = parseInt(document.getElementById("display").value);
    if (isNaN(num) || num < 0) {
        alert("Iltimos, musbat butun son kiriting!");
            return;
        }
    let result = 1;
    if (num === 0 || num === 1) {
        result = 1;
    }
    else if (num > 20) {
        alert("Iltimos, 20 dan kichik son kiriting!");
        return;
    }
    else if (num < 0) {
        alert("Iltimos, musbat butun son kiriting!");
        return;
    }
    for (let i = 1; i <= num; i++) {
        result *= i;
    }
    document.getElementById("display").value = result;
}

// AC
function clearDisplay() {
    display.value = ""
}

// equal
function calculate() {
    try{
        display.value = eval(display.value);
    }
    catch(error){
        display.value = "Error"
    }
}