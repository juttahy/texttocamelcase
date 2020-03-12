/* 
Function for changing a text to a camelCase text (for example: "Muuttujan nimi" = "muuttujanNimi")
*/

// Define UI variables
const form = document.getElementById('variable-form');
const textInput = document.getElementById('text-input');
const originalText = document.getElementById('original-text');
const resultText = document.getElementById('result-text'); 

loadEventListener();

function loadEventListener() {
  form.addEventListener('submit', changeText);
}

function changeText(e) {
  // change all text to lower case and remove empty spaces from beginning and end
  const textToChange = textInput.value.toLowerCase().trim();

  // Change string to array
  const textToArr = textToChange.split(" ");
  const arrayLength = textToArr.length;
  // variable for the final result
  let camelCaseResult;
  
  // If there are more than 1 word in the text, change the words to start with a capital letter
  if (arrayLength > 1) {
    // make a new array from second word and words after that
    const laterWordsArr = textToArr.splice(1);
    // Go through all the words and change the first letter to capital letter
    for (let i = 0; i < laterWordsArr.length; i++) {
      laterWordsArr[i] = laterWordsArr[i].charAt(0).toUpperCase() + laterWordsArr[i].slice(1);
    }
    // combine all the array's words together to one string
    camelCaseResult = textToArr.concat(laterWordsArr).join('');
    
  } else {
    camelCaseResult = textToArr.join('');
  }

  // show original text
  originalText.innerHTML = `<h2>Alkuperäinen teksti:</h2><p>${textInput.value}</p>`;
  // show the text in camelCase
  resultText.innerHTML = `<h2>Teksti camelCasena:</h2><p>${camelCaseResult}</p>`;

  // clear task input
  textInput.value = '';

  e.preventDefault();
}
