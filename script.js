// Assignment Code
var generateBtn = document.querySelector("#generate");

// Function to create our criteria array
function createCriteriaArray(numCrit, upperCrit, lowerCrit, specCrit) {
  // lists of ASCII characters
  // ASCII codes range from 32-126
  // digits : 48-57
  // uppercase : 65-90
  // lowercase : 97-122
  // symbol : everything else
    // 32 to 47, 
    // 58 to 64, 
    // 91 to 96, 
    // 123 to 126

  let criteria = [];
  if (numCrit) {
    for (let i = 48; i <= 57; i++) {
      criteria.push(i);
    }
  }
  if (upperCrit) {
    for (let i = 65; i <= 90; i++) {
      criteria.push(i);
    }
  }
  if (lowerCrit) {
    for (let i = 97; i <= 122; i++) {
      criteria.push(i);
    }
  }
  if (specCrit) {
    for (let i = 32; i <= 47; i++) {
      criteria.push(i);
    }
    for (let i = 58; i <= 64; i++) {
      criteria.push(i);
    }
    for (let i = 91; i <= 96; i++) {
      criteria.push(i);
    }
    for (let i = 123; i <= 126; i++) {
      criteria.push(i);
    }
  }
  return criteria;
}

// Write password to the #password input
function generatePassword() {
  let passwordLength = prompt("Type desired password length:");
  // allows user to cancel
  if (passwordLength == null) {
    return "";
  }
  
  passwordLength = Number(passwordLength);
  if (passwordLength < 8 || passwordLength > 128 || isNaN(passwordLength)) {
    alert("Length must be between 8 and 128 characters");
    return "";
  }
  
  // I could keep the user here until they give me something good but nahhh

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

  
  criteriaArray = createCriteriaArray(includeNumeric, includeUppercase, includeLowercase, includeSpecial);

  let asciiCodes = [];
  for (let i = 0; i < passwordLength; i++) {
    const uniChar = criteriaArray[(Math.floor(Math.random() * criteriaArray.length))];
    asciiCodes.push(String.fromCharCode(uniChar));
  }

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
