
var generateBtn = document.querySelector("#generate");


var uppercaseArray = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var lowercaseArray = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o",  "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var numberArray = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var characterArray = ["@", "#", "$", "%", "^", "&", "*", "(", ")", "-", "_", "=", "+"];
var resultArray = [];
var userArray = [];


function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
   
  
}


uppercaseArray [1]

  var numCharacter = prompt ("How much number of Character you want between 8 and 128?");
  var numbers = confirm ("you want numbers in your password?");
  var uppercases = confirm ("do you want Uppercases in your password?");
  var lowercases = confirm ("do you want lowercases in your password?");
  var characters = confirm ("do you want special characters in your password?");


// conditon of the Array

if (numbers){
  resultArray = resultArray.concat(numbArray);
  
}

if (uppercases){
  resultArray = resultArray.concat(uppercaseArray);

}

if (lowercases){
  resultArray = resultArray.concat(lowercaseArray);

}

if (characters){
  resultArray = resultArray.concat(characterArray);
}
console.log(resultArray)


for (var i = 0; i < numCharacter; i++) {
      {
  userArray.push (resultArray[Math.floor(Math.random() * resultArray.length)]); 
  }
   {
  return userArray.join("");
}

//password function
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

 
}






// Add event listener to generate button
generateBtn.addEventListener("click", writePassword)};
