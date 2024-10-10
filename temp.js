const input = document.getElementById('input');
const toFahrenheit = document.getElementById('toFahrenheit');
const toCelcius = document.getElementById('toCelcius');
const button = document.getElementById('button');
const result = document.getElementById('result');

function convert(){
    let temp = Number(input.value);
    if(toFahrenheit.checked){
        
        temp = temp * 9 / 5 + 32;
        result.textContent = "The result in Fahrenheit is " + temp.toFixed(1) + " degree";
    }else if(toCelcius.checked){
        temp = (temp - 32) *5/9;
        result.textContent = "The result in Celcius is " + temp.toFixed(1) + " degree"; 
    }else{
        result.textContent = "Please select a specific unit";
    }
}