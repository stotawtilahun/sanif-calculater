    const display = document.getElementById("display");

    function addValue(val) {
        display.value += val;
    }

    function clearDisplay() {
        display.value = "";
    }

    function deleteChar() {
        display.value = display.value.slice(0, -2);
    }

    function calculate() {
        try {
            display.value = eval(display.value);
        } catch {
            display.value = "Error";
        }
    }