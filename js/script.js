'use strict';

const userInput = document.getElementById('user-input');
const resultsDiv = document.getElementById('results-div')

const checkButton = document.getElementById('check-btn');
const clearButton = document.getElementById('clear-btn');

checkButton.addEventListener('click', checkNumber)
clearButton.addEventListener('click', clearForm);


function clearForm() {
   while (resultsDiv.firstChild) {
      resultsDiv.removeChild(resultsDiv.firstChild);
   }
}

function checkNumber(e) {
   e.preventDefault();
   clearForm();
   const userInputText = userInput.value;
   const phoneRegex = /^(([1]{1,1}[\s]?)?([0-9]{3,3}|[(][0-9]{3,3}[)])([-\s])?[0-9]{3,3}([-\s])?[0-9]{4,4})$/gm;
   if (!userInputText) {
      alert('Please provide a phone number');
      return;
   }
   const result = document.createElement('span');
   if (phoneRegex.test(userInputText)) {
      result.textContent = `Valid US number: ${userInputText}`
   }
   else {
      result.textContent = `Invalid US number: ${userInputText}`
   }
   resultsDiv.appendChild(result)
};

