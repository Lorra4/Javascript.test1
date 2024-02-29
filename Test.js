// Function to reverse string 
function reverseString(str) { 
    const strRev =  str.split('').reverse().join(''); 
    console.log(strRev); 
} 
  
// Function call 
reverseString("GeeksforGeeks"); 
reverseString("JavaScript"); 
reverseString("TypeScript"); 


//Count characters in a string
//Include whitespacing
var str = "Hello, world!";

console.log(str.length); // prints 13 to the console

//Removing whitespacing
var str = " Hello, world! ";

console.log(str.trim().length); // printes 12 to the console


//Capitalize the first Letter
function capital_letter(str) 
{
    str = str.split(" ");

    for (var i = 0, x = str.length; i < x; i++) {
        str[i] = str[i][0].toUpperCase() + str[i].substr(1);
    }

    return str.join(" ");
}

console.log(capital_letter("Write a JavaScript program to capitalize the first letter of each word of a given string."));

//Array Functions
function findMinMax() {
    let Arr = [50, 60, 20, 10, 40];
 
    let minValue = Math.min(...Arr);
    let maxValue = Math.max(...Arr);
     
    console.log("Minimum element is:" + minValue);
    console.log("Maximum Element is:" + maxValue);
}
 
findMinMax()


const arr = [23, 34, 77, 99, 324];
let sum = 0;
for (let i = 0; i < arr.length; i++) {
  sum += arr[i];
}

console.log(sum);

//Filter even numbers

const numbers = [1, 2, 3, 4, 5];
const evenNumbers = [];
for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] % 2 === 0) {
    evenNumbers.push(numbers[i]);
  }
}
// evenNumbers: [2, 4]


//Mathematical functions

// Java program to find factorial of given number 
function factorial(n) { 
    if (n == 0) return 1; 
    return n * factorial(n - 1); 
  } 
    
  // Driver Code 
  let num = 5; 
  document.write("Factorial of " + num + " is " + factorial(num));



//Prime or not

function isPrime(number) {
    if (number < 2) {
      return false;
    }
  
    for (let i = 2; i <= Math.sqrt(number); i++) {
      if (number % i === 0) {
        return false;
      }
    }
  
    return true;
  }
  
  // Usage
  const number = 17;
  console.log(`${number} is prime:`, isPrime(number));



// Javascript program for Fibonacci Series using Space Optimized Method
 
function fib(n)
{
    let a = 0, b = 1, c, i;
    if( n == 0)
        return a;
    for(i = 2; i <= n; i++)
    {
    c = a + b;
    a = b;
    b = c;
    }
    return b;
}
 
// Driver code
 
    let n = 9;
     
    document.write(fib(n));