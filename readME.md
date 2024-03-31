# String Case Conveter

#### Date: 2024/03/31

#### By: Lee Mwangi

## Description
This JavaScript program takes a string input from the user and converts the case of characters in the string. It toggles the case of each letter, converting lowercase letters to uppercase and vice versa while leaving non-letter characters unchanged.

## Installation
You can use git clone to download the documents from GitHub.

### Installation Instructions
git clone `(https://github.com/LeeMwangi001/WK2:Code Challenge)`

## Technologies Used
- HTML
- CSS
- JavaScript
- GitHub

## Support and Contact Details
GitHub:`(https://github.com/LeeMwangi001)`

### License
The content of this site is licensed under the MIT license.  
Copyright (c) 2024.

# Array Generator

## Description
This JavaScript program generates an array of integers between two given numbers, inclusive.

## Usage
1. Run the program.
2. Enter the first number (`num1`) when prompted.
3. Enter the second number (`num2`) when prompted.
4. The program will generate an array containing integers from `num1` to `num2`, inclusive.

## Code Overview
- The program uses the `prompt-sync` module to get synchronous input from the user.
- It prompts the user to enter two numbers, `num1` and `num2`, and parses the input strings into integers.
- There's a function named `arrayGenerator` to generate the array of integers between `num1` and `num2`.
- Within the `arrayGenerator` function, it initializes an empty array to store the generated numbers.
- It iterates from `num1` to `num2`, inclusive, and pushes each number into the array.
- Finally, it returns the generated array.
- The program calls the `arrayGenerator` function with the provided inputs and stores the result.

## Sample Output
Suppose the user inputs `num1 = 3` and `num2 = 7`, the program will generate the array `[3, 4, 5, 6, 7]`.

## License
This program is licensed under the MIT License.

## Author
[Lee Mwangi]`(https://github.com/LeeMWangi001)`


markdown
Copy code
# Prime Number Filter

## Description
This JavaScript program takes an array of numbers as input from the user, filters out the prime numbers from the array, and returns a new array containing only the prime numbers.

## Usage
1. Run the program.
2. Enter a space-separated list of numbers when prompted.
3. The program will filter out the prime numbers from the input array and display the result.

## Code Overview
- The program uses the `prompt-sync` module to get synchronous input from the user.
- It prompts the user to enter a space-separated list of numbers and stores them in an array.
- It defines a function named `isPrime` to check if a given number is prime.
- Within the `isPrime` function, it checks if the number is less than or equal to 1, if it's 2 or 3, or if it's divisible by any number from 2 to its square root. If any of these conditions are met, the function returns `false`, otherwise, it returns `true`.
- There's a function named `filterPrimes` to filter out prime numbers from an array.
- Within the `filterPrimes` function, it iterates through each number in the input array and checks if it's prime using the `isPrime` function.
- If a number is prime, it adds it to a new array named `primeNumbers`.
- Finally, it returns the `primeNumbers` array containing only prime numbers.

## Sample Output
Suppose the user inputs the array `[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]`, the program will output `[2, 3, 5, 7]`, as these are the prime numbers in the input array.

## License
This program is licensed under the MIT License.

## Author
[Lee Mwangi]`(https://github.com/LeeMwangi001)`