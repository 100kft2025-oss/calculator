let calcValue = "";

function press(val) {
  calcValue += val;
  document.getElementById("calcInput").value = calcValue;
}

function calculate() {
  try {
    calcValue = eval(calcValue).toString();
    document.getElementById("calcInput").value = calcValue;
  } catch {
    document.getElementById("calcInput").value = "Error";
    calcValue = "";
  }
}

function clearCalc() {
  calcValue = "";
  document.getElementById("calcInput").value = "";
}

// Keyboard support
document.addEventListener("keydown", function(event){
    const key = event.key;
    const allowedKeys = "0123456789+-*/.=C";

    if (allowedKeys.includes(key)) {
        if (key === "C") {
            clearCalc();
        } else if (key === "=" || key === ".") {
            press(key);
        } else {
            press(key);
        }
    }

    if (key === "Enter") {
        calculate();
    }
});
