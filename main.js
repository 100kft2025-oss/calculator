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
