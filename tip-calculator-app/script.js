const peopleInput = document.querySelector(".people-input");
const billInput = document.querySelector(".bill-input");
const tipPerPerson = document.getElementById("tip-amount");
const totalPerPerson = document.getElementById("total-amount");
const tips = document.querySelectorAll(".tips");
const tipCustom = document.querySelector(".tip-custom");
const resetBtn = document.querySelector(".reset");
const error = document.querySelector(".error");

let billValue = 0;
let peopleValue = 1;
let tipValue = 0.15; 

// Configuración de eventos
billInput.addEventListener("input", billInputFun);
peopleInput.addEventListener("input", peopleInputFun);
tipCustom.addEventListener("input", tipCustomFun);
resetBtn.addEventListener("click", resetFun);

tips.forEach((val) => {
    val.addEventListener("click", handleClick);
});

billInput.value = "";
peopleInput.value = "";
updateDisplay();

function billInputFun(){
    billValue = Math.max(0, parseFloat(billInput.value)); 
    calculateTip();
    toggleResetButton();
}

function peopleInputFun() {
    const inputValue = peopleInput.value; 
    peopleValue = parseFloat(inputValue);

    if (isNaN(peopleValue) || peopleValue < 1) {
        error.classList.remove("hidden"); 
        peopleInput.style.border = "2px solid orange"; 
    } else {
        error.classList.add("hidden"); 
        peopleInput.style.border = ""; 
        calculateTip(); 
    }
    toggleResetButton(); 
}

function handleClick(event){
    tips.forEach((val) => {
        val.classList.remove("active-tip");
        if (event.target.innerHTML === val.innerHTML) {
            val.classList.add("active-tip");
            tipValue = parseFloat(val.innerHTML) / 100;
        }
    });
    calculateTip();
    toggleResetButton(); 
}

function calculateTip() {
    if (peopleValue >= 1) {
        let tipAmount = (billValue * tipValue) / peopleValue;
        let total = (billValue + tipAmount) / peopleValue;
        tipPerPerson.innerHTML = "$" + tipAmount.toFixed(2);
        totalPerPerson.innerHTML = "$" + total.toFixed(2);
    } else {
        tipPerPerson.innerHTML = "$0.00";
        totalPerPerson.innerHTML = "$0.00";
    }
}

function tipCustomFun(){
    tipValue = parseFloat(tipCustom.value) / 100 || 0; 
    tips.forEach((val) => {
        val.classList.remove("active-tip");
    });
    calculateTip();
    toggleResetButton(); 
}

function resetFun(){
    billInput.value = "0.0";
    billValue = 0; 
    peopleInput.value = "1";
    peopleValue = 1; 
    tipCustom.value = "";
    tipValue = 0.15; 
    error.classList.add("hidden");
    peopleInput.style.border = ""; 
    updateDisplay();
    toggleResetButton(); 
}

function updateDisplay() {
    tipPerPerson.innerHTML = "$" + (0.0).toFixed(2);
    totalPerPerson.innerHTML = "$" + (0.0).toFixed(2);
}

function toggleResetButton() {
    if (billValue > 0 || peopleValue > 0 || tipCustom.value) {
        resetBtn.disabled = false; 
    } else {
        resetBtn.disabled = true; 
    }
}