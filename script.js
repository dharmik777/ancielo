var specialCharacters = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")"];
var alphaUp = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var alphaLow = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9"]


// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);




function generatePassword() {
  var passwordLength = prompt("How long do you want your password to be? Must be between 8 and 128 characters")
  if (passwordLength < 8 || passwordLength > 128) {
    return ""
  }

  var special = confirm("Do you want special characters in your password")
  var upperCase = confirm("Do you want Uppercase characters in your password")
  var lowerCase = confirm("Do you want Lowercase characters in your password")
  var numeric = confirm("Do you want a numeric character in your password")
  if (!special && !upperCase && !lowerCase && !numeric) {
    console.log("hello")
    return ""
  }
  var one = []
  if (special) {
    one.push(specialCharacters)
  }

  if (upperCase) {
    one.push(alphaUp)
  }

  if (lowerCase) {
    one.push(alphaLow)
  }

  if (numeric) {
    one.push(numbers)
  }

  console.log(one)
  for (var i = 0; i < passwordLength; i++) {
    var randomIndex = Math.floor(Math.random() * one.length)
    var randomItem = one[randomIndex]
    console.log(randomItem)
    var randomCharacter = Math.floor(Math.random() * randomItem.length)
    var character = randomItem[randomCharacter]
    console.log(character)
  }
}

var generatePass = document.querySelector ("#generate");
generatePass.addEventListener("click", function(){
  console.log(generatePass);
  var password2 = "hello";
  document.querySelector("#password").innerText= password






})








// when user clicks button- you will begin asking questions to identify what kind of code the user wants. 
// "How long do you want your password to be? Must be between 8 and 128 characters"
//      validate number of characters      
// "Must choose at least one of the character options special characters, uppercase, lowercase, or numeric"
//      "special characters"
//          "yes/no"
//      "uppercase"
//          "yes/no"
//      "lowercase"
//          "yes/no"
//      "numeric"
//          "yes/no"
// "Invalid response. Start Over"
// "generate password if response is correct" 



// Ask the user a series of questions
// a) length of password (numeric input)
// b) validate length is between 8 and 128.
// c) type of characters to include - special characters, uppercase, lowercase, numeric(series of yes/no confirms)
// d) Validate the user selected at least one character type.

// Any invalid response will terminate password generation and the user must start over.

// Once the user has entered valid responses, generate a password that meets their criteria and display it in the box.
