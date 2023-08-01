let Number_1 = document.querySelector('.number-1')
let Number_2 = document.querySelector('.number-2')

let PlusBtn = document.querySelector('.PlusBtn')
let MinusBtn = document.querySelector('.MinusBtn')
let TimesBtn = document.querySelector('.TimesBtn')
let DivideBtn = document.querySelector('.DivideBtn')
let ModulusBtn = document.querySelector('.ModulusBtn')

let SubmitBtn = document.querySelector('.submit-btn')
let ResultText = document.querySelector('.result-text')
let resultCalculations = 0;
let selectedOperators = "";

PlusBtn.addEventListener("click", () => {
  selectedOperators = "+";
});
MinusBtn.addEventListener("click", () => {
  selectedOperators = "-";
});
TimesBtn.addEventListener("click", () => {
  selectedOperators = "*";
});
DivideBtn.addEventListener("click", () => {
  selectedOperators = "/";
});
ModulusBtn.addEventListener("click", () => {
  selectedOperators = "%";
});

SubmitBtn.addEventListener("click", () => {
  let number1 = parseFloat(Number_1.value);
  let number2 = parseFloat(Number_2.value);

  if (isNaN(number1) || isNaN(number2)) {
    ResultText.textContent = "Invalid input, please try again";

   // reset the sign operator
   selectedOperators = "";

    //reset all the inputs
    Number_1.value = "";
    Number_2.value = "";

    // reset the value after 4.1s
    setTimeout(() => {
      ResultText.textContent = "0";
    }, 3100)
  }
   else if (selectedOperators === "+") {   // Perform the addition operation when if the selected operators are correct
    resultCalculations = number1 + number2;
    ResultText.textContent = resultCalculations;
   
    // reset the sign operator
    selectedOperators = "";

    // reset all the inputs
    Number_1.value = "";
    Number_2.value = ""; 

     // reset the value after 4.1s
     setTimeout(() => {
      ResultText.textContent = "0";
    }, 4100)
  }
  else if (selectedOperators === "-"){      // Perform the subtract operation when if the selected operators are correct
    resultCalculations = number1 - number2;
    ResultText.textContent = resultCalculations;
   
    // reset the sign operator
    selectedOperators = "";
    
    // reset all the inputs 
    Number_1.value = "";
    Number_2.value = "";

     // reset the value after 4.1s
     setTimeout(() => {
      ResultText.textContent = "0";
    }, 4100)
  }
  else if (selectedOperators === "*") {      // Perform the times operation when if the selected operators are correct
    resultCalculations = number1 * number2;
    ResultText.textContent = resultCalculations;

    // reset the sign operator
    selectedOperators = "";

    //reset all the inputs
    Number_1.value = "";
    Number_2.value = "";

     // reset the value after 4.1s
     setTimeout(() => {
      ResultText.textContent = "0";
    }, 4100)
  }
  else if (selectedOperators === "/") {      // Perform the divide operation when if the selected operators are correct
    resultCalculations = number1 / number2;
    ResultText.textContent = resultCalculations;

    // reset the sign operator
    selectedOperators = "";
    
    //reset all the inputs
    Number_1.value = "";
    Number_2.value = "";

     // reset the value after 4.1s
     setTimeout(() => {
      ResultText.textContent = "0";
    }, 4100)
  }
  else if (selectedOperators === "%") {      // Perform the modulus operation when if the selected operators are correct
    resultCalculations = number1 % number2;
    ResultText.textContent = resultCalculations;

    // reset the sign operator
    selectedOperators = "";

    // reset all the inputs
    Number_1.value = "";
    Number_2.value = "";

   // reset the value after after 4.1s
    setTimeout(() => {
      ResultText.textContent = "0";
    }, 4100)
  }
  else {
    ResultText.textContent = "Please click the sign operators first"; // it display, if doesn't click the sign operators
    
    // reset all the inputs
    Number_1.value = "";
    Number_2.value = "";

     // reset the value after 4.1s
     setTimeout(() => {
      ResultText.textContent = "0";
    }, 4100)
  }
});