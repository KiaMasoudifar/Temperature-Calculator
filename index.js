const textBox = document.getElementById("number");
const toFahrenheit = document.getElementById("c-f");
const toCelsius = document.getElementById("f-c");
const result = document.getElementById("result");
let temp;

function convert(){
    if(toFahrenheit.checked) {
        temp = Number(textBox.value);
        temp = (temp * 9/5) + 32;
        result.textContent = temp;
    } 
    else if (toCelsius.checked) {
        temp = Number(textBox.value)
        temp = (temp - 32) * 5/9;
        result.textContent = temp;
    }
    else {
        result.textContent = "Select a unit";
    }
}