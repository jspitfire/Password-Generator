// Array of special characters to be included in password
var specialCharacters = [
  '@',
  '%',
  '+',
  '\\',
  '/',
  "'",
  '!',
  '#',
  '$',
  '^',
  '?',
  ':',
  ',',
  ')',
  '(',
  '}',
  '{',
  ']',
  '[',
  '~',
  '-',
  '_',
  '.'
];

// Array of numeric characters to be included in password
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// Array of lowercase characters to be included in password
var lowerCasedCharacters = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z'
];

// Array of uppercase characters to be included in password
var upperCasedCharacters = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z'
];

// Function to prompt user for password options
function getPasswordOptions() {
  var length = parseInt(prompt("Enter password length (between 8 and 128 character):"));
  // Check if the entered length is a number and within the specified range
  if (isNaN(length) || length < 8 || length > 128) {
    alert("Please enter a valid number between 8 and 128.");
    return getPasswordOptions(); // Call the function again to get valid input
  }

  //Confirm prompts for each set of characters
  var includeSpecial = confirm("Include special characters?");
  var includeNumeric = confirm("Include numeric characters?");
  var includeLowercase = confirm("Include lowercase characters?");
  var includeUppercase = confirm("Include uppercase characters?");

  // Check if at least one character set is selected
  if (!includeSpecial && !includeNumeric && !includeLowercase && !includeUppercase) {
    alert("Please select at least one character set.");
    return getPasswordOptions(); // Call the function again to get valid input
  }

  // Return an options object
  return {
    length: length,
    includeSpecial: includeSpecial,
    includeNumeric: includeNumeric,
    includeLowercase: includeLowercase,
    includeUppercase: includeUppercase
  };
}

// Function for getting a random element from an array
function getRandom(arr) {
  var randomIndex = Math.floor(Math.random() * arr.length);
  return arr[randomIndex];
}

// Function to generate password with user input
function generatePassword() {
  var options = getPasswordOptions();
  var allCharacters = [];
  var result = '';

  // Concatenate selected character sets based on user options
  if (options.includeSpecial) {
    allCharacters = allCharacters.concat(specialCharacters);
  }
  if (options.includeNumeric) {
    allCharacters = allCharacters.concat(numericCharacters);
  }
  if (options.includeLowercase) {
    allCharacters = allCharacters.concat(lowerCasedCharacters);
  }
  if (options.includeUppercase) {
    allCharacters = allCharacters.concat(upperCasedCharacters);
  }

  // Generate password using the concatenated character set
  for (var i = 0; i < options.length; i++) {
    result += getRandom(allCharacters);
  }

  return result;
}

// Get references to the #generate element
var generateBtn = document.querySelector('#generate');

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector('#password');

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);