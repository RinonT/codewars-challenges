// In this example you have to validate if a user input string is alphanumeric. The given string is not nil/null/NULL/None, so you don't have to check that.

// The string has the following conditions to be alphanumeric:

// At least one character ("" is not valid)
// Allowed characters are uppercase / lowercase latin letters and digits from 0 to 9
// No whitespaces / underscore

const alphanumeric = (string) => {
  const chars = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const isAllAlphaNumeric = string.length ? string.split('').every(str => chars.includes(str)) : false;
  return isAllAlphaNumeric;
}


function alphanumeric(string){
  return /^[0-9a-z]+$/i.test(string);
//   /^[0-9a-z]+$/i: This is a regular expression (regex) pattern used to match the input string. Let's break it down:

// ^: Asserts the start of a line.
// [0-9a-z]+: Matches one or more alphanumeric characters. The [0-9a-z] part defines a character class that includes digits (0-9) and lowercase letters (a-z).
// $: Asserts the end of a line.
// i: This flag makes the regex case-insensitive, allowing it to match both uppercase and lowercase letters.
// .test(string): This method is used to test if the regex pattern matches the input string. It returns true if there is a match and false otherwise.
}