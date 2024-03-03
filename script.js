// Selecting the input box
const inputBtn = document.querySelector('#inputBox');

// Selecting the button to generate password
const getPasswordBtn = document.querySelector('button');

// Selecting the copy button for the password
const copyPassword = document.querySelector('img');

// Array containing all possible characters for the password
const allCharacters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z','A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z','0', '1', '2', '3', '4', '5', '6', '7', '8', '9','!', '"', '#', '$', '%', '&', "'", '(', ')', '*', '+', ',', '-', '.', '/', ':', ';', '<', '=', '>', '?', '@', '[', '\\', ']', '^', '_', '`', '{', '|', '}', '~'];

// Function to generate a password and display it in the input box
function getPassWord() {
  let passWord = '';
  
  // Generating a password of length 16
  while (passWord.length < 16){
    passWord += allCharacters[Math.floor(Math.random() * allCharacters.length)];
  }
  
  // Displaying the generated password in the input box
  inputBtn.value = passWord;
}

// Event listener to generate a password when the button is clicked
getPasswordBtn.addEventListener('click', getPassWord);

// Event listener to copy the generated password when the copy button is clicked
copyPassword.addEventListener('click', () => {
  inputBtn.select();
  document.execCommand('copy');
})
