let calcValue = "";

function press(val) {
    calcValue += val;
    document.getElementById("calcScreen").innerText = calcValue;
}

function calculate() {
    try {
        calcValue = eval(calcValue).toString();
        document.getElementById("calcScreen").innerText = calcValue;
    } catch {
        document.getElementById("calcScreen").innerText = "Error";
        calcValue = "";
    }
}

function clearCalc() {
    calcValue = "";
    document.getElementById("calcScreen").innerText = "0";
}

// Keyboard support
document.addEventListener("keydown", function(event){
    const key = event.key;
    if ("0123456789+-*/.".includes(key)) {
        press(key);
    } else if (key === "Enter") {
        calculate();
    } else if (key === "c" || key === "C") {
        clearCalc();
    }
});
