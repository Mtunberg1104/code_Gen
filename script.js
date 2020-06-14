var hasALowerCase = confirm('Click okay to confirm you want lowercase letters in your password');
var generateBtn = document.querySelector('#generate');
var length = prompt('How many char would you like your passord to be?');
var getLength = getPasswordOpts();
var result = [];
var possibleChar = [];
var charsAdded = [];
var password = generatePassword();
var passwordText = document.querySelector('#password');
var num= ["0", "1","2","3","5","6","7","8","9"]

//string or array for each item needed in the password capital lower case number symbol 

///function that prompts the user for how many character
function getPasswordOpts () {

if (getPasswordOpts)
    hasSpecialCharacters === false &&
    hasNumericCharacters === false &&
    hasLowerCasedCharacters === false &&
    hasUpperCasedCharacters === false 
  
    alert('Must select at least one character type');
    return;
  }


  // a function (math.random/floor) to seelect random character from each array or sting - if you choose to use a string look into charAt because that will need to be added to function
  function getRandom(arr) {
    
for (var i = 0; i < charsAdded.length; i++) {
  result[i] = charsAdded[i];

    var randIndex = Math.floor(Math.random() * arr.length);
    var randElement = arr[randIndex];
  
    return randElement;
  }
}
//run function on string or array if the user has decided to add that sub set (ex cap letter to the password)  
function createPass (){
    var getLength = getPasswordOpts();
    var result = [];
    var possibleChar = [];
    var charsAdded = [];

    if (getLength.hasALowerCase){
        possibleChar = possibleChar.concat(lowerCase);
        charsAdded.push(getRandom(lowerCase));
    }
    // Get references to the #generate element
  }

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector('#password');

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);
event.preventDefault();
    
