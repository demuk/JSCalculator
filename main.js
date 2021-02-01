function Calculate() {
    var firstValued = document.getElementById("first-value").value;
    var firstValue = Number(firstValued)
    var operator = document.getElementById("operator").value;
    var secondValued = document.getElementById("second-value").value;
    var secondValue = Number(secondValued)

    if (operator == "+") {
        result = firstValue + secondValue;
    } else if (operator == "-") {
        result = firstValue - secondValue;
    } else if (operator == "/") {
        result = firstValue / secondValue;
    } else if (operator == "*") {
        result = firstValue * secondValue;
    } else {
        result = "Invalid Operator Provided";
    }{

    } {
        
    } {
        
    }

    document.getElementById("result").innerHTML = result;
}
