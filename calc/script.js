function clearDisplay() {
    document.getElementById("display").value = "";
}

function appendToDisplay(value) {
    document.getElementById("display").value += value;
}

function backspace() {
    let display = document.getElementById("display").value;
    document.getElementById("display").value = display.substring(0, display.length - 1);
}

function calculateResult() {
    try {
        let result = eval(document.getElementById("display").value);
        document.getElementById("display").value = result;
    } catch (error) {
        document.getElementById("display").value = "Error!";
    }
}
