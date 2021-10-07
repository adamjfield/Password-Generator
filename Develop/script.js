// Assignment code here

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");
var passwordLength = passwordLength;
var characterNumber = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var characterSpecial = ["!", "%", "&", ",", "*", "+", "-", ".", "/", "<", ">", "?","~"];
var characterLower = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var characterUpper = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var passwordChoices = [];

// Write password to the #password input

function generatePassword() {
  // when the user selects generate password button a
  // user types length they wish password to be between 8 & 128 characters
   var passwordLength = prompt(
    "How many characters would you like your password to contain? Must be between 8-128 characters."
  );
  if (!passwordLength) {
    alert("This needs a value!");
    return null;
  } else if (passwordLength < 8 || passwordLength > 128) {
    alert("Must enter a value between 8 - 128!");
    return null;
  }
  // alert window appears to ask a series of password criteria
  // user then prompted with choice of upper case letters,
  // lower case letters, numbers, and special characters
  // which they can choose to include or not include
  else {
    var hasCharacterSpecial = confirm(
      "Click OK to confirm including special characters."
    );
    var hasCharacterNumber = confirm(
      "Click OK to confirm including numeric characters."
    );
    var hasCharacterLower = confirm(
      "Click OK to confirm including lowercase characters."
    );
    var hasCharacterUpper = confirm(
      "Click OK to confirm including uppercase characters."
    );
  }
  // at least one character type must be selected
  // if one is not they show alert informing user one must be selected
  if (
    !hasCharacterSpecial &&
    !hasCharacterNumber &&
    !hasCharacterLower &&
    !hasCharacterUpper
  ) {
    alert("Must select at least one character type!");
    return null;
  }

  if (hasCharacterSpecial) {
    passwordChoices = passwordChoices.concat(characterSpecial);
  }
  if (hasCharacterLower) {
    passwordChoices = passwordChoices.concat(characterLower);
  }
  if (hasCharacterUpper) {
    passwordChoices = passwordChoices.concat(characterUpper);
  }
  if (hasCharacterNumber) {
    passwordChoices = passwordChoices.concat(characterNumber);
  }

  var randomPassword = ""
  
  //   // once user has confirmed their password criteria the
  //   // function will generate and randomize the password
  for (var i = 0; i < passwordLength; i++) {
    randomPassword = randomPassword + passwordChoices[Math.floor(Math.random() * passwordChoices.length)];
    console.log(password)
  };

  return randomPassword;
}

//   // the password is then returned to writePassword function
//   // to be displayed
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
  // Add event listener to generate button
}

generateBtn.addEventListener("click", writePassword);
