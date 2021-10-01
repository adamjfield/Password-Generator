// Assignment code here


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

function generatePassword () {
// when the user selects generate password button a alert window appears to ask a series of password criteria

// user type length they wish password to be between 8 & 128 characters

// user then prompted with choice of upper case letters, lower case letters, and special characters
// which they can choose to include or not include

// at least one character type must be selected
// if one is not they show alert informing user one must be selected

// once user has selected their preferred password criteria a alert window will confirm their selections

// once user has confirmed their password criteria the function will generate and randomize the password

// the password is then returned to writePassword function to be displayed

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
