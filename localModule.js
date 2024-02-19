// Function to check if a number is odd - even
const isOddEven = (num) => {
  if (num % 2 == 0) {
    console.log("Even");
  } else {
    console.log("Odd");
  }
};

// Function to check if a number is positive
const isPosNeg = (num) => {
  if (num >= 0) {
    console.log("Positive");
  } else {
    console.log("Negative");
  }
};

// Function to check if a number is prime
const isPrime = (num) => {
  if (num <= 1) {
    console.log("Not Prime");
  } else {
    let prime = true;
    for (let index = 2; index <= num / 2; index++) {
      if (num % index == 0) {
        prime = false;
        break;
      }
    }
    if (prime) {
      console.log("Prime");
    } else {
      console.log("Not Prime");
    }
  }
};

// Function to check if a number is Armstrong
const isArmstrong = (num) => {
  const totalDigit = String(num).length;
  let sum = 0;
  let temp = num;

  while (temp > 0) {
    const digit = temp % 10;
    sum = sum + Math.pow(digit, totalDigit);
    temp = Math.floor(temp / 10);
  }

  if (num === sum) {
    console.log("Armstrong");
  } else {
    console.log("Not Armstrong");
  }
};

// Function to calculate the factorial of a number
const factorial = (num) => {
  if (num === 0 || num === 1) {
    console.log(num);
  } else {
    let fact = 1;
    for (let index = 2; index <= num; index++) {
      fact = fact * index;
    }
    console.log(fact);
  }
};

// Function to check if a number is a palindrome
const isPalindrome = (num) => {
  const originalNum = num;
  let reversedNum = 0;

  while (num > 0) {
    const digit = num % 10;
    reversedNum = reversedNum * 10 + digit;
    num = Math.floor(num / 10);
  }

  if (originalNum === reversedNum) {
    console.log("Palindrome");
  } else {
    console.log("Not Palindrome");
  }
};

// Function to calculate the sum of digits of a number
const sumOfDigits = (num) => {
  let sum = 0;

  while (num > 0) {
    sum += num % 10;
    num = Math.floor(num / 10);
  }

  console.log(sum);
};

module.exports.isOddEven = isOddEven;
module.exports.isPosNeg = isPosNeg;
module.exports.isPrime = isPrime;
module.exports.isArmstrong = isArmstrong;
module.exports.factorial = factorial;
module.exports.isPalindrome = isPalindrome;
module.exports.sumOfDigits = sumOfDigits;
