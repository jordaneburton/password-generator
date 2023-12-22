// Assignment Code
var generateBtn = document.querySelector("#generate");

// Function to create a n-m array
function createNToMArray(start, end) {
  const charArray = Array(end - start);
  for (let i = 0; i < (end + 1 - start); i++) {
    charArray[i] = i + start;
  }
  return charArray;
}

// Write password to the #password input
function generatePassword() {
  let passwordLength = prompt("Type desired password length:");
  if (passwordLength == null) {
    return;
  }
  
  passwordLength = Number(passwordLength);
  if (passwordLength < 8 || passwordLength > 128 || isNaN(passwordLength)) {
    alert("Length must be between 8 and 128 characters");
    return;
  }
  
  // while (passwordLength < 8 || passwordLength > 128 || isNaN(passwordLength)) 
  // {
  //   passwordLength = prompt("Length must be between 8 and 128 characters:");
  //   if (passwordLength == null) {
  //     return;
  //   }
  // }

  includeLowercase = confirm("Include lowercase characters");
  includeUppercase = confirm("Include uppercase characters");
  includeNumeric = confirm("Include numeric characters");
  includeSpecial = confirm("Include special characters");

  if ((!includeLowercase &&
      !includeUppercase &&
      !includeNumeric &&
      !includeSpecial))
  {
    alert("Must confirm at least one criteria");
    return;
  }

  // lists of ASCII characters
  // ASCII codes range from 32-126
  // digits : 48-57
  // uppercase : 65-90
  // lowercase : 97-122
  // symbol : everything else
  criteriaArray = createNToMArray(32, 126);
  if (!includeNumeric) {
    // splices codes 48 to 57
    criteriaArray.splice(16, 10);
  }
  
  if (!includeUppercase) {
    // splices codes 65 to 90
    criteriaArray.splice(33, 26);
  }
  
  if (!includeLowercase) {
    // splices codes 97 to 122
    criteriaArray.splice(65, 26);
  }
  
  if (!includeSpecial) {
    // splices codes multiple sections
    // 32 to 47, 
    // 58 to 64, 
    // 91 to 96, 
    // 123 to 126
    criteriaArray.splice(0, 10);
    criteriaArray.splice(26, 7);
    criteriaArray.splice(59, 6);
    criteriaArray.splice(91, 4);
  }


  let asciiCodes = [];
  for (let i = 0; i < passwordLength; i++) {
    const uniChar = criteriaArray[(Math.floor(Math.random() * criteriaArray.length))];
    asciiCodes.push(String.fromCharCode(uniChar));
  }

  // asciiCodes = asciiCodes.join("");
  newPassword = asciiCodes.join("");
  console.log();
  return newPassword;
}

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
