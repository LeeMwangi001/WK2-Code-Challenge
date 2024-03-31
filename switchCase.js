// Importing the prompt-sync module to get synchronous input from the user
const prompt = require("prompt-sync")({ sigint: true });

// Prompting the user to enter a string and storing the input in the variable 'input'
const input = prompt('Enter string:');

// Defining the switchCase function to convert the case of characters in a string
function switchCase(input){
    // Initializing an empty string to store the converted output
    let output = '';

    // Iterating over each character 'char' in the input string using a for...of loop
    for (const char of input) {
        // Checking if the character is a lowercase letter
        if (char >= 'a' && char <= 'z') {
            // Converting the lowercase letter to uppercase and appending it to the output
            output += String.fromCharCode(char.charCodeAt(0) - 32);
        } 
        // Checking if the character is an uppercase letter
        else if (char >= 'A' && char <= 'Z') {
            // Converting the uppercase letter to lowercase and appending it to the output
            output += String.fromCharCode(char.charCodeAt(0) + 32);
        } 
        // If the character is not a letter (e.g., digit, punctuation), append it to the output as is
        else {
            output += char;
        }
    }
}
// Calling the switchCase function with the user input 'input'
switchCase(input);
