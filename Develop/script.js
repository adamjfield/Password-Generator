// Assignment code here

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");
var passwordLength;
var characterLower = randomLower();
var characterUpper = randomUpper();
var characterNumber = randomNumber();
var characterSpecial = randomSpecial();
var passwordChoices = [];

// functions to generate password choices
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

function generatePassword() {
  // when the user selects generate password button a
  // user types length they wish password to be between 8 & 128 characters
  passwordLength = prompt(
    "How many characters would you like your password to contain? Must be between 8-128 characters."
  );

  var lengthChoice = parseInt(passwordLength);
  console.log(lengthChoice);

  if (!passwordLength) {
    alert("This needs a value!");
  } else if (passwordLength < 8 || passwordLength > 128) {
    alert("Must enter a value between 8 - 128!");
    return;
  }
  // alert window appears to ask a series of password criteria
  // user then prompted with choice of upper case letters,
  // lower case letters, numbers, and special characters
  // which they can choose to include or not include
  var hasCharacterSpecial = confirm(
    "Click OK to confirm including special characters."
  );
  if (hasCharacterSpecial) {
    passwordChoices += characterSpecial;
  }
  var hasCharacterNumber = confirm(
    "Click OK to confirm including numeric characters."
  );
  if (hasCharacterNumber) {
    passwordChoices += characterNumber;
  }
  var hasCharacterLower = confirm(
    "Click OK to confirm including lowercase characters."
  );
  if (hasCharacterLower) {
    passwordChoices += characterLower;
  }
  var hasCharacterUpper = confirm(
    "Click OK to confirm including uppercase characters."
  );
  if (hasCharacterUpper) {
    passwordChoices += characterUpper;
  }
  console.log(passwordChoices);
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
  // object to store user input
  // var passwordChoices = {
  //   passwordLength: passwordLength,
  //   hasCharacterSpecial: hasCharacterSpecial,
  //   hasCharacterLower: hasCharacterLower,
  //   hasCharacterUpper: hasCharacterUpper,
  //   hasCharacterNumber: hasCharacterNumber,
  // };

  return passwordChoices;
}

// var for get passwordchoices
// function getPassword() {
//   var options = generatePassword();
//   var result = [];
//   var posCharacters = [];
//   var guarnCharacters = [];
//   var getRandom = [];
// }

// if (options.hasCharacterSpecial) {
//   posCharacters = posCharacters.concat(randomSpecial);
//   guarnCharacters.push(getRandom(randomSpecial));
// }
// if (options.hasCharacterLower) {
//   posCharacters = posCharacters.concat(randomLower);
//   guarnCharacters.push(getRandom(randomLower));
// }
// if (options.hasCharacterUpper) {
//   posCharacters = posCharacters.concat(randomUpper);
//   guarnCharacters.push(getRandom(randomUpper));
// }
// if (options.hasCharacterNumber) {
//   posCharacters = posCharacters.concat(randomNumber);
//   guarnCharacters.push(getRandom(randomNumber));
// }
// // get random fun - arr rand index = flow rand arr lengh rand elme arr {randinde}
// function getRandom(arr) {
//   index = getRandom.arr.length()
// }

//   pos = get rand pos
//   for (var i = 0; i < guarnCharacters.length; i++)

//   for = result(i) = guarnCharacters

//   return results.join("");

//   // once user has selected their preferred password criteria a
//   // alert window will confirm their selections

//   // once user has confirmed their password criteria the
//   // function will generate and randomize the password

//   // the password is then returned to writePassword function
//   // to be displayed
// }

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
  // Add event listener to generate button
};

generateBtn.addEventListener("click", writePassword);
