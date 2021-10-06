// Assignment code here

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");
var passwordLength;
var characterLower = randomLower();
var characterUpper = randomUpper();
var characterNumber = randomNumber();
var characterSpecial = randomSpecial();

function randomLower() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}

function randomUpper() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
}

function randomNumber() {
  return String.fromCharCode(Math.floor(Math.random() * 9) + 49);
}

function randomSpecial() {
  const symbols = "!#$%&'()*+,-./:;<=>?@[]^_`{|}~";
  return symbols[Math.floor(Math.random() * symbols.length)];
}

console.log(characterLower, characterUpper, characterNumber, characterSpecial);

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

function generatePassword() {
  // when the user selects generate password button a
  // user types length they wish password to be between 8 & 128 characters
  passwordLength = prompt(
    "How many characters would you like your password to contain? Must be between 8-128 characters."
  );
  if (!passwordLength) {
    alert("This needs a value!");
  } else if (passwordLength < 8 || passwordLength > 128) {
    alert("Must enter a value between 8 - 128!");
  }
  // alert window appears to ask a series of password criteria
  // user then prompted with choice of upper case letters,
  // lower case letters, numbers, and special characters
  // which they can choose to include or not include
  else {
    confirmSpecial = confirm(
      "Click OK to confirm including special characters."
    );
    confirmNumber = confirm(
      "Click OK to confirm including numeric characters."
    );
    confirmLower = confirm(
      "Click OK to confirm including lowercase characters."
    );
    confirmUpper = confirm(
      "Click OK to confirm including uppercase characters."
    );
  }
  // at least one character type must be selected
  if (!confirmSpecial && !confirmNumber && !confirmLower && !confirmUpper) {
    alert("Must select at least one character type!");
  }
  // if one is not they show alert informing user one must be selected

  // once user has selected their preferred password criteria a
  // alert window will confirm their selections

  // once user has confirmed their password criteria the
  // function will generate and randomize the password

  // the password is then returned to writePassword function
  // to be displayed
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
