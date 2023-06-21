//Repeat previous katas

//Make a function that will return a greeting statement that uses an input; your program should return, "Hello, <name> how are you doing today?".
function greet(name) {
  return `Hello, ${name} how are you doing today?`;
}

//Your task is to make two functions ( max and min, or maximum and minimum, etc., depending on the language ) that receive a list of integers as input, and return the
//largest and lowest number in that list, respectively.

var min = function (list) {
  return Math.min(...list);
};

var max = function (list) {
  return Math.max(...list);
};

//New kata

//Write function RemoveExclamationMarks which removes all exclamation marks from a given string.

function removeExclamationMarks(s) {
  return s.replace(/!/g, "");
}

//Given a non-empty array of integers, return the result of multiplying the values together in order.
function grow(x) {
  return x.reduce((accum, currentValue) => accum * currentValue);
}

//This kata is about multiplying a given number by eight if it is an even number and by nine otherwise.

function simpleMultiplication(number) {
  if (number % 2 === 0) {
    return number * 8;
  } else {
    return number * 9;
  }
}

/*
There is a bus moving in the city which takes and drops some people at each bus stop.
You are provided with a list (or array) of integer pairs. Elements of each pair represent the number of people that get on the bus (the first item) and the number of people that get off the bus (the second item) at a bus stop.
Your task is to return the number of people who are still on the bus after the last bus stop (after the last array). Even though it is the last bus stop, the bus might not be empty and some people might still be inside the bus, they are probably sleeping there :D
Take a look on the test cases.
Please keep in mind that the test cases ensure that the number of people in the bus is always >= 0. So the returned integer can't be negative.
The second value in the first pair in the array is 0, since the bus is empty in the first bus stop.
*/

let number = function (busStops) {
  let totalPeople = 0;

  for (let i = 0; i < busStops.lenth; i++) {
    const [peopleOn, peopleOff] = busStops;
    totalPeople += peopleOn - peopleOff;
  }
  return totalPeople;
};

//Implement a function that accepts 3 integer values a, b, c. The function should return true if a triangle can be built with the sides of given length and false in any other case.
function isTriangle(a, b, c) {
  return a + b > c && a + c > b && b + c > a;
}

/*
Given an array of integers.
Return an array, where the first element is the count of positives numbers and the second element is sum of negative numbers. 0 is neither positive nor negative.
If the input is an empty array or is null, return an empty array.
*/

function countPositivesSumNegatives(input) {
  if (input === null || input.length === 0) {
    return [];
  }

  let countPositives = 0;
  let sumNegatives = 0;

  for (let i = 0; i < input.length; i++) {
    if (input[i] > 0) {
      countPositives++;
    } else if (input[i] < 0) {
      sumNegatives += input[i];
    }
  }
  return [countPositives, sumNegatives];
}
