function charValidation(char) {
  if (/[A-Z]/.test(char)) {
    return "Uppercase letter";
  } else if (/[a-z]/.test(char)) {
    return "Lowercase letter";
  } else if (/^\d+$/.test(char)) {
    return "Digit";
  } else {
    return "special char";
  }
}

console.log(charValidation("-"));
