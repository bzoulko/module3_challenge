// Assignment code here
const cMinLength  = 8;
const cMaxLength  = 128;

/* ***********************************************************
  Generate password using characters based on users selection.
************************************************************** */
function generatePassword() {

  // ABORT:  When no proper length is selected. 
  var passLength = getPassLength();
  if (passLength === null) return ("No password was generated.");


  // Make sure at least one character set is selected.
  var firstTime = true;
  var charSet = '';  
  do {
    if (!firstTime) alert("You must select at least one character set to be included.");
    firstTime = false;
  } while ((charSet = getCharacterSet()) == '');


  // Randomly select characters from the character set until
  // the password size is reached.
  // ************************************************************
  // Special Notes:
  //    Larger the factor, the more time it takes to generate 
  //    a password, but it will generate a more complex password. 
  // ************************************************************
  var factor = passLength * charSet.length;
  var pwd = '';
  do {
    var idx = Math.floor(Math.random() * factor);
    pwd += charSet.charAt(idx);
  } while (pwd.length != passLength);

  return pwd;
}


/* **************************************************
  RETURN: List of character set(s) selected.
***************************************************** */
function getCharacterSet() {
  var chList  = (confirm("Include Special Characters?")   ? '!#$%&()*+,-./:;<=>?@[\]^_`{|}~' : '');
  chList     += (confirm("Include Uppercase Characters?") ? 'ABCDEFGHIJKLMNOPQRSTUVWXYZ' : '');
  chList     += (confirm("Include Lowercase Characters?") ? 'abcdefghijklmnopqrstuvwxyz0123456789' : '');
  chList     += (confirm("Include Numbers?")              ? '0123456789' : '');
  return (chList);
} 


/* ******************************************************
  RETURN: Password Length if not valid, null is returned.
********************************************************* */
function getPassLength() {
  var passLen = null;
  for (; ;) {

    passLen = prompt("Enter a password length, must be between 8 and 128 charcters?", 8);
    if (passLen === null) return (null);

    if (passLen < cMinLength || passLen > cMaxLength) {
      alert("Invalid password length, please re-enter.");
    } else
      break;

  }
  return (passLen);
}


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
