/**
 * NOTE: Tests for the checkPassword should be written first,
 * before implementing the function below.
 * @module password
 */

/**
 * Checks the strength of the given password and returns a string
 * to represent the result.
 *
 * The returned string (in Title Case) is based on the requirements below:
 * - "Strong Password"
 *     - at least 12 characters long
 *     - at least  1 number
 *     - at least  1 uppercase letter
 *     - at least  1 lowercase letter
 * - "Moderate Password"
 *     - at least  8 characters long
 *     - at least  1 letter (upper or lower case)
 *     - at least  1 number
 * - "Horrible Password"
 *     - passwords that are exactly any of the top 5 (not 20) passwords
 *     from the 2021 Nordpass Ranking:
*      - https://en.wikipedia.org/wiki/List_of_the_most_common_passwords
 * - "Poor Password"
 *     - any password that is not horrible, moderate or strong.
 *
 * @param {string} password to check
 * @returns {string} string to indicate the strength of the password.
 */
export function checkPassword(password) {
  if (HorriblePw(password) === true) {
    return 'Horrible Password';
  } else if (StrongPw(password) === true) {
    return 'Strong Password';
  } else if (ModeratePw(password) === true) {
    return 'Moderate Password';
  } else {
    return 'Poor Password';
  }
}

function HorriblePw(password) {
  if (password === '123456' || password === '123456789' 
      || password === '12345' || password === 'qwerty' 
      || password === 'password') {
    return true;
  }
  return false;
}

function StrongPw(password) {
  if (password.length < 12) {
    return false; 
  }  

  // test to check if password contains a number
  if (/\d/.test(password) === false) {
    return false;
  }

  if (!hasLowerCase(password) || !hasUpperCase(password)) {
    return false;
  }
  return true;
}

function ModeratePw(password) {
  if (password.length < 8) {
    return false; 
  }  

  // test to check if password contains a number
  if (/\d/.test(password) === false) {
    return false;
  }

  if (!hasLowerCase(password) && !hasUpperCase(password)) {
    return false;
  }
  return true;
}


function hasLowerCase(str) {
  return str.toUpperCase() != str;
}

function hasUpperCase(str) {
  return str.toLowerCase() != str;
}