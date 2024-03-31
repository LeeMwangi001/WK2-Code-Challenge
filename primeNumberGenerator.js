// Importing the prompt-sync module to get synchronous input from the user
const prompt = require("prompt-sync")({ sigint: true });

// Prompting the user to enter a string and storing the input in the variable 'input'
const input = prompt('Enter number array:');

const numArray = input.split(" ").map(Number);

function isPrime(num) {
    if (num <= 1) return false; // Numbers less than or equal to 1 are not prime
    if (num <= 3) return true; // 2 and 3 are prime

    // Check if the number is divisible by any number from 2 to the square root of the number
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
        return false; 
        }
    }

    return true; // If not divisible by any number, it's prime
}

// Function to filter prime numbers from an array
function filterPrimes(numbers) {
    const primeNumbers = [];
    
    // Iterate through each number in the input array
    for (const num of numbers) {
        // Check if the number is prime 
        if (isPrime(num)) {
            primeNumbers.push(num); // If prime, add it to the primeNumbers array
        }
    }
    return primeNumbers; // Return the array containing prime numbers
}

const primeArray = filterPrimes(numArray);

