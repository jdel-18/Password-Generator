// Assignment Code
function generatePassword() {
  var characters = "abcdefghijklmnopqrstuvwxyz";
  var capitalCharacters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var specialCharacters = "!@#$%&";
  var numbers = "1234567890";
  var passwordLength = prompt("How long would you like your password to be? (minimum of 8 characters max of 128)");
  
  if (passwordLength < 8 || passwordLength > 128) {
    passwordLength = prompt("ERROR! Please enter a number between 8 and 128.");
  }
  
  var addSpecial = confirm("Do you want to include special characters?");
  var addCaps = confirm("Do you want to include capital letters?");
  var addNumbers = confirm("Do you want to include numbers?");
  
  var selectedCharacters = characters;
  
  if (addSpecial) {
    selectedCharacters += specialCharacters;
  } 
  if (addCaps) {
    selectedCharacters += capitalCharacters;
  } 
  if (addNumbers) {
    selectedCharacters += numbers;
  }
  
  var password = "";
  
  // Generate the random password based on selected characters and length
  for (var i = 0; i < passwordLength; i++) {
    var randomIndex = Math.floor(Math.random() * selectedCharacters.length);
    password += selectedCharacters.charAt(randomIndex);
  }
  
  return password;
}
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);